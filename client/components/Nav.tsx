import styles from "../css/Nav.module.css";
import { A } from "@solidjs/router";
import { Component, createEffect, createSignal } from 'solid-js';
import { createScrollPosition } from "@solid-primitives/scroll";
import Navpage from "./Navpage";
import { gsap } from "gsap";


const Nav: Component = () => {
  const [isOpen, setIsOpen] = createSignal(false);
  const position = createScrollPosition(() => window);
  let prevScrollY = position.y;

  createEffect(() => {
    const navElement = document.getElementById("nav");
    const overflownElement = document.getElementById("overflown");
    const whiteElement = document.querySelectorAll(".alinks a");
    const pathElement = document.querySelectorAll(".svgelement svg");



    const currentScrollY = position.y;

    if (!overflownElement) return;

    if (currentScrollY > 100) {
      overflownElement.classList.remove(styles.overflownScrolledHide);
      whiteElement.forEach((element) => {
        element.classList.add(styles.whiteColorTransition);
      });
      whiteElement.forEach((element) => {
        element.classList.remove(styles.blackColorTransition);
      });
      pathElement.forEach((element) => {
        element.classList.add(styles.whiteStrokeTransition);
      });
      pathElement.forEach((element) => {
        element.classList.remove(styles.blackStrokeTransition);
      });
    } else {
      overflownElement.classList.add(styles.overflownScrolledHide);
      whiteElement.forEach((element) => {
        element.classList.remove(styles.whiteColorTransition);
      });
      whiteElement.forEach((element) => {
        element.classList.add(styles.blackColorTransition);
      });
      pathElement.forEach((element) => {
        element.classList.remove(styles.whiteStrokeTransition);
      });
      pathElement.forEach((element) => {
        element.classList.add(styles.blackStrokeTransition);
      });

    }
    if (currentScrollY < prevScrollY || currentScrollY === 0) {
      navElement!.classList.add(styles.navScrolled);
      navElement!.classList.remove(styles.navScrolledHide);
    } else {
      navElement!.classList.add(styles.navScrolledHide);
      navElement!.classList.remove(styles.navScrolled);
      overflownElement.classList.add(styles.overflownScrolledHide);
      whiteElement.forEach((element) => {
        element.classList.add(styles.whiteColorTransition);
      });
      whiteElement.forEach((element) => {
        element.classList.remove(styles.blackColorTransition);
      });

      pathElement.forEach((element) => {
        element.classList.add(styles.whiteStrokeTransition);
      });
      pathElement.forEach((element) => {
        element.classList.remove(styles.blackStrokeTransition);
      });
    }

    prevScrollY = currentScrollY;
  });

  const toggle = () => {
    setIsOpen(!isOpen());
    if(isOpen()){
        gsap.to(".navbarone", {duration: 0.5, rotate: 45, y: 1});
        gsap.to(".navbartwo", {duration: 0.5, rotate: -45, y: -4});
    } else {
        gsap.to(".navbarone", {duration: 0.5, rotate: 0, y: 0});
        gsap.to(".navbartwo", {duration: 0.5, rotate: 0, y: 0});
    }
}
createEffect(() => {
    if(isOpen()){
        <Navpage navopen={isOpen()} />
    } else {
        <Navpage navopen={isOpen()} />
    }
})
  return (
    <nav class={`${styles.nav}`} id="nav">
      <div class={`alinks ${styles.alinks}`}>
          <A href="/about">HOME</A>
          <A href="/about">SERVICES</A>
          <A href="/about">BOOK</A>
          <A href="/about">FAQ</A>
          <A href="/about">CONTACT ME</A>
        </div>
      <div class={`${styles.overflown} ${styles.overflownScrolledHide}`} id="overflown">
      </div>
      <div class={styles.navwrapp}>
        <A href="/"><img src="../src/assets/images/logodark.svg" alt="Logo" class={styles.logo}/></A>
        <div class={`${styles.navburger} navburger`} onclick={() => {toggle()}}>
            <div class={`${styles.navbarone} navbarone`}></div>
            <div class={`${styles.navbartwo} navbartwo`}></div>
        </div>
      </div>
      <div class={styles.icons}>
      <div>
      <A href="/search">
        <div class={styles.searchwrap}>
          <img src="../src/assets/images/search.svg" alt="Logo" id="searchPath"  />
          {/* <div class="svgelement">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M23.6667 23.6667L35 35M14.2222 27.4444C6.91979 27.4444 1 21.5247 1 14.2222C1 6.91979 6.91979 1 14.2222 1C21.5247 1 27.4444 6.91979 27.4444 14.2222C27.4444 21.5247 21.5247 27.4444 14.2222 27.4444Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div> */}
          <p>SEARCH</p>
        </div>
      </A>
      </div>
      <div class={styles.iconas}>
          <A href="/wishlist"><img src="../src/assets/images/wishlist.svg" alt="Logo"/></A>
          <A href="/account"><img src="../src/assets/images/account.svg" alt="Logo"/></A>
          <A href="/cart"><img src="../src/assets/images/shoppingbag.svg" alt="Logo"/></A>
        <div class={styles.cartyqty}>
          <div class={styles.nrblack}></div>
          <p>0</p>
        </div>
      </div>

      </div>
    </nav>
  );
};

export default Nav;
