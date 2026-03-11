import { Badge } from "@/components/ui/badge"

export default function ExperienceTimeline (experience) {
  return (
    <>
        {/* Timeline Dot */}
        <div className="absolute -left-[40.4px] top-0 w-4 h-4 rounded-full bg-primary">
        <div className="rounded-full bg-accent w-2 h-2 m-1"/>
        </div>

        {/* Timeline Content */}
        <div>
        <h2 className="text-xl font-semibold">{experience.title}</h2>
        <p className="text-muted-foreground text-md mb-1">{experience.company}</p>
        {experience.skills.map((skill, idx) => (
            <Badge key={idx} variant="outline" className="mb-1 mr-1 px-2">{skill}</Badge>
        ))}
        <p className="text-muted-foreground text-md mb-2">{experience.period}</p>
        <p>{experience.description}</p>
        </div>
    </>
  )
}