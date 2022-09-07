import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import React from "react";
import { productsApi } from "./API/api";
import "./App.css";
import AllComponents from "./Components/AllComponents";
import SimpleForm from "./Practise/SimpleForm";

function App() {
  return (
    <ApiProvider api={productsApi}>
      <SimpleForm />
    </ApiProvider>
  );
}

export default App;
