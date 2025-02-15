/**
 * The base type for language codes in Catchphrase.
 */
export type LanguageCode = string | number | symbol;

/**
 * A function that returns translations for each language.
 * @see {@link LanguageCode} for the type of the language codes.
 */
export type TranslationThunk<L extends LanguageCode, K extends object> = () => {
  [language in L]: K;
};

/**
 * The return value of the {@link https://catchphrase.dev/api/core/createtranslation/|`createTranslation`} function.
 * @see {@link LanguageCode} for the type of the language codes.
 */
export type CreateTranslationReturn<
  L extends LanguageCode,
  K extends object,
> = {
  /**
   * Returns the translations for the given language.
   * @param languageCode The language to get the translations for.
   * @see {@link LanguageCode} for the type of the language codes.
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
  /**
   * Creates a new translation
   */
  createTranslation: <K extends object>(
    translationThunk: TranslationThunk<L, K>,
  ) => CreateTranslationReturn<L, K>;
  /**
   * Returns the current selected language code
   */
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
