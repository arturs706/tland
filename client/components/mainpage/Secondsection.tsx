import { Component, createEffect, onCleanup } from "solid-js";
import styles from "../../css/Secondsection.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Secondsection: Component = () => {
  createEffect(() => {
    let container = document.querySelector(".reveal");

    
  });
  

  return (
    <main class={styles.main}>
      <div class={styles.topdiv}>
        <div class={styles.topdivleft}>
          <h2 class={styles.h2class}>EXQUISITE</h2>
          <h1 class={styles.h1class}>24 YEARS OF INTERIORS</h1>
          <h1 class={styles.h1class}>EXCELLENCE AND</h1>
          <h1 class={styles.h1class}>CRAFTSMANSHIP</h1>
        </div>
        <div class={styles.topdivright}>
          <div>
            <h2 class={styles.h2class}>
            TREASURE LAND HAS BEEN ESTABLISHED FOR A SUCCESSFUL 23 YEARS. WE ARE A SMALL, FAMILY-RUN, 
            </h2>
            <h2 class={styles.h2class}>
            INTERIORS BUSINESS, BASED IN ISLINGTON, NORTH LONDON. WE DIRECTLY IMPORT THE FINEST, HANDCRAFTED
            </h2>
            <h2 class={styles.h2class}>
            RUGS, KILIMS, LAMPS, JEWELLERY, AND GIFTWARE, FROM AFGHANISTAN, IRAN, MOROCCO, AND INDIA.
            </h2>
          </div>
          <div class={styles.outerdiv}>
            <div class={styles.innerdiv}>
              <img src='../src/assets/images/ministar.svg' alt="star"/>
              <h3>QUALITY</h3>
              <h2 class={styles.h2class}>DISCOVER OUR EXQUISITE COLLECTIO OF</h2>
              <h2 class={styles.h2class}>HANDMADE RUGS, KILIMS, LAMPS,</h2>
              <h2 class={styles.h2class}>JEWELLERY, AND GIFTWARE</h2>
              <div class={styles.buttonwrapp}>
                <button class={styles.button}>EXPLORE</button>
                <div class={styles.arrowshopwrap}>
                  <h2 class={styles.h2class}>SHOP</h2>
                  <img src='../src/assets/images/singlearrowright.svg' alt="arrow"/>
                </div>
              </div>

            </div>
            <div class={styles.innerdiv}>
              <img src='../src/assets/images/ministar.svg' alt="star"/>
              <h3>UNIQUE</h3>
              <h2 class={styles.h2class}>FIND ONE-OF-KIND PIECES THAT WILL ADD</h2>
              <h2 class={styles.h2class}>A TOUCH OF ELEGANCE TO YOUR HOME.</h2>
            </div>
          </div>

        </div>
      </div>
      <div class={styles.bottomdiv}>
        <div class={styles.imagewrappdiv}>
          <img src='../src/assets/images/bespoke.avif' alt="bottomimage" class={styles.bottomdivimg}/>
        </div>
        <div class={styles.bottomdivright}>
          <h1 class={styles.h1class}>
            AFGHAN RED GEMSTONE PENDANT
          </h1>
          <div class={styles.middleofdiv}>
          <img src='../src/assets/images/icon_2.svg' alt="line"/>

            <div>
              <h2 class={styles.h2class}>EMBRACE AWE-INSPIRING AFGHAN ALLURE ADORN YOURSELF WITH THE RED NECKLACE THAT FUSES</h2>
              <h2 class={styles.h2class}>TRADITION AND ELEGANCE FEATURING A DAZZLING GEMSTONE PENDANT AT ITS CORE METICULOUSLY</h2>
              <h2 class={styles.h2class}>CRAFTED TO REFLECT AFGHAN HERITAGE ITS BOLD DESIGN ADAPTS TO ANY OCCASION CAPTURE</h2>
              <h2 class={styles.h2class}>AFGHAN SPIRIT WITH MODERN GRANDEUR AN EXQUISITE TRIBUTE TO THE NATION'S CULTURAL LEGACY</h2>
            </div>
          </div>
          <button class={styles.button}>BUY NOW</button>

          
        </div>
      </div>
      
    </main>
  );
};

export default Secondsection;