export default function Parents() {
  return (
    <div className="container row">
      <h1 className="h1">Родителям</h1>
      
      <div className="card">
        <h3 style={{marginTop: 0, color: "#000000"}}>О наших курсах</h3>
        <p style={{color: "#6B7280", lineHeight: "1.6"}}>
          Мы обучаем детей программированию через практику. Наши курсы включают:
        </p>
        <ul style={{color: "#6B7280", paddingLeft: "20px"}}>
          <li>Roblox Studio - создание игр</li>
          <li>3D моделирование и анимация</li>
          <li>Мобильные приложения</li>
          <li>Веб-разработка</li>
        </ul>
      </div>

      <div className="card">
        <h3 style={{marginTop: 0, color: "#000000"}}>Почему выбирают нас?</h3>
        <div style={{color: "#6B7280", lineHeight: "1.6"}}>
          <p>✅ Первый результат уже на первых занятиях</p>
          <p>✅ Индивидуальный подход к каждому ребёнку</p>
          <p>✅ Опытные преподаватели-практики</p>
          <p>✅ Современные технологии и методики</p>
        </div>
      </div>

      <a className="btn btnPrimary" href="#/tariffs">Посмотреть тарифы</a>
      <a className="btn" href="#/about">Узнать подробнее</a>
    </div>
  );
}
