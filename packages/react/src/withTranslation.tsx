import React, { FC } from "react";
import { TProps } from "./types";

export const withTranslations =
  <M,>(Component: FC<TProps<M>>) =>
  (props: TProps<M>) =>
  () =>
    <Component {...props} />;
