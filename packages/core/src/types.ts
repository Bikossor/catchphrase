export type LikeLanguageCode = string | number | symbol;

/**
 * Used to wrap each definition of translation options.
 */
export type TranslationOptions<T> = Readonly<T>;

/**
 * Used to implement the `TranslationOptions`.
 */
export type TranslationMap<
  L extends LikeLanguageCode,
  O extends TranslationOptions<{}>
> = {
  [languageCode in L]: {
    [optionKey in keyof O]: (options?: O[optionKey]) => string;
  };
};
