import React from "react";
import { buttonsProps } from "../../../types/buttons";

export const ButtonHeader = (props: buttonsProps) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.name}
    </button>
  );
};
