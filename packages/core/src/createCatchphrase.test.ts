import { createCatchphrase } from "./createCatchphrase";

describe("createCatchphrase", () => {
  type LanguageCode = "de" | "en";

  type TranslationType = {
    Greeting: (name: string) => string;
  };

  it("should set the default language", () => {
    const { getLanguage } = createCatchphrase<LanguageCode>({
      languageSelector: () => "de",
    });

    expect(getLanguage()).toStrictEqual<LanguageCode>("de");
  });

  it("should translate a string using the defaultLanguage", () => {
    const { createTranslation } = createCatchphrase<LanguageCode>({
      languageSelector: () => "de",
    });

    const { getTranslations } = createTranslation<TranslationType>(() => ({
      de: {
        Greeting: (name) => `Hallo ${name}`,
      },
      en: {
        Greeting: (name) => `Hello ${name}`,
      },
    }));

    const { Greeting } = getTranslations();

    expect(Greeting("André")).toStrictEqual("Hallo André");
  });
});
