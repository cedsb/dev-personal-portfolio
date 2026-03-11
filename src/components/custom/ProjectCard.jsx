import { Link } from "react-router"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ProjectCard({ project }) {
  return (
        <Link to={`/projects/${project.id}`} className="block group mb-4">
          <Card className="relative mx-auto w-full pt-0 border-primary/20 overflow-hidden">
            <img
              src={project.coverImage}
              alt={project.title}
              className="rounded-xl aspect-video w-full object-cover group-hover:scale-105 transition-all duration-300"
            />

            <div className="absolute inset-0 bg-linear-to-b from-transparent from-0% via-35% to-primary-foreground to-75%" />

            <div className="absolute px-4 -bottom-6 text-primary transition-transform duration-300 group-hover:-translate-y-6 z-30">
                <p className="font-bold text-sm md:text-lg">{project.title}</p>

                {project.technologies.slice(0, 4).map((tech) => {
                    const Icon = tech.icon
            
                    return (
                        <Badge 
                            variant="outline"
                            className="hidden md:inline-flex my-2 mr-1 px-2 gap-2 text-primary text-sm" 
                            key={tech.name}
                        >
                            <Icon
                                className="w-5 h-7"
                                title={tech.name}
                            />
                            {tech.name}
                        </Badge>
                    )
                })}
                <p className="text-xs md:text-sm">
                    {project.shortDescription}
                </p>

                <Button
                    variant="link"
                    size="sm"
                    className="p-0 opacity-0 text-primary transition-opacity duration-300 group-hover:opacity-100"
                >
                    Learn More →
                </Button>
            </div>
          </Card>
        </Link>
  )
}