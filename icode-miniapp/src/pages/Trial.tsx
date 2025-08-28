import { useEffect, useState } from "react";
import { setMainButton, tg } from "../lib/telegram";
import { APP_CONFIG, type AgeGroup } from "../config/app";
import { getMasterClassByAge } from "../data/quiz";

export default function Trial() {
  const [fio, setFio] = useState("");
  const [phone, setPhone] = useState("");
  const [ageGroup, setAgeGroup] = useState<AgeGroup | "">("");
  const [masterClass, setMasterClass] = useState("");
  const [timePreference, setTimePreference] = useState("");

  // Загружаем данные из квиза
  useEffect(() => {
    const raw = sessionStorage.getItem("quizAnswers");
    if (raw) {
      try {
        const answers = JSON.parse(raw);
        if (answers.ageGroup) {
          setAgeGroup(answers.ageGroup);
          const masterClassData = getMasterClassByAge(answers.ageGroup);
          setMasterClass(masterClassData.id);
        }
        if (answers.timePreference) {
          setTimePreference(answers.timePreference);
        }
      } catch {}
    }
  }, []);

  useEffect(() => {
    const onConfirm = () => {
      if (!fio.trim() || !phone.trim()) {
        alert("Пожалуйста, заполните все обязательные поля");
        return;
      }

      try {
        tg.sendData?.(JSON.stringify({
          type: "trial_request",
          fio: fio.trim(),
          phone: phone.trim(),
          ageGroup,
          masterClass,
          timePreference,
          source: "VK → Mini App"
        }));
        
        alert("Спасибо! Мы свяжемся с вами. Можно посмотреть Абонементы.");
        window.location.hash = "#/tariffs";
      } catch (error) {
        alert("Ошибка отправки. Попробуйте ещё раз.");
      }
    };

    setMainButton("Отправить заявку", onConfirm, !!fio.trim() && !!phone.trim());
  }, [fio, phone]);

  const isTelegram = () => {
    return !!(tg as any)?.initDataUnsafe?.user || !!tg?.platform;
  };

  return (
    <div className="container row">
      <h1 className="h1">Запись на пробное занятие</h1>
      
      <div className="card">
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
            ФИО родителя *
          </label>
          <input
            type="text"
            value={fio}
            onChange={(e) => setFio(e.target.value)}
            placeholder="Введите ФИО"
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              fontSize: '16px'
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
            Телефон *
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+7 (999) 123-45-67"
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              fontSize: '16px'
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
            Возраст ребёнка
          </label>
          <select
            value={ageGroup}
            onChange={(e) => setAgeGroup(e.target.value as AgeGroup)}
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              fontSize: '16px'
            }}
          >
            <option value="">Выберите возраст</option>
            {APP_CONFIG.AGE_GROUPS.map(group => (
              <option key={group.id} value={group.id}>
                {group.label}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
            Рекомендованный мастер-класс
          </label>
          <select
            value={masterClass}
            onChange={(e) => setMasterClass(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              fontSize: '16px'
            }}
          >
            <option value="">Выберите мастер-класс</option>
            <option value="kodu">Kodu Game Lab</option>
            <option value="roblox">Roblox</option>
            <option value="web">Создание сайта</option>
          </select>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
            Удобное время
          </label>
          <select
            value={timePreference}
            onChange={(e) => setTimePreference(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              fontSize: '16px'
            }}
          >
            <option value="">Выберите время</option>
            <option value="Будни после 16:00">Будни после 16:00</option>
            <option value="Выходные">Выходные</option>
            <option value="Не важно">Не важно</option>
          </select>
        </div>

        {/* Fallback кнопка для браузера */}
        {!isTelegram() && (
          <button
            onClick={() => {
              if (!fio.trim() || !phone.trim()) {
                alert("Пожалуйста, заполните все обязательные поля");
                return;
              }
              alert("Откройте мини-приложение в Telegram боте @IKODe_app_bot для отправки");
            }}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#000000',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '500',
              cursor: 'pointer',
              marginTop: '16px'
            }}
          >
            Отправить заявку
          </button>
        )}
      </div>

      <div className="row">
        <a className="btn" href="#/tariffs">
          Посмотреть абонементы
        </a>
        <a className="btn" href="#/">
          Назад в меню
        </a>
      </div>
    </div>
  );
}
