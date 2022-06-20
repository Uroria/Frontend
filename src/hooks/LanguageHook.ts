import {useContext} from "react";
import Language from "../components/Language";
import {ILanguage} from "../@types/TLanguage";

export const useLanguage = (): ILanguage => {
    return useContext(Language);
}
export const useLanguageTranslation = (key: string): string => {
    return useLanguage()[key]
}

export const useLanguageTranslations = (key: string): string[] => {
    const result = [];
    for (let i = 1; useLanguage()[key + "." + i]; i++) {
        result.push(useLanguage()[key + "." + i]);
    }
    return result;
}