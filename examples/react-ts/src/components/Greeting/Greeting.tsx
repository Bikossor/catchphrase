import { withTranslations } from "@catchphrase/react";
import { GreetingTranslations } from "./Greeting.catchphrase";

const withGreetingTranslations = withTranslations(GreetingTranslations);

export const Greeting = () =>
  withGreetingTranslations(catchphrase => {
    const { Greeting } = catchphrase.getTranslations();

    return <h1>{Greeting()}</h1>;
  });
