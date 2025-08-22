import { useEffect, useState } from "react";
import { setMainButton, tg } from "../lib/telegram";

const tariffs = [
  { id:"start", title:"Старт", desc:"Вводный модуль + 4 занятия" },
  { id:"base",  title:"База",  desc:"8 занятий + проект" },
  { id:"pro",   title:"Про",   desc:"12 занятий + 2 проекта" },
];

export default function Tariffs() {
  const [picked, setPicked] = useState<string>("");

  useEffect(() => {
    const onConfirm = () => {
      if (!picked) return;
      try { tg.sendData?.(JSON.stringify({ type:"tariff_choice", tariffId: picked })); } catch {}
      alert("Тариф выбран. Мы свяжемся с вами в чате бота.");
    };
    setMainButton("Выбрать тариф", onConfirm, !!picked);
  }, [picked]);

  return (
    <div className="container">
      <h1 className="h1">Выберите тариф</h1>
      <div className="grid">
        {tariffs.map(t => (
                             <label key={t.id} className="card" style={{cursor:"pointer", borderColor: picked===t.id ? "#FFD600" : undefined, boxShadow: picked===t.id ? "0 0 0 2px #FFD600" : undefined}}>
            <input type="radio" name="tariff" value={t.id} checked={picked===t.id} onChange={()=>setPicked(t.id)} />
            <b style={{marginLeft:8}}>{t.title}</b>
                                 <div style={{color:"#6B7280", marginTop:6}}>{t.desc}</div>
          </label>
        ))}
      </div>
      <a className="btn" href="#/">Назад</a>
    </div>
  );
}
