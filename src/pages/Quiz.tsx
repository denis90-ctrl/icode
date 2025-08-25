import { useMemo, useState, useEffect } from "react";
import { questions, ageSpecificQuestions } from "../data/questions";

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string,string>>({});
  const [selectedAge, setSelectedAge] = useState<string>("");
  const [allQuestions, setAllQuestions] = useState(questions);

  useEffect(() => {
    const age = sessionStorage.getItem("selectedAge");
    if (!age) {
      window.location.hash = "#/age";
      return;
    }
    setSelectedAge(age);
    
    // Добавляем специальный вопрос по возрасту
    const ageQuestion = ageSpecificQuestions[age];
    if (ageQuestion) {
      setAllQuestions([...questions, ageQuestion]);
    }
  }, []);

  const q = allQuestions[step];
  const progress = useMemo(() => Math.round((step / allQuestions.length) * 100), [step, allQuestions.length]);

  const pick = (answerId: string) => {
    if (!q) return;
    const newAnswers = { ...answers, [q.id]: answerId };
    setAnswers(newAnswers);
    sessionStorage.setItem("answers", JSON.stringify(newAnswers));
    
    if (step + 1 < allQuestions.length) {
      setStep(step + 1);
    } else {
      // Сохраняем возраст для результата
      sessionStorage.setItem("selectedAge", selectedAge);
      window.location.hash = "#/result";
    }
  };

  if (!q) { 
    window.location.hash = "#/result"; 
    return null; 
  }

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
