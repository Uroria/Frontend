import propertiesReader from 'properties-reader';
import {IUseLanguage} from "../@types/TLanguage";

export const useLanguage = async (locale: string | undefined): Promise<IUseLanguage>  => {
    const languageProperties = await propertiesReader(__dirname + "/../../../public/Language/Language_" + locale + ".properties").getAllProperties();
    const languageName = locale;
    return {languageName, languageProperties}
}

