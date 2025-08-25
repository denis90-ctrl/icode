import { ageGroups } from "../data/questions";

export default function AgeSelection() {
  const selectAge = (ageId: string) => {
    sessionStorage.setItem("selectedAge", ageId);
    window.location.hash = "#/quiz";
  };

  return (
    <div className="container row">
      <h1 className="h1">Выберите возраст ребёнка</h1>
      
      <div className="card">
        <p style={{color: "#6B7280", lineHeight: "1.6", marginBottom: "20px"}}>
          Это поможет нам подобрать подходящие вопросы и рекомендации
        </p>
        
        <div className="row">
          {ageGroups.map(age => (
            <button 
              key={age.id}
              className="btn" 
              onClick={() => selectAge(age.id)}
              style={{textAlign: "left", padding: "16px"}}
            >
              <div style={{fontSize: "18px", fontWeight: "600", marginBottom: "4px"}}>
                {age.label}
              </div>
              <div style={{fontSize: "14px", opacity: 0.7}}>
                {age.id === "6-8" && "Дошкольники и младшие школьники"}
                {age.id === "9-11" && "Младшие школьники"}
                {age.id === "12-14" && "Средние школьники"}
                {age.id === "15-17" && "Старшие школьники"}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
