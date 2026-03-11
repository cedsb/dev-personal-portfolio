import { experiences } from "../data/experiences.js"
import ExperienceTimeline from "@/components/custom/ExperienceTimeline.jsx"

const Experiences = () => {
  return (
    <section id="experiences" className="flex flex-col items-center justify-center text-primary">
        <div className="w-full max-w-2xl">
            <h1 className="text-4xl font-bold mb-6">Experience</h1>

            <div className="relative border-l border-primary pl-8 space-y-12">
                {experiences.map((experience, index) => (
                <div className="relative" key={index}>
                    <ExperienceTimeline {...experience} />
                </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Experiences
