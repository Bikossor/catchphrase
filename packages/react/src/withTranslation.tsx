import { CreateTranslationReturn, LanguageCode } from "@catchphrase/core";
import { FC } from "react";

export const withTranslations =
  <L extends LanguageCode, K extends object>(
    translationProps: CreateTranslationReturn<L, K>
  ) =>
  (Component: FC<CreateTranslationReturn<L, K>>) =>
    <Component {...translationProps} />;
