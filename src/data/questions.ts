export type Answer = { id: string; text: string; isCorrect?: boolean };
export type Question = { id: string; title: string; answers: Answer[] };

export const questions: Question[] = [
  { id:"q1", title:"Где создают собственные миры?", answers:[
    { id:"a", text:"Roblox Studio", isCorrect:true },
    { id:"b", text:"YouTube" }, { id:"c", text:"Spotify" }
  ]},
  { id:"q2", title:"Что развивает логику лучше?", answers:[
    { id:"a", text:"Квизы и программирование", isCorrect:true },
    { id:"b", text:"Только мультфильмы" }, { id:"c", text:"Только музыка" }
  ]},
  { id:"q3", title:"Чего ждём от первых занятий?", answers:[
    { id:"a", text:"Готовый мини-проект", isCorrect:true },
    { id:"b", text:"Только теория" }, { id:"c", text:"Домашка без объяснений" }
  ]}
];
