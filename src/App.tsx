import { FC, useEffect } from "react";
import { GlobalStyle } from "./global.styled";
import NewUser from "./components/User/NewUser";
import { ToastContainer } from "react-toastify";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useAppDispatch } from "./hook";

declare module "styled-components" {}

const App: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchAuthMe());
    navigate(JSON.parse(window.sessionStorage.getItem("lastRoute") || "{}"));
    window.onbeforeunload = () => {
      window.sessionStorage.setItem(
        "lastRoute",
        JSON.stringify(window.location.pathname)
      );
    };
  }, []);
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route
          path="/registration"
          element={<NewUser isRegistration={true} />}
        />
        <Route path="/auth" element={<NewUser isRegistration={false} />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
