import { createTranslation } from "./createTranslation";
import { Catchphrase, LanguageCode } from "./types";

/**
 * Creates a new catchphrase instance
 * @returns
 */
export const createCatchphrase = <L extends LanguageCode>(): Catchphrase<L> => {
  let defaultLanguage: L = null;

  const setDefaultLanguage = (languageCode: L) => {
    defaultLanguage = languageCode;
  };

  return {
    /**
     * Creates a new translation
     */
    createTranslation,
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
