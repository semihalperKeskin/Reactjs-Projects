import React from "react"
import ReactSwitch from "react-switch"
import {ThemeContext, useContext} from "./context"
import "./App.css"

function ThemeSwitcher() {

  // light theme dark theme geçiş
  // contextin çekilmesi
    const {themes, setThemes} = useContext(ThemeContext)

      const switchThemes = () => {
        setThemes(themes === 'Light' ? 'Dark':'Light')
      }

      return(
        <>
        <div className="container">
          <div className="switcher">
        <span>{themes}</span>
        <ReactSwitch onChange={switchThemes} checked={themes==='Dark'} />
        </div>
        </div>
        </>
      )
}

export default ThemeSwitcher;