import { useLocation } from "react-router-dom";

export default function BottomNavigation() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#FFFFFF',
      borderTop: '1px solid #E5E7EB',
      padding: '12px 0',
      display: 'flex',
      justifyContent: 'space-around',
      zIndex: 1000
    }}>
      <a 
        href="#/" 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textDecoration: 'none',
          color: isActive('/') ? '#FFD600' : '#6B7280',
          fontSize: '12px',
          fontWeight: isActive('/') ? '600' : '400'
        }}
      >
        <span style={{ fontSize: '20px', marginBottom: '4px' }}>🏠</span>
        Главная
      </a>
      
      <a 
        href="#/parents" 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textDecoration: 'none',
          color: isActive('/parents') ? '#FFD600' : '#6B7280',
          fontSize: '12px',
          fontWeight: isActive('/parents') ? '600' : '400'
        }}
      >
        <span style={{ fontSize: '20px', marginBottom: '4px' }}>👨‍👩‍👧‍👦</span>
        Родителям
      </a>
      
      <a 
        href="#/children" 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textDecoration: 'none',
          color: isActive('/children') ? '#FFD600' : '#6B7280',
          fontSize: '12px',
          fontWeight: isActive('/children') ? '600' : '400'
        }}
      >
        <span style={{ fontSize: '20px', marginBottom: '4px' }}>👶</span>
        Детям
      </a>
    </nav>
  );
}
