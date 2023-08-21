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
    const svgicons = document.querySelectorAll(".svgicons");
    const svgiconsfill = document.querySelectorAll(".svgiconsfill");
    const bgchange = document.querySelectorAll(".bgchange");



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

      svgicons.forEach((element) => {
        element.classList.add(styles.svgAddWhite);
      });
      svgicons.forEach((element) => {
        element.classList.remove(styles.svgAddBlack);
      });

      svgiconsfill.forEach((element) => {
        element.classList.add(styles.svgiconsfillAddWhite);
      });
      svgiconsfill.forEach((element) => {
        element.classList.remove(styles.svgiconsfillAddBlack);
      });

      bgchange.forEach((element) => {
        element.classList.add(styles.addWhiteBG);
      });
      bgchange.forEach((element) => {
        element.classList.remove(styles.addBlackBG);
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

      svgicons.forEach((element) => {
        element.classList.remove(styles.svgAddWhite);
      });
      svgicons.forEach((element) => {
        element.classList.add(styles.svgAddBlack);
      });

      svgiconsfill.forEach((element) => {
        element.classList.remove(styles.svgiconsfillAddWhite);
      });
      svgiconsfill.forEach((element) => {
        element.classList.add(styles.svgiconsfillAddBlack);
      });
      bgchange.forEach((element) => {
        element.classList.remove(styles.addWhiteBG);
      });
      bgchange.forEach((element) => {
        element.classList.add(styles.addBlackBG);
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

      svgicons.forEach((element) => {
        element.classList.add(styles.svgAddWhite);
      });
      svgicons.forEach((element) => {
        element.classList.remove(styles.svgAddBlack);
      });

      svgiconsfill.forEach((element) => {
        element.classList.add(styles.svgiconsfillAddWhite);
      });
      svgiconsfill.forEach((element) => {
        element.classList.remove(styles.svgiconsfillAddBlack);
      });
      bgchange.forEach((element) => {
        element.classList.add(styles.addWhiteBG);
      });
      bgchange.forEach((element) => {
        element.classList.remove(styles.addBlackBG);
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
        <A href="/">
          {/* <img src="../src/assets/images/logodark.svg" alt="Logo" class={styles.logo}/> */}
          <svg width="43" height="62" viewBox="0 0 43 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1433_3061)">
            <path d="M5.71552 58.4986C5.64319 58.4986 5.57085 58.4724 5.5132 58.4189C4.65781 57.6149 4.00054 56.6075 3.61268 55.5058C3.5718 55.3905 3.60639 55.2636 3.69864 55.1839C4.29196 54.6766 4.78989 54.0728 5.1788 53.3883C5.28048 53.208 5.37064 53.0318 5.44612 52.8673C5.49434 52.7624 5.59811 52.6954 5.71342 52.6943H5.71447C5.82978 52.6943 5.93356 52.7614 5.98178 52.8662C6.05935 53.0339 6.14741 53.2059 6.25119 53.3893C6.6401 54.0728 7.13802 54.6766 7.73135 55.1839C7.82359 55.2636 7.85819 55.3915 7.8173 55.5058C7.4284 56.6075 6.77113 57.6149 5.91679 58.4189C5.86018 58.4724 5.78785 58.4986 5.71552 58.4986ZM4.23746 55.4953C4.56661 56.3486 5.07293 57.1348 5.71552 57.792C6.35706 57.1358 6.86338 56.3496 7.19358 55.4963C6.61703 54.9743 6.12749 54.3642 5.73858 53.6807C5.73019 53.6671 5.72286 53.6524 5.71447 53.6388C5.70713 53.6524 5.69875 53.6661 5.69141 53.6797C5.3025 54.3621 4.814 54.9722 4.23746 55.4953Z" class={`svgiconsfill ${styles.svgiconsfill}`}/>
            <path d="M38.1022 58.4693C38.0299 58.4693 37.9576 58.4431 37.8999 58.3896C37.0445 57.5856 36.3872 56.5782 35.9994 55.4765C35.9585 55.3612 35.9931 55.2344 36.0853 55.1547C36.6787 54.6473 37.1766 54.0435 37.5655 53.359C37.6672 53.1787 37.7573 53.0026 37.8328 52.838C37.881 52.7332 37.9848 52.6661 38.1001 52.665H38.1012C38.2165 52.665 38.3203 52.7321 38.3685 52.837C38.446 53.0047 38.5341 53.1766 38.6379 53.36C39.0268 54.0435 39.5247 54.6473 40.118 55.1547C40.2103 55.2344 40.2449 55.3622 40.204 55.4765C39.8151 56.5782 39.1578 57.5856 38.3035 58.3896C38.2469 58.4431 38.1745 58.4693 38.1022 58.4693ZM36.6242 55.466C36.9533 56.3193 37.4596 57.1055 38.1022 57.7628C38.7438 57.1066 39.2501 56.3204 39.5803 55.4671C39.0037 54.945 38.5142 54.3349 38.1253 53.6515C38.1169 53.6378 38.1096 53.6232 38.1012 53.6095C38.0938 53.6232 38.0854 53.6368 38.0781 53.6504C37.6892 54.3328 37.2007 54.9429 36.6242 55.466Z" class={`svgiconsfill ${styles.svgiconsfill}`}/>
            <path d="M34.6806 8.40625H8.62695V9.9804H34.6806V8.40625Z" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M24.5071 8.37017C24.507 3.81399 19.1832 3.65605 19.1831 8.37016L24.5071 8.37017Z" class={`svgiconsfill ${styles.svgiconsfill}`}/>
            <path d="M24.5071 8.37017C24.507 3.81399 19.1832 3.65605 19.1831 8.37016" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M10.0654 10.3428V34.0326" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M33.6587 10.1709V33.9573" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M21.8165 13.416L18.0884 16.0508L21.8405 18.7026L25.5686 16.0678L21.8165 13.416Z" stroke="#010101" stroke-width="0.4" class={`svgiconsfill ${styles.svgiconsfill}`}/>
            <path d="M17.9614 16.0557V19.2749" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M25.854 16.0557V19.2749" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M21.8882 18.6885L22.006 21.9078" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M17.9204 19.1533L21.9649 21.7897" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M21.9141 21.7455L25.7835 19.1396" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M13.9195 13.416L10.1914 16.0508L13.9435 18.7026L17.6716 16.0678L13.9195 13.416Z" class={`svgicons ${styles.svgicons} svgiconsfill ${styles.svgiconsfill}`} stroke-width="0.4"/>
            <path d="M10.0649 16.0557V19.2749" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M17.9575 16.0557V19.2749" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M13.9917 18.6885L14.1095 21.9078" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M10.0234 19.1533L14.0679 21.7897" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M14.0176 21.7455L17.8869 19.1396" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M29.7134 13.416L25.9854 16.0508L29.7375 18.7026L33.4656 16.0678L29.7134 13.416Z" stroke-width="0.4" class={`svgicons ${styles.svgicons} svgiconsfill ${styles.svgiconsfill}`}/>
            <path d="M25.8584 16.0557V19.2749" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M33.751 16.0557V19.2749" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M29.7852 18.6885L29.903 21.9078" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M25.8169 19.1533L29.8614 21.7897" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M29.811 21.7455L33.6803 19.1396" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M25.8169 22.5391L30.0506 25.2989" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M29.8315 25.248L33.6528 22.5723" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M17.9199 22.5391L22.1537 25.2989" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M21.9136 25.2104L25.7829 22.6045" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M10.0234 22.6182L14.191 25.3348" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M14.0176 25.2104L17.887 22.6045" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M25.8169 24.1973L30.0506 26.9571" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M29.8105 26.8686L33.6799 24.2627" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M17.9199 24.1973L22.1537 26.9571" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M21.9136 26.8686L25.7829 24.2627" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M10.0234 24.2764L14.191 26.993" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M14.0171 26.8686L17.8864 24.2627" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M13.9741 10.1055V13.501" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M21.9102 10.1055V13.501" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M29.8066 10.1055V13.501" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M9.98584 33.8721L21.9097 42.8742" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M33.7863 33.9551L21.7515 43.046" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M12.5132 25.8984V44.8502" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M11.1704 25.0303V47.9305" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M14.0137 26.9248V41.0598" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M28.4644 25.9775V44.9293" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M27.1221 25.1094V48.0096" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M29.9253 26.9248V41.0598" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M20.6465 26.0566V45.0085" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M19.3833 25.125V48.0251" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M22.0679 26.9248V41.0598" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M22.0679 26.9248V58.5113" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M15.4351 26.0566V54.3265" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M15.4351 26.0566V54.3265" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M15.4351 26.0566V54.3265" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M15.4351 26.0566V54.3265" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M15.4351 26.0566V54.3265" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M18.041 24.3193V52.5892" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M18.041 24.3193V52.5892" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M18.041 24.3193V52.5892" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M18.041 24.3193V52.5892" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M18.041 24.3193V52.5892" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M16.7773 25.1094V53.3793" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M16.7773 25.1094V53.3793" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M16.7773 25.1094V53.3793" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M16.7773 25.1094V53.3793" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M16.7773 25.1094V53.3793" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M31.1489 26.1357V49.8255" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M31.1489 26.1357V49.8255" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M31.1489 26.1357V49.8255" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M31.1489 26.1357V49.8255" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M31.1489 26.1357V49.8255" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M32.4136 25.373V48.2732" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M32.4136 25.373V48.2732" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M32.4136 25.373V48.2732" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M32.4136 25.373V48.2732" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M32.4136 25.373V48.2732" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M23.3315 26.1357V54.4056" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M23.3315 26.1357V54.4056" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M23.3315 26.1357V54.4056" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M23.3315 26.1357V54.4056" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M23.3315 26.1357V54.4056" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M25.9375 24.3984V52.6683" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M25.9375 24.3984V52.6683" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M25.9375 24.3984V52.6683" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M25.9375 24.3984V52.6683" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M25.9375 24.3984V52.6683" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M24.6738 25.8369V54.1068" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M24.6738 25.8369V54.1068" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M24.6738 25.8369V54.1068" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M24.6738 25.8369V54.1068" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M24.6738 25.8369V54.1068" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M11.0893 49.7469C11.5908 49.7469 11.9974 49.3403 11.9974 48.8388C11.9974 48.3372 11.5908 47.9307 11.0893 47.9307C10.5877 47.9307 10.1812 48.3372 10.1812 48.8388C10.1812 49.3403 10.5877 49.7469 11.0893 49.7469Z" class={`svgiconsfill ${styles.svgiconsfill}`}/>
            <path d="M15.3536 49.5461C15.7447 49.5461 16.0617 49.2291 16.0617 48.838C16.0617 48.4469 15.7447 48.1299 15.3536 48.1299C14.9625 48.1299 14.6455 48.4469 14.6455 48.838C14.6455 49.2291 14.9625 49.5461 15.3536 49.5461Z" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M21.9864 51.4416C22.3775 51.4416 22.6945 51.1246 22.6945 50.7335C22.6945 50.3424 22.3775 50.0254 21.9864 50.0254C21.5954 50.0254 21.2783 50.3424 21.2783 50.7335C21.2783 51.1246 21.5954 51.4416 21.9864 51.4416Z" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M28.3829 44.3352C28.774 44.3352 29.091 44.0181 29.091 43.6271C29.091 43.236 28.774 42.9189 28.3829 42.9189C27.9918 42.9189 27.6748 43.236 27.6748 43.6271C27.6748 44.0181 27.9918 44.3352 28.3829 44.3352Z" stroke-width="0.4" class={`svgicons ${styles.svgicons}`}/>
            <path d="M32.331 48.9568C32.8325 48.9568 33.2391 48.5503 33.2391 48.0487C33.2391 47.5472 32.8325 47.1406 32.331 47.1406C31.8294 47.1406 31.4229 47.5472 31.4229 48.0487C31.4229 48.5503 31.8294 48.9568 32.331 48.9568Z" class={`svgiconsfill ${styles.svgiconsfill}`}/>
            <path d="M1 61H42.5319" stroke-width="2" class={`svgicons ${styles.svgicons}`}/>
            <path d="M1.66992 62V17.0254" stroke-width="2" class={`svgicons ${styles.svgicons}`}/>
            <path d="M41.8623 61.9997V17.0117" stroke-width="2" class={`svgicons ${styles.svgicons}`}/>
            <path d="M1.66992 17.1624C1.66992 17.1624 2.00195 1.00005 22.5874 1C43.1728 0.999951 41.8447 17.1624 41.8447 17.1624" stroke-width="2" class={`svgicons ${styles.svgicons}`}/>
            </g>
            <defs>
            <clipPath id="clip0_1433_3061">
            <rect width="43" height="62" fill="white"/>
            </clipPath>
            </defs>
            </svg>

        </A>
        <div class={`${styles.navburger} navburger`} onclick={() => {toggle()}}>
            <div class={`${styles.navbarone} navbarone bgchange`}></div>
            <div class={`${styles.navbartwo} navbartwo bgchange`}></div>
        </div>
      </div>
      <div class={styles.icons}>
      <div>
      <A href="/search">
        <div class={styles.searchwrap}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class={`svgicons ${styles.svgicons}`}>
            <path d="M23.6667 23.6667L35 35M14.2222 27.4444C6.91979 27.4444 1 21.5247 1 14.2222C1 6.91979 6.91979 1 14.2222 1C21.5247 1 27.4444 6.91979 27.4444 14.2222C27.4444 21.5247 21.5247 27.4444 14.2222 27.4444Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p>SEARCH</p>
        </div>
      </A>
      </div>
      <div class={styles.iconas}>
            <A href="/wishlist">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class={`svgicons ${styles.svgicons}`}>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M35 10.5626C35 23.8318 18.0007 35.0001 18.0007 35.0001C18.0007 35.0001 1 23.6667 1 10.5894C1 5.25006 4.77778 1.00006 9.5 1.00006C14.2222 1.00006 18 7.37506 18 7.37506C18 7.37506 21.7778 1.00006 26.5 1.00006C31.2222 1.00006 35 5.25006 35 10.5626Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </A>
          <A href="/account">
            <svg width="30" height="36" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg" class={`svgiconsfill ${styles.svgiconsfill}`}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 8.30396C8.75 4.54116 11.7771 1.5 15.5 1.5C19.2229 1.5 22.25 4.54116 22.25 8.30396C22.25 12.0668 19.2229 15.1079 15.5 15.1079C11.7771 15.1079 8.75 12.0668 8.75 8.30396ZM15.5 0C10.9386 0 7.25 3.72289 7.25 8.30396C7.25 12.885 10.9386 16.6079 15.5 16.6079C20.0614 16.6079 23.75 12.885 23.75 8.30396C23.75 3.72289 20.0614 0 15.5 0ZM1.75 30.6301C1.75 28.365 2.43464 26.3435 3.50535 24.9057C4.57603 23.4678 5.9964 22.6511 7.5 22.6511H22.5C24.0036 22.6511 25.424 23.4678 26.4946 24.9057C27.5654 26.3435 28.25 28.365 28.25 30.6301V34.2446H1.75V30.6301ZM7.5 21.1511C5.41375 21.1511 3.58412 22.2884 2.30226 24.0098C1.02043 25.7312 0.25 28.0743 0.25 30.6301V34.9946C0.25 35.4088 0.585786 35.7446 1 35.7446H29C29.4142 35.7446 29.75 35.4088 29.75 34.9946V30.6301C29.75 28.0743 28.9796 25.7312 27.6977 24.0098C26.4159 22.2884 24.5862 21.1511 22.5 21.1511H7.5Z" />
            </svg>
            </A>
          <A href="/cart">
            <svg width="30" height="36" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg" class={`svgiconsfill ${styles.svgiconsfill}`}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.75 4.5C11.75 3.14571 13.2426 1.75 15.5 1.75C17.7574 1.75 19.25 3.14571 19.25 4.5V7.65613H11.75V4.5ZM10.25 7.65613V4.5C10.25 1.9883 12.7868 0.25 15.5 0.25C18.2132 0.25 20.75 1.9883 20.75 4.5V7.65613H27C27.3919 7.65613 27.7177 7.95785 27.7478 8.3486L29.7478 34.3486C29.7638 34.5569 29.6922 34.7624 29.5503 34.9157C29.4084 35.069 29.2089 35.1561 29 35.1561H1C0.791094 35.1561 0.591653 35.069 0.44971 34.9157C0.307768 34.7624 0.236189 34.5569 0.252211 34.3486L2.25221 8.3486C2.28227 7.95785 2.6081 7.65613 3 7.65613H10.25ZM1.80991 33.6561L3.69453 9.15613H10.25V11.5C10.25 12.5864 11.0338 13.4123 11.9538 13.9234C12.8992 14.4486 14.1544 14.75 15.5 14.75C16.8456 14.75 18.1008 14.4486 19.0462 13.9234C19.9662 13.4123 20.75 12.5864 20.75 11.5V9.15613H26.3055L28.1901 33.6561H1.80991Z"/>
            </svg>
          </A>
        <div class={styles.cartyqty}>
          <div class={`bgchange ${styles.nrblack}`}></div>
          <p>0</p>
        </div>
      </div>

      </div>
    </nav>
  );
};

export default Nav;
