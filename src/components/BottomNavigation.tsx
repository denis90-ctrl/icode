import { useLocation } from "react-router-dom";

export default function BottomNavigation() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="bottom-nav">
      <a 
        href="#/" 
        className={`nav-item ${isActive("/") ? "active" : ""}`}
      >
        <div className="nav-icon">🏠</div>
        <span>Главная</span>
      </a>
      
      <a 
        href="#/parents" 
        className={`nav-item ${isActive("/parents") ? "active" : ""}`}
      >
        <div className="nav-icon">👨‍👩‍👧‍👦</div>
        <span>Родителям</span>
      </a>
      
      <a 
        href="#/children" 
        className={`nav-item ${isActive("/children") ? "active" : ""}`}
      >
        <div className="nav-icon">👶</div>
        <span>Детям</span>
      </a>
    </nav>
  );
}
