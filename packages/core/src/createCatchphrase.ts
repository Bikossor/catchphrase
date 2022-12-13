import { createTranslation } from "./createTranslation";
import { Catchphrase, LanguageCode } from "./types";

/**
 * Creates a new catchphrase instance
 * @returns
 */
export const createCatchphrase = <L extends LanguageCode>(): Catchphrase => {
  let defaultLanguage: L = null;

  const setDefaultLanguage = (languageCode: L) => {
    defaultLanguage = languageCode;
  };

  return {
    /**
     * Creates a new translation
     */
    createTranslation, // TODO: remove languageCode from createTranslation and use it from the catchphrase object
    /**
     * Sets the default language for the catchphrase instance
     */
    setDefaultLanguage,
    /**
     * @returns the default language for the catchphrase instance
     */
    getDefaultLanguage: () => defaultLanguage,
  };
};
