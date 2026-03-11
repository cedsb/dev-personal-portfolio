import { projects } from "@/data/projects"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export default function ProjectTechInfoCard ({ id }) {
  const project = projects.find((p) => p.id === id)
  
  if (!project) {
    return <div className="p-10">Project not found</div>;
  }

  return (
    <Card className="w-full border-primary/20 overflow-hidden mb-6">
        <CardHeader>
            <CardTitle className="text-3xl font-extrabold font-sans">{project.title}</CardTitle>
            <p>
                {project.technologies.map((tech) => {
                    const Icon = tech.icon
            
                    return (
                        <Badge 
                            variant="outline"
                            className="border-primary/20 inline-flex mb-1 mr-1 px-2 gap-2 text-primary text-xs" 
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
            </p>
            <CardDescription className="flex items-center gap-2">{project.shortDescription}</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-2">
            <Button variant="ghost" className="bg-primary dark:bg-primary hover:bg-primary/60 px-2" asChild>
                <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink data-icon="inline-start" className="size-4! text-primary-foreground"/>
                    <p className="text-primary-foreground font-bold">Live Demo</p>
                </a>
            </Button>
            <Button variant="secondary" className="px-2" asChild>
                <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
                    <p className="text-primary font-bold">View Repository</p>
                </a>
            </Button>
        </CardContent>
    </Card>
  )
}


