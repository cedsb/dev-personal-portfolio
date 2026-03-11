import { projects } from "@/data/projects"
import ProjectCard from "@/components/custom/ProjectCard"

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col items-center justify-center text-primary">
        <div className="w-full max-w-2xl">
            <h1 className="text-4xl font-bold mb-6">Projects</h1>
            {projects.slice(0, 3).map((project) => (
            <ProjectCard
                key={project.title}
                project={project}
            />
            ))}
        </div>
    </section>
  )
}

export default Projects
