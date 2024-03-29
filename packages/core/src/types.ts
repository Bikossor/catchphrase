export type LanguageCode = string | number | symbol;

export type TranslationThunk<L extends LanguageCode, K extends object> = () => {
  [language in L]: K;
};

export type CreateTranslationReturn<
  L extends LanguageCode,
  K extends object,
> = {
  /**
   * Returns the translations for the given language.
   */
  selectLanguage: (languageCode: L) => K;
  /**
   * Returns all language codes.
   */
  getLanguageCodes: () => L[];
  /**
   * Returns the translations.
   */
  getTranslations: () => K;
};

export type Catchphrase<L extends LanguageCode> = {
  createTranslation: <K extends object>(
    translationThunk: TranslationThunk<L, K>,
  ) => CreateTranslationReturn<L, K>;
  getLanguage: () => LanguageCode;
};

export type LanguageSelector<L extends LanguageCode> = () => L;

export type CatchphraseConfig<L extends LanguageCode> = {
  languageSelector: LanguageSelector<L>;
};

// TODO maybe merge this with CatchphraseConfig?
export type CreateTranslationConfig<L extends LanguageCode> = {
  languageSelector: LanguageSelector<L>;
};
