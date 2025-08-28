export default function Parents() {
  return (
    <div className="container">
      <h1 className="h1">Родителям</h1>
      
      <div className="card">
        <h2 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>
          Развиваем интерес к программированию через практику
        </h2>
        
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: '600' }}>
            Что даём вашему ребёнку?
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
              🎯 Интерес без борьбы и принуждения
            </li>
            <li style={{ 
              padding: '8px 0',
              borderBottom: '1px solid #E5E7EB'
            }}>
              🚀 Осязаемый результат на 1-2 занятии
            </li>
            <li style={{ 
              padding: '8px 0',
              borderBottom: '1px solid #E5E7EB'
            }}>
              🎮 Навыки создания игр
            </li>
            <li style={{ 
              padding: '8px 0',
              borderBottom: '1px solid #E5E7EB'
            }}>
              🎨 3D моделирование и анимация
            </li>
            <li style={{ 
              padding: '8px 0',
              borderBottom: '1px solid #E5E7EB'
            }}>
              🌐 Веб-разработка
            </li>
            <li style={{ 
              padding: '8px 0',
              borderBottom: '1px solid #E5E7EB'
            }}>
              💻 Программирование
            </li>
          </ul>
        </div>
        
        <div style={{ 
          backgroundColor: '#FFD600',
          padding: '16px',
          borderRadius: '8px',
          textAlign: 'center',
          marginBottom: '24px'
        }}>
          <p style={{ 
            margin: 0,
            color: '#000000',
            fontWeight: '600'
          }}>
            ✅ Безопасная среда, опытные наставники рядом
          </p>
        </div>
        
        <div className="row">
          <a className="btn btnPrimary" href="#/quiz">
            Пройти квиз для ребёнка
          </a>
          <a className="btn" href="#/about">
            Узнать подробнее о школе
          </a>
          <a className="btn" href="#/">
            Назад в меню
          </a>
        </div>
      </div>
    </div>
  );
}
