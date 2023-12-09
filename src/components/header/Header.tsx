import React, { useEffect } from "react";
import { ButtonHeader } from "../shared/buttons";
import buttons_header from "../shared/buttons/Buttons.module.css";
import header from "./Header.module.css";
import { Input } from "../shared/input/Input";
import { actionCreator } from "../../redux/helpers/actionCreator";
import { useDispatch, useSelector } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();
  const addCash = "ADD_CASH";
  const caash = useSelector((state: any) => state.bankReducer.cash);
  useEffect(() => {});
  return (
    <header className={header.header}>
      <Input
        value={""}
        onChange={() => console.log("change")}
        placeholder={""}
        type={""}
        action={""}
      />
      <ButtonHeader
        name={"Button 1"}
        className={buttons_header.buttons_header}
        onClick={() => console.log(5)}
      />
      <ButtonHeader
        name={"Button 2"}
        className={buttons_header.buttons_header}
        onClick={() => console.log(5)}
      />
      <ButtonHeader
        name={"Button 3"}
        className={buttons_header.buttons_header}
        onClick={() => console.log(5)}
      />
      <ButtonHeader
        name={"Button 4"}
        className={buttons_header.buttons_header}
        onClick={() => console.log(5)}
      />
      <ButtonHeader
        name={"Button 5"}
        className={buttons_header.buttons_header}
        onClick={{}}
      />
      <ButtonHeader
        name={"Button 6"}
        className={buttons_header.buttons_header}
        onClick={() => dispatch(actionCreator(addCash, 5))}
      />
      <div style={{ fontSize: "20px" }}>{caash}</div>
    </header>
  );
};
