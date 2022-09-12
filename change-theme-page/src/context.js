import { useContext } from "react";
import { createContext } from "react";


// contextin olşturulması
const ThemeContext = createContext();

export {
    ThemeContext,
    useContext
}