import { Component, createEffect } from "solid-js";
import styles from "../../css/Herosection.module.css"

const Herosection: Component = () => {
  const boxElement = document.getElementById("main");


    {
  return (
    <main class={styles.main} id="main">
      <div class={styles.star}>
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3855 23.3855C24.4169 22.3541 25.0684 20.9921 25.5022 19.4083C25.9355 17.8263 26.1601 15.9901 26.3155 13.9819C26.4069 12.8 26.4748 11.5581 26.5454 10.2646C26.6546 8.26675 26.7704 6.14603 26.9903 3.93417C27.2097 6.14089 27.3256 8.25685 27.4349 10.2507C27.506 11.5492 27.5743 12.7959 27.6665 13.9821C27.8226 15.9904 28.0484 17.8266 28.4833 19.4087C28.9187 20.9925 29.5724 22.3543 30.6065 23.3855C31.6379 24.4169 32.9999 25.0684 34.5839 25.5022C36.166 25.9355 38.0024 26.1601 40.0111 26.3155C41.1935 26.4069 42.436 26.4748 43.7302 26.5455C45.7709 26.6569 47.94 26.7754 50.2037 27.0044C48.3337 27.2207 46.5504 27.3757 44.8598 27.5228C43.2503 27.6627 41.7249 27.7954 40.2885 27.9666C36.442 28.425 33.2324 29.1617 31.1945 31.1934L31.1934 31.1945C29.1617 33.2324 28.425 36.442 27.9666 40.2885C27.7954 41.7249 27.6627 43.2503 27.5228 44.8598C27.3726 46.5863 27.2141 48.4094 26.9905 50.3228C26.7666 48.4012 26.6084 46.5703 26.4587 44.8369C26.3203 43.2343 26.1891 41.7151 26.0197 40.2846C25.5642 36.4375 24.8308 33.2271 22.7986 31.1945C20.766 29.1558 17.5553 28.4193 13.7086 27.9623C12.2744 27.7919 10.7513 27.6601 9.14471 27.5211C7.45241 27.3746 5.66745 27.2202 3.79607 27.0041C6.05778 26.7753 8.2252 26.6569 10.2646 26.5454C11.5581 26.4748 12.8 26.4069 13.9819 26.3155C15.9901 26.1601 17.8263 25.9355 19.4083 25.5022C20.9921 25.0684 22.3541 24.4169 23.3855 23.3855Z" stroke="#010101"/>
        </svg>
      </div>
      <div class={styles.startwo}>
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3855 23.3855C24.4169 22.3541 25.0684 20.9921 25.5022 19.4083C25.9355 17.8263 26.1601 15.9901 26.3155 13.9819C26.4069 12.8 26.4748 11.5581 26.5454 10.2646C26.6546 8.26675 26.7704 6.14603 26.9903 3.93417C27.2097 6.14089 27.3256 8.25685 27.4349 10.2507C27.506 11.5492 27.5743 12.7959 27.6665 13.9821C27.8226 15.9904 28.0484 17.8266 28.4833 19.4087C28.9187 20.9925 29.5724 22.3543 30.6065 23.3855C31.6379 24.4169 32.9999 25.0684 34.5839 25.5022C36.166 25.9355 38.0024 26.1601 40.0111 26.3155C41.1935 26.4069 42.436 26.4748 43.7302 26.5455C45.7709 26.6569 47.94 26.7754 50.2037 27.0044C48.3337 27.2207 46.5504 27.3757 44.8598 27.5228C43.2503 27.6627 41.7249 27.7954 40.2885 27.9666C36.442 28.425 33.2324 29.1617 31.1945 31.1934L31.1934 31.1945C29.1617 33.2324 28.425 36.442 27.9666 40.2885C27.7954 41.7249 27.6627 43.2503 27.5228 44.8598C27.3726 46.5863 27.2141 48.4094 26.9905 50.3228C26.7666 48.4012 26.6084 46.5703 26.4587 44.8369C26.3203 43.2343 26.1891 41.7151 26.0197 40.2846C25.5642 36.4375 24.8308 33.2271 22.7986 31.1945C20.766 29.1558 17.5553 28.4193 13.7086 27.9623C12.2744 27.7919 10.7513 27.6601 9.14471 27.5211C7.45241 27.3746 5.66745 27.2202 3.79607 27.0041C6.05778 26.7753 8.2252 26.6569 10.2646 26.5454C11.5581 26.4748 12.8 26.4069 13.9819 26.3155C15.9901 26.1601 17.8263 25.9355 19.4083 25.5022C20.9921 25.0684 22.3541 24.4169 23.3855 23.3855Z" stroke="#010101"/>
        </svg>
      </div>
      <div class={styles.leftdiv}>
        <div class={styles.hwrapp}>
          <h1 class={styles.h1class}>DISCOVER UNIQUE </h1>
          <h1 class={styles.h1class}>HANDCRAFTED</h1>
          <h1 class={styles.h1class}>TREASURES</h1>
          <h2 class={styles.h2class}>WELCOME TO TREASURE LAND, A FAMILY-RUN BUSINESS OFFERING THE FINEST</h2>
          <h2 class={styles.h2class}>HANDCRAFTED RUGS, KILLIMS, LAMPS, JEWELLERY, AND GIFTWARE DIRECTLY</h2>
          <h2 class={styles.h2class}>IMPORTED FROM AFGHANISTAN, IRAN, AND BEYOND.</h2>
        <div class={styles.buttonsection}>
          <button class={styles.button}>EXPLORE</button>
          <button class={styles.button}>SHOP NOW</button>
        </div>

        </div>
      </div>
      <div class={styles.rightdiv}>
        <div class={styles.imgwrappr}>
          <div class={styles.lineone}>
            <img src='../src/assets/images/1.svg' alt="star"/>
            <img src='../src/assets/images/2.avif' alt="star"/>
          </div>
          <div class={styles.linetwo}>
            <img src='../src/assets/images/3.avif' alt="star"/>
            <img src='../src/assets/images/4.svg' alt="star"/>
            <img src='../src/assets/images/5.avif' alt="star"/>
          </div>
          <div class={styles.linethree}>
            <img src='../src/assets/images/6.svg' alt="star"/>
            <img src='../src/assets/images/7.avif' alt="star"/>
          </div>
        </div>
    
      </div>
    </main>
  )
}
}

export default Herosection
