import {useLocalStorage} from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = (darkMode) => {
    const [value, setValue] = useLocalStorage(darkMode)

    useEffect(() => {
        if (value) {
            window.document.body.classList.add("dark-mode");
        } else {
            window.document.body.classList.remove("dark-mode")
        }
    }, [value])

    return [value, setValue];
};