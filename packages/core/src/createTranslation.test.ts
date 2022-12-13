import { createTranslation } from "./createTranslation";

describe("createTranslation", () => {
  type TranslationType = {
    Greeting: (name: string) => string;
  };

  type LanguageCode = "de" | "en";

  it('should return the correct translations for "de"', () => {
    const { selectLanguage } = createTranslation<LanguageCode, TranslationType>(
      () => ({
        de: { Greeting: (name) => `Hallo ${name}!` },
        en: { Greeting: (name) => `Hello ${name}!` },
      })
    );

    const { Greeting } = selectLanguage("de");
    expect(Greeting("André")).toStrictEqual("Hallo André!");
  });

  it('should return the correct translations for "en"', () => {
    const { selectLanguage } = createTranslation<LanguageCode, TranslationType>(
      () => ({
        de: { Greeting: (name) => `Hallo ${name}!` },
        en: { Greeting: (name) => `Hello ${name}!` },
      })
    );

    const { Greeting } = selectLanguage("en");
    expect(Greeting("André")).toStrictEqual("Hello André!");
  });

  it("should return a getLanguageCodes function", () => {
    const { getLanguageCodes } = createTranslation<
      LanguageCode,
      TranslationType
    >(() => ({
      de: { Greeting: (name) => `Hallo ${name}!` },
      en: { Greeting: (name) => `Hello ${name}!` },
    }));

    expect(getLanguageCodes()).toStrictEqual(["de", "en"]);
  });
});
