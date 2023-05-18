import { withTranslations } from "@catchphrase/react";
import { InformationTextTranslations } from "./InformationText.catchphrase";

const withInformationTextTranslations = withTranslations(
  InformationTextTranslations,
);

export const InformationText = () =>
  withInformationTextTranslations(catchphrase => {
    const { FirstLine, SecondLine, ThirdLine } = catchphrase.getTranslations();

    return (
      <>
        <h1>{"Catchphrase + React"}</h1>
        <p>{FirstLine()}</p>
        <p>{SecondLine()}</p>
        <p>{ThirdLine()}</p>
      </>
    );
  });
