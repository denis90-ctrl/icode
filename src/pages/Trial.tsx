import { useState, useEffect } from "react";
import { setMainButton, tg, isTelegram } from "../lib/telegram";

export default function Trial() {
  const [fio, setFio] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [track, setTrack] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    // Загружаем данные из квиза
    const selectedAge = sessionStorage.getItem("selectedAge");
    const answers = sessionStorage.getItem("answers");
    
    if (selectedAge) {
      setAge(selectedAge);
    }
    
    if (answers) {
      const parsedAnswers = JSON.parse(answers);
      // Определяем трек из результатов
      const scores = { R: 0, D: 0, W: 0, A: 0 };
      // Упрощённая логика определения трека
      if (parsedAnswers.q1 === "a") scores.R += 1;
      if (parsedAnswers.q1 === "b") scores.D += 1;
      if (parsedAnswers.q1 === "c") scores.W += 1;
      if (parsedAnswers.q1 === "d") scores.A += 1;
      
      const maxTrack = Object.entries(scores).reduce((a, b) => scores[a[0] as keyof typeof scores] > scores[b[0] as keyof typeof scores] ? a : b)[0];
      setTrack(maxTrack);
    }

    // Устанавливаем MainButton в Telegram
    const onConfirm = () => {
      if (!fio || !phone) return;
      
      try {
        tg.sendData?.(JSON.stringify({
          type: "trial_request",
          fio,
          phone,
          age,
          track,
          time,
          source: "VK → Mini App"
        }));
        alert("Заявка отправлена! Мы свяжемся с вами для подтверждения времени.");
        window.location.hash = "#/tariffs";
      } catch (error) {
        alert("Ошибка отправки. Попробуйте ещё раз.");
      }
    };

    setMainButton("Отправить заявку", onConfirm, !!fio && !!phone);
  }, [fio, phone, age, track, time]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fio || !phone) return;
    
    if (isTelegram()) {
      // В Telegram используем MainButton
      return;
    }
    
    // Фолбэк для браузера
    alert("Откройте мини-приложение в Telegram боте @IKODe_app_bot для отправки заявки");
    window.open("https://t.me/IKODe_app_bot", "_blank");
  };



  const ageLabels = {
    "6-8": "6–8 лет",
    "9-11": "9–11 лет", 
    "12-14": "12–14 лет",
    "15-17": "15–17 лет"
  };

  return (
    <div className="container row">
      <h1 className="h1">Запись на пробное занятие</h1>
      
      <form onSubmit={handleSubmit} className="card">
        <div style={{marginBottom: "16px"}}>
          <label style={{display: "block", marginBottom: "8px", fontWeight: "600", color: "#000000"}}>
            ФИО родителя *
          </label>
          <input
            type="text"
            value={fio}
            onChange={(e) => setFio(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #E5E7EB",
              borderRadius: "8px",
              fontSize: "16px"
            }}
            placeholder="Иванов Иван Иванович"
          />
        </div>

        <div style={{marginBottom: "16px"}}>
          <label style={{display: "block", marginBottom: "8px", fontWeight: "600", color: "#000000"}}>
            Телефон *
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #E5E7EB",
              borderRadius: "8px",
              fontSize: "16px"
            }}
            placeholder="+7 (999) 123-45-67"
          />
        </div>

        <div style={{marginBottom: "16px"}}>
          <label style={{display: "block", marginBottom: "8px", fontWeight: "600", color: "#000000"}}>
            Возраст ребёнка
          </label>
          <input
            type="text"
            value={ageLabels[age as keyof typeof ageLabels] || ""}
            disabled
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #E5E7EB",
              borderRadius: "8px",
              fontSize: "16px",
              backgroundColor: "#F9FAFB",
              color: "#6B7280"
            }}
          />
        </div>

        <div style={{marginBottom: "16px"}}>
          <label style={{display: "block", marginBottom: "8px", fontWeight: "600", color: "#000000"}}>
            Рекомендуемый трек
          </label>
          <select
            value={track}
            onChange={(e) => setTrack(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #E5E7EB",
              borderRadius: "8px",
              fontSize: "16px"
            }}
          >
            <option value="">Выберите трек</option>
            <option value="R">Roblox/гейм-дизайн</option>
            <option value="D">3D-моделирование</option>
            <option value="W">Web-разработка</option>
            <option value="A">Мобильные приложения</option>
          </select>
        </div>

        <div style={{marginBottom: "20px"}}>
          <label style={{display: "block", marginBottom: "8px", fontWeight: "600", color: "#000000"}}>
            Удобное время
          </label>
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #E5E7EB",
              borderRadius: "8px",
              fontSize: "16px"
            }}
          >
            <option value="">Выберите время</option>
            <option value="Будни после 16:00">Будни после 16:00</option>
            <option value="Выходные">Выходные</option>
            <option value="Не важно">Не важно</option>
          </select>
        </div>

        {!isTelegram() && (
          <button 
            type="submit" 
            className="btn btnPrimary"
            disabled={!fio || !phone}
          >
            Отправить заявку
          </button>
        )}
      </form>

      <a className="btn" href="#/tariffs">Посмотреть тарифы</a>
      <a className="btn" href="#/">Вернуться в меню</a>
    </div>
  );
}
