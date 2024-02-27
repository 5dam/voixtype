import Hero from "./Hero"
import Navbar from "./Navbar"

const Home = () => {
  return (
    <div className="h-screen dark:bg-black">
        <div className="md:mx-32 mx-4 pt-4">
          <Navbar />
          <Hero />
        </div>
    </div>
  )
}

export default Home