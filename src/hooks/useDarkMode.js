import {useLocalStorage} from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = (key, initialValue) => {
    const [darkModeOn, setDarkModeOn] = useLocalStorage(key, initialValue)

    useEffect(() => {
        if (darkModeOn == true) {
            window.document.body.classList.add("dark-mode");
        } else {
            window.document.body.classList.remove("dark-mode")
        }
    }, [darkModeOn])

    const toggleMode = e => {
        e.preventDefault();
        return darkModeOn ? setDarkModeOn(false) : setDarkModeOn(true);
      };

    return [darkModeOn, setDarkModeOn, toggleMode];
};