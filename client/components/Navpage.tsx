import { Component } from "solid-js";
import styles from "../css/Navpage.module.css"

const Navpage = (props?: any) => {
  if(props.navopen){
      console.log("open");
  } else {
      console.log("closed");
  }
  return (
      <pre>{/*@once*/ props.navopen}</pre>
  );
}

export default Navpage