import About from "@/components/About"
import AluminiSpeaks from "@/components/AluminiSpeaks"
import Gallery from "@/components/Gallery"
import ITPartner from "@/components/ITPartner"
import NewsEvents from "@/components/NewsEvents"
import ProgramOffers from "@/components/ProgramOffers"
import Social from "@/components/Social"


const page = () => {
  return (
    <div>
      <About/>
      <ProgramOffers/>
      <NewsEvents/>
      <Social/>
      <Gallery/>
      <AluminiSpeaks/>
      <ITPartner/>


    </div>
  )
}

export default page
