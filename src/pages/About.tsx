import { openBotChat } from "../lib/telegram";

const BOT = "IKODe_app_bot"; // подставь при наличии

export default function About() {
  return (
    <div className="container row">
      <h1 className="h1">О школе</h1>
      <div className="card">
                         <p style={{color:"#6B7280", lineHeight:"1.6"}}>Обучаем через практику: Roblox, 3D, мобильные приложения, сайты. Первый результат — на первых занятиях.</p>
        <div className="row">
          <button className="btn btnPrimary" onClick={()=> openBotChat(BOT)}>Написать нам в Telegram</button>
          <a className="btn" href="#/">Назад в меню</a>
        </div>
      </div>
    </div>
  );
}
