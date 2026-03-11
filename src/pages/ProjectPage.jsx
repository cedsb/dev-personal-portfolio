import { useParams } from "react-router"
import { projects } from "@/data/projects"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

import ProjectTechInfoCard from "@/components/custom/ProjectTechInfoCard.jsx"

const ProjectPage = () => {
  const { id } = useParams()

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div className="p-10">Project not found</div>;
  }

  return (
    <div className="max-w-5xl my-16 mx-auto">
      <div className="flex flex-col items-center justify-center text-primary">
        <div className="w-full max-w-2xl p-6">
          <ProjectTechInfoCard id={id} />
          <img
              src={project.coverImage}
              alt={project.title}
              className="rounded-xl aspect-video w-full object-cover mb-6"
            />

          <p className="text-lg mb-8">
            {project.longDescription}
          </p>
          <section>
             <h1 className="text-4xl font-bold mb-6">Screenshots</h1>
             <Carousel className="mb-4" plugins={[Autoplay({ delay: 3000 })]}>
              <CarouselContent>
                {project.carousel.map((image, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={image}
                      alt={`${project.title} carousel ${index + 1}`}
                      className="rounded-xl aspect-video w-full object-cover"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
             </Carousel>
              <div className="grid grid-cols-3 gap-4">
                {project.screenShots.map((screenshot, index) => (
                  <img
                    key={index}
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="rounded-xl w-full object-cover mb-6"
                  />
                ))}
              </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage
