export type LikeLanguageCode = string | number | symbol;

/**
 * Used to wrap each definition of translation options.
 *
 * @example
 * ```
 * type tOptions = TranslationOptions<{
 *   name: string;
 * }>;
 * ```
 */
export type TranslationOptions<T> = Readonly<T>;

/**
 * Used to implement the `TranslationOptions`.
 *
 * @example
 * ```
 * const tMap: TranslationMap<"de" | "en", tOptions> = {
 *   de: {
 *     name: (options) => options.name,
 *   },
 *   en: {
 *     name: (options) => options.name,
 *   },
 * };
 * ```
 */
export type TranslationMap<
  L extends LikeLanguageCode,
  O extends TranslationOptions<{}>
> = {
  [languageCode in L]: {
    [optionKey in keyof O]: (options?: O[optionKey]) => string;
  };
};
