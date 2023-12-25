import { FC } from "react";
import {
    CLEAR_BUTTON,
    GO_BACK_BUTTON,
    GO_LOG_IN,
    GO_SIGN_UP,
    SUBMIT_BUTTON,
    URLS,
  } from "../../constants";
import NewUserStyled from "./NewUser.styled";

  interface INewUser {
    isRegistration: boolean;
  }
  type FieldType = {
    name?: string;
    email?: string;
    password?: string;
    remember?: string;
  };
  const NewUser: FC<INewUser> = ({ isRegistration }) => {


return (
    <NewUserStyled>

    </NewUserStyled>
)
}
export default NewUser;