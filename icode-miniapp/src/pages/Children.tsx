export default function Children() {
  return (
    <div className="container">
      <h1 className="h1">Детям</h1>
      
      <div className="card">
        <h2 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>
          Хочешь научиться создавать свои игры? (не только Roblox)
        </h2>
        
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: '600' }}>
            Что научишься делать?
          </h3>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0,
            margin: 0 
          }}>
            <li style={{ 
              padding: '8px 0',
              borderBottom: '1px solid #E5E7EB'
            }}>
              🎮 Создавать игровые миры и персонажей
            </li>
            <li style={{ 
              padding: '8px 0',
              borderBottom: '1px solid #E5E7EB'
            }}>
              🎨 Моделировать 3D объекты и анимации
            </li>
            <li style={{ 
              padding: '8px 0',
              borderBottom: '1px solid #E5E7EB'
            }}>
              🌐 Создавать веб-сайты и приложения
            </li>
            <li style={{ 
              padding: '8px 0',
              borderBottom: '1px solid #E5E7EB'
            }}>
              🐍 Программировать на Python
            </li>
          </ul>
        </div>
        
        <div style={{ 
          backgroundColor: '#FFD600',
          padding: '16px',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <p style={{ 
            margin: 0,
            color: '#000000',
            fontWeight: '600'
          }}>
            💡 Первый результат уже на 1-2 занятии!
          </p>
        </div>
        
        <div className="row" style={{ marginTop: '24px' }}>
          <a className="btn btnPrimary" href="#/quiz">
            Пройти квиз и узнать направление
          </a>
          <a className="btn" href="#/">
            Назад в меню
          </a>
        </div>
      </div>
    </div>
  );
}
