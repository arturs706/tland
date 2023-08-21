import { Component, createEffect } from "solid-js";
import Herosection from "../components/mainpage/Herosection"
import Secondsection from "../components/mainpage/Secondsection"
import LocomotiveScroll from 'locomotive-scroll';

const Home: Component = () => {
  createEffect(() => {
    new LocomotiveScroll();

  });

  return (
    <div data-scroll-container>
        <Herosection />
        <Secondsection />
    </div>
  )
}

export default Home