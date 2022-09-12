import { ThemeContext } from './context';
import { useEffect, useState } from 'react';
import './App.css';
import BodyTable from './components/body-table/bodyTable';
import ThemeSwitcher from './themeSwitcher';


function App() {

  // Tema useState
  const [themes, setThemes] = useState('Light')

  // theme değiştikçe body renginin değişmesi
  useEffect(() => {
    document.body.className = themes
  }, [themes])


  // context ile gönderilicek value lar
  const data = {
    themes,
    setThemes
  }


  return (
    <ThemeContext.Provider value={data}>
      <nav className="navbar">
        BOOTCAMP HOMEWORK 3
      </nav>
      <div className="container">
        <ThemeSwitcher />
        <div className="App">
          <BodyTable />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;