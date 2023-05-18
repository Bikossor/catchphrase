import { createTranslation } from "../../catchphrase";

type Translations = {
  Greeting: () => string;
};

export const GreetingTranslations = createTranslation<Translations>(() => ({
  en: {
    Greeting: () => "Hello World!",
  },
  de: {
    Greeting: () => "Hallo Welt!",
  },
}));
