import React from "react";
import "./App.css";
import AppRouter from "./Routes/routes";
import SideBar from "./componentes/SideBar";

function App() {
  return(
      <div>
       <AppRouter />
       <SideBar />
      </div>
      
  );
}

export default App;
