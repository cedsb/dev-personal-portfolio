import { experiences } from "../data/experiences.js"
import ExperienceTimeline from "@/components/custom/ExperienceTimeline.jsx"

const AboutPage = () => {
  return (
    <div className="max-w-5xl my-16 mx-auto">
      <div className="flex flex-col items-center justify-center text-primary">
        <section className="w-full max-w-2xl p-6">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-lg mb-4">
            During my college years, I developed a strong interest in software development, particularly in building full-stack applications. 
            I have hands-on experience creating web applications using React, Node.js, and MongoDB, and I continuously strive to learn new technologies and refine my skills.
          </p>
          <p className="text-lg mb-4">
            I draw inspiration from other developers and stay updated with emerging trends in web development because I believe growth comes from constantly improving and adapting.
          </p>
          <p className="text-lg">
            Outside of coding, I enjoy playing Valorant and riding and maintaining my motorcycle — activities that help me reset and stay balanced, no matter how stressful things may get.
          </p>
        </section>
        <section className="w-full max-w-2xl p-6">
          <h1 className="text-4xl font-bold mb-6">Experience</h1>

          <div className="relative border-l border-primary pl-8 space-y-12">
          {experiences.map((experience, index) => (
            <div className="relative" key={index}>
              <ExperienceTimeline {...experience} />
            </div>
          ))}
        </div>
        </section>
      </div>
    </div>
  )
}

export default AboutPage