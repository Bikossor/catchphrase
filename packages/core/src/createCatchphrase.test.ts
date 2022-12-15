import { createCatchphrase } from "./createCatchphrase";

describe("createCatchphrase", () => {
  type LanguageCode = "de" | "en";

  it("should set the default language", () => {
    const { getDefaultLanguage, setDefaultLanguage } =
      createCatchphrase<LanguageCode>();

    setDefaultLanguage("en");

    expect(getDefaultLanguage()).toStrictEqual<LanguageCode>("en");
  });
});
