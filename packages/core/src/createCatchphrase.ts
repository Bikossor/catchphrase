import { createTranslation } from "./createTranslation";
import { Catchphrase, CatchphraseConfig, LanguageCode } from "./types";

/**
 * Creates a new catchphrase instance
 * @returns
 */
export const createCatchphrase = <L extends LanguageCode>({
  languageSelector,
}: CatchphraseConfig<L>): Catchphrase<L> => {
  return {
    /**
     * Creates a new translation
     */
    createTranslation: createTranslation({ languageSelector }),
    /**
     * @returns the default language for the catchphrase instance
     */
    getDefaultLanguage: () => languageSelector(),
  };
};
