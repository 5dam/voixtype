
const Hero = () => {
  return (
   <>
    <div className="md:flex md:flex-row justify-between pt-20 lg:pt-32 md:px-6 xl:px-20">
        <div className="flex justify-center px-10 sm:px-16 md:p-0">
            <img src="assets/voice-hero.png" alt="voice-image" className="" />
        </div>
        <div className="w-full dark:text-white px-10 xl:px-20 md:text-start text-center">
          <h1 className="lg:text-6xl text-5xl font-bold pb-6 text-yellow-400">Voice to Text</h1>
          <h2 className="lg:text-2xl text-xl font-bold pb-6 uppercase">The new way to write</h2>
          <h3 className="lg:text-xl text-lg">Converts spoken words to written text, enabling hands-free writing, transcription, accessibility, and increased productivity.</h3>
        </div>
    </div>
   </>
  )
}

export default Hero