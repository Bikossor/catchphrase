import { createTranslation } from "../../catchphrase";

type Translations = {
  FirstLine: () => string;
  SecondLine: () => string;
  ThirdLine: () => string;
};

export const InformationTextTranslations = createTranslation<Translations>(
  () => ({
    en: {
      FirstLine: () =>
        "These translations depend on the language of your browser.",
      SecondLine: () =>
        "If you change the language of your browser, the translations will change too.",
      ThirdLine: () => "In this example only German and English are supported.",
    },
    de: {
      FirstLine: () =>
        "Diese Übersetzungen hängen von der Sprache deines Browsers ab.",
      SecondLine: () =>
        "Wenn du die Sprache deines Browsers änderst, ändern sich auch die Übersetzungen.",
      ThirdLine: () =>
        "In diesem Beispiel wird nur Deutsch und Englisch unterstützt.",
    },
  }),
);
