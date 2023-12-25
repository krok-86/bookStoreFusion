// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { FC } from "react";
import { GlobalStyle } from "./global.styled";
declare module "styled-components" {}
const App: FC = () => {


  return (
    <>
<GlobalStyle />
{/* <Route
  path="/registration"
  element={<NewUser isRegistration={true} />}
/>
  <Route path="/auth" element={<NewUser isRegistration={false} />} />
  </Routes> */}
  
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
