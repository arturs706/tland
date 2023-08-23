import { Component, createEffect, createSignal, onCleanup} from "solid-js";
import styles from "../../css/Herosection.module.css"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


const calculateVisiblePercentage = (element: HTMLElement) => {
  const objectRect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const topOverlap = Math.max(0, Math.min(objectRect.bottom, windowHeight) - Math.max(objectRect.top, 0));
  const overlapArea = topOverlap * objectRect.width;
  const objectArea = objectRect.width * objectRect.height;
  const visiblePercentage = (overlapArea / objectArea) * 100;
  return visiblePercentage;
};


const Herosection: Component = () => {
  const updateVisiblePercentage = () => {
    const boxElements = document.querySelectorAll(".fadeinelement");
    const spinnersvg = document.getElementById("spinnersvg")
    gsap.registerPlugin(ScrollTrigger);

    if (boxElements) {
      boxElements.forEach((boxElement) => {
        const typedBoxElement = boxElement as HTMLElement;
        const boxPercentage = calculateVisiblePercentage(typedBoxElement);
        gsap.to(typedBoxElement, { opacity: boxPercentage / 100 });
      });
    }
    if (spinnersvg) {
      const typedSpinnersvg = spinnersvg as HTMLElement;
      const rotationRange = 360; // Maximum rotation angle
      const scrollRange = 40 * 16; // Equivalent of 40rem in pixels
      
      gsap.to(typedSpinnersvg, {
        rotation: 0, // Initial rotation angle
        onUpdate: () => {
          const scrollY = window.scrollY || window.pageYOffset; // Get the current scroll position
          const scrollProgress = gsap.utils.clamp(0, 1, scrollY / scrollRange); // Calculate scroll progress
          const rotationValue = scrollProgress * rotationRange; // Calculate rotation angle based on progress
          typedSpinnersvg.style.transform = `rotate(${rotationValue}deg)`; // Apply the rotation to the element
        },
        ease: "linear",
      });
      
    }
  };


createEffect(() => {
  const scrollListener = () => {
    updateVisiblePercentage();
  };

  updateVisiblePercentage(); // Initial calculation
  window.addEventListener("scroll", scrollListener);

  // Cleanup the event listener
  onCleanup(() => {
    window.removeEventListener("scroll", scrollListener);
  });
});


    {
  return (
    <main class={styles.main} id="main" data-scroll data-scroll-speed="-0.122">
      <div class={`${styles.star} fadeinelement`}>

        {/* <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3855 23.3855C24.4169 22.3541 25.0684 20.9921 25.5022 19.4083C25.9355 17.8263 26.1601 15.9901 26.3155 13.9819C26.4069 12.8 26.4748 11.5581 26.5454 10.2646C26.6546 8.26675 26.7704 6.14603 26.9903 3.93417C27.2097 6.14089 27.3256 8.25685 27.4349 10.2507C27.506 11.5492 27.5743 12.7959 27.6665 13.9821C27.8226 15.9904 28.0484 17.8266 28.4833 19.4087C28.9187 20.9925 29.5724 22.3543 30.6065 23.3855C31.6379 24.4169 32.9999 25.0684 34.5839 25.5022C36.166 25.9355 38.0024 26.1601 40.0111 26.3155C41.1935 26.4069 42.436 26.4748 43.7302 26.5455C45.7709 26.6569 47.94 26.7754 50.2037 27.0044C48.3337 27.2207 46.5504 27.3757 44.8598 27.5228C43.2503 27.6627 41.7249 27.7954 40.2885 27.9666C36.442 28.425 33.2324 29.1617 31.1945 31.1934L31.1934 31.1945C29.1617 33.2324 28.425 36.442 27.9666 40.2885C27.7954 41.7249 27.6627 43.2503 27.5228 44.8598C27.3726 46.5863 27.2141 48.4094 26.9905 50.3228C26.7666 48.4012 26.6084 46.5703 26.4587 44.8369C26.3203 43.2343 26.1891 41.7151 26.0197 40.2846C25.5642 36.4375 24.8308 33.2271 22.7986 31.1945C20.766 29.1558 17.5553 28.4193 13.7086 27.9623C12.2744 27.7919 10.7513 27.6601 9.14471 27.5211C7.45241 27.3746 5.66745 27.2202 3.79607 27.0041C6.05778 26.7753 8.2252 26.6569 10.2646 26.5454C11.5581 26.4748 12.8 26.4069 13.9819 26.3155C15.9901 26.1601 17.8263 25.9355 19.4083 25.5022C20.9921 25.0684 22.3541 24.4169 23.3855 23.3855Z" stroke="#010101"/>
        </svg> */}
        <svg width="44" height="55" viewBox="0 0 44 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.647 29.7289L24.6459 29.73C23.5944 30.7846 23.0318 32.2576 22.7281 33.9664C22.4241 35.6763 22.3698 37.6813 22.3817 39.8521C22.3862 40.67 22.4 41.5129 22.4142 42.376C22.452 44.6817 22.4922 47.132 22.3634 49.6386C22.2201 47.2622 22.218 44.951 22.216 42.7732C22.2151 41.8251 22.2143 40.9022 22.2018 40.0103C22.172 37.8807 22.0752 35.9185 21.7389 34.2414C21.4027 32.5646 20.8174 31.1208 19.7705 30.074C17.7283 28.026 15.3926 27.6941 12.3961 27.6328C11.7655 27.6199 11.1033 27.6189 10.4035 27.6178C8.77304 27.6153 6.93864 27.6125 4.82448 27.4581C6.94328 27.3034 8.78111 27.3011 10.4142 27.299C11.11 27.2981 11.7685 27.2973 12.3959 27.2848C15.3921 27.2249 17.728 26.8961 19.7705 24.8536C20.8174 23.8067 21.4027 22.3629 21.7389 20.6862C22.0752 19.0093 22.172 17.0474 22.2018 14.9182C22.2143 14.0265 22.2151 13.1039 22.216 12.1561C22.218 9.97787 22.2201 7.66638 22.3637 5.28998C22.4906 7.76686 22.4494 10.1737 22.4108 12.4327C22.3963 13.2801 22.3822 14.1066 22.3774 14.9083C22.3647 17.0363 22.4187 18.9993 22.7236 20.6773C23.0285 22.3554 23.5935 23.8035 24.6464 24.8536C26.6895 26.8966 29.0451 27.2249 32.0597 27.2848C32.6911 27.2973 33.3538 27.2981 34.0535 27.299C35.6563 27.301 37.4533 27.3033 39.5135 27.4471C37.3359 27.5768 35.4526 27.5338 33.783 27.4956C33.1888 27.482 32.6217 27.4691 32.0779 27.4647C29.0702 27.4407 26.7036 27.6785 24.647 29.7289Z" fill="black" stroke="#010101"/>
        </svg>

      </div>
      <div class={`${styles.startwo} fadeinelement`}>

        {/* <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3855 23.3855C24.4169 22.3541 25.0684 20.9921 25.5022 19.4083C25.9355 17.8263 26.1601 15.9901 26.3155 13.9819C26.4069 12.8 26.4748 11.5581 26.5454 10.2646C26.6546 8.26675 26.7704 6.14603 26.9903 3.93417C27.2097 6.14089 27.3256 8.25685 27.4349 10.2507C27.506 11.5492 27.5743 12.7959 27.6665 13.9821C27.8226 15.9904 28.0484 17.8266 28.4833 19.4087C28.9187 20.9925 29.5724 22.3543 30.6065 23.3855C31.6379 24.4169 32.9999 25.0684 34.5839 25.5022C36.166 25.9355 38.0024 26.1601 40.0111 26.3155C41.1935 26.4069 42.436 26.4748 43.7302 26.5455C45.7709 26.6569 47.94 26.7754 50.2037 27.0044C48.3337 27.2207 46.5504 27.3757 44.8598 27.5228C43.2503 27.6627 41.7249 27.7954 40.2885 27.9666C36.442 28.425 33.2324 29.1617 31.1945 31.1934L31.1934 31.1945C29.1617 33.2324 28.425 36.442 27.9666 40.2885C27.7954 41.7249 27.6627 43.2503 27.5228 44.8598C27.3726 46.5863 27.2141 48.4094 26.9905 50.3228C26.7666 48.4012 26.6084 46.5703 26.4587 44.8369C26.3203 43.2343 26.1891 41.7151 26.0197 40.2846C25.5642 36.4375 24.8308 33.2271 22.7986 31.1945C20.766 29.1558 17.5553 28.4193 13.7086 27.9623C12.2744 27.7919 10.7513 27.6601 9.14471 27.5211C7.45241 27.3746 5.66745 27.2202 3.79607 27.0041C6.05778 26.7753 8.2252 26.6569 10.2646 26.5454C11.5581 26.4748 12.8 26.4069 13.9819 26.3155C15.9901 26.1601 17.8263 25.9355 19.4083 25.5022C20.9921 25.0684 22.3541 24.4169 23.3855 23.3855Z" stroke="#010101"/>
        </svg> */}
        <svg width="44" height="55" viewBox="0 0 44 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.647 29.7289L24.6459 29.73C23.5944 30.7846 23.0318 32.2576 22.7281 33.9664C22.4241 35.6763 22.3698 37.6813 22.3817 39.8521C22.3862 40.67 22.4 41.5129 22.4142 42.376C22.452 44.6817 22.4922 47.132 22.3634 49.6386C22.2201 47.2622 22.218 44.951 22.216 42.7732C22.2151 41.8251 22.2143 40.9022 22.2018 40.0103C22.172 37.8807 22.0752 35.9185 21.7389 34.2414C21.4027 32.5646 20.8174 31.1208 19.7705 30.074C17.7283 28.026 15.3926 27.6941 12.3961 27.6328C11.7655 27.6199 11.1033 27.6189 10.4035 27.6178C8.77304 27.6153 6.93864 27.6125 4.82448 27.4581C6.94328 27.3034 8.78111 27.3011 10.4142 27.299C11.11 27.2981 11.7685 27.2973 12.3959 27.2848C15.3921 27.2249 17.728 26.8961 19.7705 24.8536C20.8174 23.8067 21.4027 22.3629 21.7389 20.6862C22.0752 19.0093 22.172 17.0474 22.2018 14.9182C22.2143 14.0265 22.2151 13.1039 22.216 12.1561C22.218 9.97787 22.2201 7.66638 22.3637 5.28998C22.4906 7.76686 22.4494 10.1737 22.4108 12.4327C22.3963 13.2801 22.3822 14.1066 22.3774 14.9083C22.3647 17.0363 22.4187 18.9993 22.7236 20.6773C23.0285 22.3554 23.5935 23.8035 24.6464 24.8536C26.6895 26.8966 29.0451 27.2249 32.0597 27.2848C32.6911 27.2973 33.3538 27.2981 34.0535 27.299C35.6563 27.301 37.4533 27.3033 39.5135 27.4471C37.3359 27.5768 35.4526 27.5338 33.783 27.4956C33.1888 27.482 32.6217 27.4691 32.0779 27.4647C29.0702 27.4407 26.7036 27.6785 24.647 29.7289Z" fill="black" stroke="#010101"/>
        </svg>


      </div>

      <div class={`${styles.divwrapper} fadeinelement`}>
        <div class={styles.sinceninetynine}>
          <h1>SINCE</h1>
          <h1>1999</h1>
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
            <img src='../src/assets/images/2.png' alt="star"/>
          </div>
          <div class={styles.linetwo}>
            <img src='../src/assets/images/3.png' alt="star"/>
            <img src='../src/assets/images/4.svg' alt="star"/>
            <img src='../src/assets/images/5.png' alt="star"/>
          </div>
          <div class={styles.linethree}>
            <img src='../src/assets/images/62.svg' alt="star" id="spinnersvg"/>
            <img src='../src/assets/images/7.png' alt="star"/>
          </div>
        </div>
    
      </div>
     
      </div>
      <div class={styles.bottomarrowdiv}>
        <img src='../src/assets/images/arrowdown.svg' alt="star"/>
        <h3>Scroll to explore</h3>
        <div></div>
      </div>
    </main>
  )
}
}

export default Herosection
