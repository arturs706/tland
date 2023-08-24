import { Component, createEffect, onCleanup } from "solid-js";
import styles from "../../css/Secondsection.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Secondsection: Component = () => {
createEffect(() => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to("#maindiv", {
    scrollTrigger: {
      trigger: "#maindiv",
      start: "top top",
      end: "bottom 0rem",
      scrub: 1,
      markers: true,
      pin: true,
    },
    backgroundColor:"#010101",
  
  });
  
}
);

  

  return (
    <main class={styles.main} id="maindiv">
      <div class={styles.head}>
        <div class={styles.newproducts}>
          <img src='../src/assets/images/ministar.svg' alt="star"/>
          <h1>OUR JOURNEY</h1>
          <h1>THROUGH TIME</h1>
          <h1>AND CULTURE</h1>
          <img src='../src/assets/images/ministar.svg' alt="star"/>
        </div>
              </div>
    </main>
  );
};

export default Secondsection;
