import SocialLinks from "@/components/custom/SocialLinks.jsx"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MapPin } from "lucide-react"

export default function DevInfoCard () {
  return (
    <Card className="border-primary/20">
        <CardHeader>
        <div className="flex flex-row items-center justify-between">
            <CardTitle className="text-4xl font-bold font-sans">Cedrick Steven</CardTitle>
            <SocialLinks />
        </div>
        <CardDescription className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Mandaluyong City, Philippines</CardDescription>
        </CardHeader>
        <CardContent>
        <p>
            Motivated entry-level software developer focused on building reliable, user-centered applications. 
            Skilled in modern web technologies and responsive design, with the ability to thrive both independently and in team settings.
        </p>
        </CardContent>
    </Card>
  )
}

