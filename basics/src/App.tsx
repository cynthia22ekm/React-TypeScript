import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import React from "react";
import { productsApi } from "./API/api";
import "./App.css";
import AllComponents from "./Components/AllComponents";
import UseEffect from "./Components/UseEffect";
import SimpleForm from "./Practise/SimpleForm";
import ProductsTable from "./Practise/Table/ProductsTable";

function App() {
  return (
    <ApiProvider api={productsApi}>
      <UseEffect />
    </ApiProvider>
  );
}

export default App;
