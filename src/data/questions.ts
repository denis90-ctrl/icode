export type Answer = { 
  id: string; 
  text: string; 
  tracks: { [key: string]: number }; // R, D, W, A
  bonus?: number; // бонус ко всем трекам
};

export type Question = { 
  id: string; 
  title: string; 
  answers: Answer[];
  ageSpecific?: boolean; // специальный вопрос по возрасту
};

export const questions: Question[] = [
  { id:"q1", title:"Что ребёнку скорее понравится?", answers:[
    { id:"a", text:"Игровые миры", tracks: { R: 1 } },
    { id:"b", text:"Лепить героев/объекты", tracks: { D: 1 } },
    { id:"c", text:"Делать странички для телефона", tracks: { W: 1 } },
    { id:"d", text:"«Чтобы кнопки что-то делали»", tracks: { A: 1 } }
  ]},
  { id:"q2", title:"Какой результат через 1–2 занятия?", answers:[
    { id:"a", text:"Игровая сцена с монетками", tracks: { R: 1 } },
    { id:"b", text:"3D-модель машинки/героя", tracks: { D: 1 } },
    { id:"c", text:"Мини-сайт/визитка", tracks: { W: 1 } },
    { id:"d", text:"Апп-счётчик/опрос", tracks: { A: 1 } }
  ]},
  { id:"q3", title:"Как учиться комфортнее?", answers:[
    { id:"a", text:"«Покажите пример → повторю → изменю»", tracks: { R: 1, D: 1 } },
    { id:"b", text:"«Коротко объяснить → сделать аккуратно»", tracks: { W: 1 } },
    { id:"c", text:"«Дайте попробовать, разберусь сам(а)»", tracks: { A: 1 } }
  ]},
  { id:"q4", title:"Что важнее для родителя сейчас?", answers:[
    { id:"a", text:"Интерес и дисциплина (регулярность)", tracks: {}, bonus: 1 },
    { id:"b", text:"Видимый «осязаемый» результат", tracks: { D: 1, W: 1 } },
    { id:"c", text:"Команда и общение", tracks: { R: 1 } },
    { id:"d", text:"Самостоятельность и ответственность", tracks: { A: 1 } }
  ]},
  { id:"q5", title:"Когда удобнее ходить?", answers:[
    { id:"a", text:"Будни после 16:00", tracks: {} },
    { id:"b", text:"Выходные", tracks: {} },
    { id:"c", text:"Не важно", tracks: {} }
  ]}
];

// Специальные вопросы по возрасту
export const ageSpecificQuestions: { [key: string]: Question } = {
  "6-8": {
    id: "q6a",
    title: "Что больше нравится?",
    ageSpecific: true,
    answers: [
      { id: "a", text: "Играть и собирать уровни", tracks: { R: 1 } },
      { id: "b", text: "Рисовать/лепить героев", tracks: { D: 1 } }
    ]
  },
  "9-11": {
    id: "q6b",
    title: "Что хочется создать?",
    ageSpecific: true,
    answers: [
      { id: "a", text: "Карта с правилами", tracks: { R: 1 } },
      { id: "b", text: "3D-сцена", tracks: { D: 1 } },
      { id: "c", text: "Красивая страничка", tracks: { W: 1 } },
      { id: "d", text: "Кнопка «считает»", tracks: { A: 1 } }
    ]
  },
  "12-14": {
    id: "q6c",
    title: "Что важнее в результате?",
    ageSpecific: true,
    answers: [
      { id: "a", text: "Удобно/красиво на телефоне", tracks: { W: 1 } },
      { id: "b", text: "Чтобы «работало»", tracks: { A: 1 } },
      { id: "c", text: "Свои уровни/миссии", tracks: { R: 1 } },
      { id: "d", text: "Реализм в 3D", tracks: { D: 1 } }
    ]
  },
  "15-17": {
    id: "q6c",
    title: "Какой проект интереснее?",
    ageSpecific: true,
    answers: [
      { id: "a", text: "Лэндинг-портфолио", tracks: { W: 1 } },
      { id: "b", text: "Апп-таймер", tracks: { A: 1 } },
      { id: "c", text: "Игровой челлендж", tracks: { R: 1 } },
      { id: "d", text: "3D-сцена со светом", tracks: { D: 1 } }
    ]
  }
};

export const ageGroups = [
  { id: "6-8", label: "6–8 лет" },
  { id: "9-11", label: "9–11 лет" },
  { id: "12-14", label: "12–14 лет" },
  { id: "15-17", label: "15–17 лет" }
];
