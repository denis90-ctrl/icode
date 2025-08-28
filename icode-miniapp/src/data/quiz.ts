import { type AgeGroup } from '../config/app';

// Структура ответа квиза
export interface QuizAnswer {
  ageGroup: AgeGroup;
  interest: string;
  parentPriority: string;
  timePreference: string;
}

// Вопросы квиза
export const QUIZ_QUESTIONS = {
  // Q0: Возраст
  age: {
    id: 'age',
    title: 'Выберите возраст ребёнка',
    type: 'radio',
    options: [
      { id: '7-8', text: '7–8 лет', value: '7-8' },
      { id: '9-10', text: '9–10 лет', value: '9-10' },
      { id: '11+', text: '11+ лет', value: '11+' }
    ]
  },

  // Q1: Интерес (зависит от возраста)
  interest: {
    '7-8': {
      id: 'interest',
      title: 'Что больше нравится ребёнку?',
      type: 'radio',
      options: [
        { id: 'games', text: 'Создавать игровые миры', value: 'GAMES' },
        { id: '3d', text: 'Моделировать/конструировать', value: '3D' },
        { id: 'logic', text: 'Решать логические задачки', value: 'LOGIC' }
      ]
    },
    '9-10': {
      id: 'interest',
      title: 'Что больше нравится ребёнку?',
      type: 'radio',
      options: [
        { id: 'games', text: 'Создавать игровые миры', value: 'GAMES' },
        { id: '3d', text: 'Моделировать/конструировать', value: '3D' },
        { id: 'code', text: 'Программировать персонажей', value: 'CODE' }
      ]
    },
    '11+': {
      id: 'interest',
      title: 'Что больше нравится ребёнку?',
      type: 'radio',
      options: [
        { id: 'web', text: 'Создавать сайты', value: 'WEB' },
        { id: '3d', text: 'Моделировать', value: '3D' },
        { id: 'code', text: 'Изучать языки программирования', value: 'CODE' }
      ]
    }
  },

  // Q2: Приоритет родителя
  parentPriority: {
    id: 'parentPriority',
    title: 'Что важнее для вас сейчас?',
    type: 'radio',
    options: [
      { id: 'interest', text: 'Интерес и регулярность (без борьбы)', value: 'INTEREST' },
      { id: 'result', text: 'Видимый результат «пощупать/показать»', value: 'RESULT' },
      { id: 'team', text: 'Команда и общение', value: 'TEAM' },
      { id: 'responsibility', text: 'Самостоятельность и ответственность', value: 'RESPONSIBILITY' }
    ]
  },

  // Q3: Время
  time: {
    id: 'time',
    title: 'Когда удобнее ходить?',
    type: 'radio',
    options: [
      { id: 'weekdays', text: 'Будни после 16:00', value: 'Будни после 16:00' },
      { id: 'weekends', text: 'Выходные', value: 'Выходные' },
      { id: 'anytime', text: 'Не важно', value: 'Не важно' }
    ]
  }
};

// Функция для получения вопроса по ID и возрасту
export function getQuestion(questionId: string, ageGroup?: AgeGroup) {
  if (questionId === 'interest' && ageGroup) {
    return QUIZ_QUESTIONS.interest[ageGroup];
  }
  return QUIZ_QUESTIONS[questionId as keyof typeof QUIZ_QUESTIONS];
}

// Функция для определения мастер-класса по возрасту
export function getMasterClassByAge(ageGroup: AgeGroup) {
  switch (ageGroup) {
    case '7-8':
      return { id: 'kodu', name: 'Kodu Game Lab', level: 'Starter' };
    case '9-10':
      return { id: 'roblox', name: 'Roblox', level: 'Explorer' };
    case '11+':
      return { id: 'web', name: 'Создание сайта', level: 'Builder' };
    default:
      return { id: 'kodu', name: 'Kodu Game Lab', level: 'Starter' };
  }
}
