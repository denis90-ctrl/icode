// Конфигурация приложения iKODe
export const APP_CONFIG = {
  // Изображения
  CAT_IMAGE_URL: '', // URL картинки с котом (пустая строка = не показывать)
  
  // Школа
  SCHOOL_ADDRESS: 'г. Воткинск, ул. Ленина, д. 1', // Заглушка адреса
  BOT_USERNAME: 'IKODe_app_bot',
  
  // Возрастные группы
  AGE_GROUPS: [
    { id: '7-8', label: '7–8 лет', range: '7–8' },
    { id: '9-10', label: '9–10 лет', range: '9–10' },
    { id: '11+', label: '11+ лет', range: '11+' }
  ] as const,
  
  // Мастер-классы по возрастам
  MASTER_CLASSES: {
    '7-8': {
      id: 'kodu',
      name: 'Kodu Game Lab',
      description: 'Создание игровых миров и прохождение миссий',
      resultText: 'соберёт игровой уровень, пройдёт миссию'
    },
    '9-10': {
      id: 'roblox',
      name: 'Roblox',
      description: 'Создание игр и 3D сцен',
      resultText: 'создаст сцену и правило «подобрал монетку = +1»'
    },
    '11+': {
      id: 'web',
      name: 'Создание сайта',
      description: 'Разработка веб-страниц',
      resultText: 'соберёт мини-страницу с фото и кнопкой'
    }
  } as const,
  
  // Абонементы
  PLANS: [
    {
      id: 'year',
      name: 'Годовой абонемент',
      description: 'Полный курс на год',
      features: ['Все направления', 'Проекты в портфолио', 'Поддержка']
    },
    {
      id: 'month',
      name: 'Месячный',
      description: 'Курс на месяц',
      features: ['Выбранное направление', 'Мини-проект', 'Базовые навыки']
    },
    {
      id: 'single',
      name: 'Разовое занятие',
      description: 'Пробное занятие',
      features: ['Знакомство с направлением', 'Практика', 'Оценка уровня']
    }
  ] as const
};

// Типы для TypeScript
export type AgeGroup = typeof APP_CONFIG.AGE_GROUPS[number]['id'];
export type MasterClass = typeof APP_CONFIG.MASTER_CLASSES[AgeGroup]['id'];
export type PlanId = typeof APP_CONFIG.PLANS[number]['id'];
