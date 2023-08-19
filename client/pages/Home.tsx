import { Component } from "solid-js"
import Herosection from "../components/mainpage/Herosection"
import Secondsection from "../components/mainpage/Secondsection"

const Home: Component = () => {
  return (
    <>
        <Herosection />
        <Secondsection />
    </>
  )
}

export default Home