import { createCatchphrase } from "@catchphrase/core";
import { withTranslations } from "@catchphrase/react";
import "./App.css";

type Languages = "en" | "de";

type Translations = {
  Information1: () => string;
  Information2: () => string;
  Information3: () => string;
};

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

const myTranslations = createTranslation<Translations>(() => ({
  en: {
    Information1: () =>
      "These translations depend on the language of your browser.",
    Information2: () =>
      "If you change the language of your browser, the translations will change too.",
    Information3: () =>
      "In this example only German and English are supported.",
  },
  de: {
    Information1: () =>
      "Diese Übersetzungen hängen von der Sprache deines Browsers ab.",
    Information2: () =>
      "Wenn du die Sprache deines Browsers änderst, ändern sich auch die Übersetzungen.",
    Information3: () =>
      "In diesem Beispiel wird nur Deutsch und Englisch unterstützt.",
  },
}));

const withMyTranslations = withTranslations(myTranslations);

const TranslatedComponent = () =>
  withMyTranslations(({ getTranslations }) => {
    const { Information1, Information2, Information3 } = getTranslations();

    return (
      <>
        <h1>{"Catchphrase + React"}</h1>
        <p>{Information1()}</p>
        <p>{Information2()}</p>
        <p>{Information3()}</p>
      </>
    );
  });

function App() {
  return (
    <div className="App">
      <TranslatedComponent />
    </div>
  );
}

export default App;
