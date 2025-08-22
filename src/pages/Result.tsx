import { useEffect, useMemo } from "react";
import { questions } from "../data/questions";
import { setMainButton, tg } from "../lib/telegram";

export default function Result() {
  // Для простоты считаем результат по sessionStorage:
  const raw = sessionStorage.getItem("answers");
  const answers: Record<string,string> = raw ? JSON.parse(raw) : {};

  const score = useMemo(() => {
    let s = 0;
    for (const q of questions) {
      const aId = answers[q.id];
      if (q.answers.find(a => a.id === aId && a.isCorrect)) s++;
    }
    return s;
  }, [raw]);

  useEffect(() => {
    // На GH Pages без бэка просто показываем кнопку: перейти на пробное/в бот.
    const click = () => { 
      try { tg.HapticFeedback?.notificationOccurred?.("success"); } catch {}
      window.location.hash = "#/about"; 
    };
    setMainButton("Записаться на пробное", click, true);
  }, []);

  return (
    <div className="container row">
      <h1 className="h1">Результат</h1>
                     <div className="card">Правильных ответов: <b style={{color:"#000000"}}>{score}</b> из {questions.length}</div>
      <a className="btn" href="#/">Вернуться в меню</a>
    </div>
  );
}
