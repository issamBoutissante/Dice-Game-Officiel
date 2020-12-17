import React from "react";
import classes from "./CloseAppIcon.module.css";
export default function CloseAppIcon() {
  return (
    <div class={classes.closeIcon}>
      <span class={classes.close}>&times;</span>
    </div>
  );
}
