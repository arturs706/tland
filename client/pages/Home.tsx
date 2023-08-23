import { Component, createEffect } from "solid-js";
import Herosection from "../components/mainpage/Herosection"
import Secondsection from "../components/mainpage/Secondsection"
import Thirdsection from "../components/mainpage/Thirdsection"
import LocomotiveScroll from 'locomotive-scroll';

const Home: Component = () => {
  createEffect(() => {
    new LocomotiveScroll();

  });

  return (
    <div data-scroll-container>
        <Herosection/>
        <Secondsection />
        <Thirdsection />
    </div>
  )
}

export default Home