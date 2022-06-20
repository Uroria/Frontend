import propertiesReader from 'properties-reader';

export const getLanguage = async (locale: string | undefined): Promise<{ [key: string]: propertiesReader.Value }> =>
    propertiesReader(__dirname + "/../../../public/Language/Language_" + locale + ".properties").getAllProperties();

