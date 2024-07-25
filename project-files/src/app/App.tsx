import { useEffect } from "react";
import { Fragment } from "react/jsx-runtime";
import { Router } from "@/router";
import { getDataUserRealtimeDb } from "@/firebase/getDataUserRealtimeDb";
import './App.css';

export function App() {
  useEffect(() => {
    getDataUserRealtimeDb();
  }, []);

  return (
    <Fragment>
      <Router />
    </Fragment>
  );
};