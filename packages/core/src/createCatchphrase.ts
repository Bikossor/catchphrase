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
    createTranslation: createTranslation({ languageSelector }),
    getLanguage: () => languageSelector(),
  };
};
