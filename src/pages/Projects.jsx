import { projects } from "@/data/projects"

import ProjectCard from "@/components/custom/ProjectCard"

const ProjectsPage = () => {
  return (
    <div className="max-w-5xl my-16 mx-auto">
      <div className="flex flex-col items-center justify-center text-primary">
        <div className="w-full max-w-2xl p-6">
          <h1 className="text-4xl font-bold mb-6">Projects</h1>
          <p className="text-lg mb-4">
            A compilation of my projects, showcasing my skills and experience in software development. Each project highlights my ability to solve problems, work with different technologies, and create impactful solutions.
          </p>
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
