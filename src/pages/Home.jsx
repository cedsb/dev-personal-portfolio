import DevInfoCard from "@/components/custom/DevInfoCard.jsx"
import Projects from "@/sections/Projects.jsx"
import Experiences from "@/sections/Experiences.jsx"

const HomePage = () => {
  return (
    <div className="max-w-5xl my-16 mx-auto">
      <div className="flex items-center justify-center">
        <div className="w-full max-w-2xl flex flex-col gap-8">
          <DevInfoCard />
          <Experiences />
          <Projects />
        </div>
      </div>
    </div>
  )
}

export default HomePage
