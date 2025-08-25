import { useEffect, useMemo } from "react";
import { questions, ageSpecificQuestions } from "../data/questions";
import { setMainButton, tg } from "../lib/telegram";

export default function Result() {
  const raw = sessionStorage.getItem("answers");
  const selectedAge = sessionStorage.getItem("selectedAge");
  const answers: Record<string,string> = raw ? JSON.parse(raw) : {};

  const result = useMemo(() => {
    const scores = { R: 0, D: 0, W: 0, A: 0 };
    let bonus = 0;
    let timePreference = "";

    // Подсчитываем баллы по всем вопросам
    const allQuestions = [...questions];
    if (selectedAge && ageSpecificQuestions[selectedAge]) {
      allQuestions.push(ageSpecificQuestions[selectedAge]);
    }

    allQuestions.forEach(q => {
      const answerId = answers[q.id];
      if (answerId) {
        const answer = q.answers.find(a => a.id === answerId);
        if (answer) {
          // Добавляем баллы по трекам
          Object.entries(answer.tracks).forEach(([track, points]) => {
            scores[track as keyof typeof scores] += points;
          });
          
          // Добавляем бонус ко всем трекам
          if (answer.bonus) {
            bonus += answer.bonus;
          }
        }
      }
    });

    // Применяем бонус ко всем трекам
    if (bonus > 0) {
      Object.keys(scores).forEach(track => {
        scores[track as keyof typeof scores] += bonus;
      });
    }

    // Определяем время из Q5
    const timeAnswer = answers["q5"];
    if (timeAnswer === "a") timePreference = "Будни после 16:00";
    else if (timeAnswer === "b") timePreference = "Выходные";
    else timePreference = "Не важно";

    // Определяем рекомендуемый трек
    const maxScore = Math.max(...Object.values(scores));
    const recommendedTracks = Object.entries(scores)
      .filter(([_, score]) => score === maxScore)
      .map(([track, _]) => track);

    // Определяем уровень
    let level = "Starter";
    if (selectedAge === "9-11" || (answers["q3"] === "a")) level = "Explorer";
    if (selectedAge === "12-14" || (answers["q3"] === "b")) level = "Builder";
    if (selectedAge === "15-17" || (answers["q3"] === "c")) level = "Creator";

    return {
      scores,
      recommendedTracks,
      level,
      timePreference,
      selectedAge
    };
  }, [raw, selectedAge]);

  useEffect(() => {
    // Отправляем результат в Telegram
    try {
      tg.sendData?.(JSON.stringify({
        type: "quiz_result",
        ageBucket: selectedAge,
        answers,
        scores: result.scores,
        recommended: result.recommendedTracks[0],
        level: result.level,
        timePreference: result.timePreference
      }));
    } catch {}

    const click = () => { 
      try { tg.HapticFeedback?.notificationOccurred?.("success"); } catch {}
      window.location.hash = "#/trial"; 
    };
    setMainButton("Записаться на пробное", click, true);
  }, [result, answers, selectedAge]);

  const getTrackDescription = (track: string) => {
    const descriptions = {
      R: "соберёт сцену + правило «подобрал монетку = +1»",
      D: "слепит модель (герой/машинка), настроит цвет/свет",
      W: "мини-сайт с фото и кнопкой «написать нам»",
      A: "апп-счётчик/опрос (кнопка меняет значение)"
    };
    return descriptions[track as keyof typeof descriptions] || "";
  };

  const getTrackName = (track: string) => {
    const names = {
      R: "Roblox/гейм-дизайн",
      D: "3D-моделирование",
      W: "Web-разработка",
      A: "Мобильные приложения"
    };
    return names[track as keyof typeof names] || track;
  };

  const getLevelDescription = () => {
    const descriptions = {
      Starter: "внимание и логика",
      Explorer: "логика и аккуратность", 
      Builder: "аккуратность и командность",
      Creator: "командность и самостоятельность"
    };
    return descriptions[result.level as keyof typeof descriptions] || "";
  };

  return (
    <div className="container row">
      <h1 className="h1">Готово! Ваш старт — {getTrackName(result.recommendedTracks[0])}</h1>
      
      <div className="card">
        <h3 style={{marginTop: 0, color: "#000000"}}>Для ребёнка</h3>
        <p style={{color: "#6B7280", lineHeight: "1.6"}}>
          На пробном занятии ребёнок {getTrackDescription(result.recommendedTracks[0])}
        </p>
      </div>

      <div className="card">
        <h3 style={{marginTop: 0, color: "#000000"}}>Для родителя</h3>
        <p style={{color: "#6B7280", lineHeight: "1.6"}}>
          <strong>Уровень:</strong> {result.level}.<br/>
          <strong>Развиваем:</strong> {getLevelDescription()}.<br/>
          Видимый результат на 1–2 занятии. Безопасная среда, наставник рядом.
        </p>
      </div>

      <div className="card">
        <p style={{color: "#6B7280", lineHeight: "1.6"}}>
          <strong>Удобно:</strong> {result.timePreference}
        </p>
      </div>

      <a className="btn btnPrimary" href="#/trial">Записаться на пробное</a>
      <a className="btn" href="#/tariffs">Посмотреть тарифы</a>
      <a className="btn" href="#/age">Пройти ещё раз</a>
    </div>
  );
}
