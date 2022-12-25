import {
  CreateTranslationConfig,
  CreateTranslationReturn,
  LanguageCode,
  TranslationThunk,
} from "./types";

export const createTranslation =
  <L extends LanguageCode>({ defaultLanguage }: CreateTranslationConfig<L>) =>
  <K extends object>(
    translationThunk: TranslationThunk<L, K>
  ): CreateTranslationReturn<L, K> => {
    const translations = translationThunk();
    const selectLanguage = (languageCode: L) => translations[languageCode];
    const getLanguageCodes = () => Object.keys(translations) as L[];

    return {
      selectLanguage,
      getLanguageCodes,
    };
  };
