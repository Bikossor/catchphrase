import { createCatchphrase } from "@catchphrase/core";

type Languages = "en" | "de" | "fr";

const { createTranslation } = createCatchphrase<Languages>({
  languageSelector: () => {
    switch (navigator.language) {
      case "de":
      case "de-DE":
        return "de";
      case "en":
      case "en-US":
      default:
        return "en";
    }
  },
});

export { createTranslation };
