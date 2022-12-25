import { createCatchphrase } from "@catchphrase/core";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { withTranslations } from "./withTranslation";

describe("withTranslation", () => {
  type Languages = "en" | "de";

  type Translations = {
    Greeting: (name: string) => string;
  };

  const { createTranslation } = createCatchphrase<Languages>({
    defaultLanguage: "de",
  });

  const translations = createTranslation<Translations>(() => ({
    en: {
      Greeting: (name) => `Hello ${name}!`,
    },
    de: {
      Greeting: (name) => `Hallo ${name}!`,
    },
  }));

  it("should render a translated component", () => {
    const TranslatedComponent = () =>
      // TODO this is not the final API
      withTranslations(translations)(({ selectLanguage }) => {
        const { Greeting } = selectLanguage("de");

        return <div>{Greeting("André")}</div>;
      });

    render(<TranslatedComponent />);

    expect(screen.getByText("Hallo André!")).toBeInTheDocument();
  });
});
