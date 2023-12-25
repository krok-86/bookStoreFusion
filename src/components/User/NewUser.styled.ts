import styled from "styled-components";

const NewUserStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  background-color: "#fcfffc";
  max-width: 450px;
  border: 2px solid "#eee3fb";
  border-radius: 10px;

  .user-text-wrap {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
  }
  .user-header-wrap {
    display: flex;
    align-items: center;
  }
  .user-text {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    font-weight: 900;
    padding: 5px;
    margin: 15px 50px;
    color: #5916e4;
  }
  /* .ant-form-item-required {
    ::text {
      color: red;
    }
  } */
  .newUser-text {
    ::placeholder {
      color: "#cfacf5";
      opacity: 0.7;
    }
  }
  .button-wrap {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 50px;
  }
  .user-button {
    color: #eee3fb;
  }
  .form-go-back {
    margin-bottom: 10px;
    text-decoration: none;
    color: #5916e4;
    &__grey {
      color: grey;
    }
    &:hover {
      opacity: 0.8;
    }
  }
  .ant-input {
    background-color: #fcfffc !important;
    color: #4211c3 !important;
    &-affix-wrapper {
      background-color: #fcfffc !important;
    }
    &-password-icon {
      color: #4211c3 !important;
  }
}
  .ant-form-item-label {
    label {
      color: #5916e4;
    }
  }
  input:-webkit-autofill {
    -webkit-text-fill-color: #4211c3;
    background-color: #4211c3 !important;
    transition: background-color 5000s ease-in-out 0s;
    box-shadow: inset 0 0 20px 20px
    #fcfffc;
  }
`;
export default NewUserStyled;