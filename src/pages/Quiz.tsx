import { useMemo, useState } from "react";
import { questions } from "../data/questions";

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string,string>>({});

  const q = questions[step];
  const progress = useMemo(()=> Math.round((step / questions.length) * 100), [step]);

  const pick = (answerId: string) => {
    if (!q) return;
    const newAnswers = { ...answers, [q.id]: answerId };
    setAnswers(newAnswers);
    sessionStorage.setItem("answers", JSON.stringify(newAnswers));
    
    if (step + 1 < questions.length) setStep(step + 1);
    else window.location.hash = "#/result";
  };

  if (!q) { window.location.hash = "#/result"; return null; }

  return (
    <div className="container row">
      <div className="badge">Прогресс: {progress}%</div>
      <div className="card">
                         <h2 style={{marginTop:0, color:"#000000"}}>{q.title}</h2>
        <div className="row">
          {q.answers.map(a => (
            <button key={a.id} className="btn" onClick={()=>pick(a.id)}>{a.text}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
