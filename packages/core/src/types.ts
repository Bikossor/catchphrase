export type LanguageCode = string | number | symbol;

export type TranslationThunk<L extends LanguageCode, K extends object> = () => {
  [language in L]: K;
};

export type CreateTranslationReturn<
  L extends LanguageCode,
  K extends object
> = {
  /**
   * Returns the translations for the given language.
   */
  selectLanguage: (languageCode: L) => K;
  /**
   * Returns all language codes.
   */
  getLanguageCodes: () => L[];
};

export type Catchphrase<T extends LanguageCode> = {
  createTranslation: <K extends object, L extends LanguageCode = T>(
    translationThunk: TranslationThunk<L, K>
  ) => CreateTranslationReturn<L, K>;
  setDefaultLanguage: (languageCode: LanguageCode) => void;
  getDefaultLanguage: () => LanguageCode;
};
