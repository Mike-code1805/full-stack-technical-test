import React from "react";
import Dialog from "../components/dialog/Dialog";
import { Offerse } from "../components/offerse/Offerse";

const Main = () => {
  return (   
    <div className={["containerMain"]}>
      <Offerse/>
      <Dialog/>
    </div>       
  );
}

export default Main;
