import Image from "next/image"
const About = () => {
  return (
    <div className="flex px-2 py-1">
      <p><Image src='/vc.jpg' alt="VC" width={200} height={200}/><span className="flex flex-col">Prof. Rajbir Singh
      Vice Chancellor</span></p>
      <div>
        <h1>About MDU</h1>
        <div>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default About
