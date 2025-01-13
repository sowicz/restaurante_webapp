import Navbar from "../Components/Navbar";
import Hero from "../Components/MainPage/Hero";
import AboutUs from "../Components/MainPage/AboutUs";
import Book from "../Components/MainPage/Book";


export default function HomePage() {

  return (
    <>
      <div className=" bg-neutral-950 text-white" style={{height:"3000px"} }>
        <Navbar />
        <Hero />
        <AboutUs />
        <Book />
      </div>
    </>
  )
}