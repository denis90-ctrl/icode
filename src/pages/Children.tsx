export default function Children() {
  return (
    <div className="container row">
      <h1 className="h1">Детям</h1>
      
      <div className="card">
        <h3 style={{marginTop: 0, color: "#000000"}}>🎮 Создавай свои игры!</h3>
        <p style={{color: "#6B7280", lineHeight: "1.6"}}>
          Хочешь создать свою игру как в Roblox? Приходи к нам!
        </p>
      </div>

      <div className="card">
        <h3 style={{marginTop: 0, color: "#000000"}}>🚀 Что ты научишься делать?</h3>
        <div style={{color: "#6B7280", lineHeight: "1.6"}}>
          <p>🎯 Создавать 3D миры и персонажей</p>
          <p>🎯 Программировать игровую логику</p>
          <p>🎯 Делать мобильные приложения</p>
          <p>🎯 Создавать веб-сайты</p>
        </div>
      </div>

      <div className="card">
        <h3 style={{marginTop: 0, color: "#000000"}}>🎨 Это весело и интересно!</h3>
        <p style={{color: "#6B7280", lineHeight: "1.6"}}>
          У нас нет скучных уроков! Только практика, творчество и результат!
        </p>
      </div>

      <a className="btn btnPrimary" href="#/quiz">Пройти мини-квиз</a>
      <a className="btn" href="#/about">Узнать больше</a>
    </div>
  );
}
