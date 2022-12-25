import { createCatchphrase } from "./createCatchphrase";

describe("createCatchphrase", () => {
  type LanguageCode = "de" | "en";

  it("should set the default language", () => {
    const { getDefaultLanguage } = createCatchphrase<LanguageCode>({
      defaultLanguage: "de",
    });

    expect(getDefaultLanguage()).toStrictEqual<LanguageCode>("de");
  });
});
