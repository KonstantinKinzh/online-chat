import { observer } from "mobx-react";
import { useEffect } from "react";
import { Fragment } from "react/jsx-runtime";
import { Router } from "@/router";
import { getAuthData } from "./lib/getAuthData";
import './App.css';

export const App = observer(() => {

  useEffect(() => {
    getAuthData();
  }, []);

  return (
    <Fragment>
      <Router />
    </Fragment>
  );
});