import { socialLinkItems } from "../../data/socialLinkItems.js"

import { Link } from "react-router"

import { Button } from "@/components/ui/button"

export default function SocialLinks() {
  return (
        <div className="flex gap-4">
            {socialLinkItems.map((item) => {
                const isExternal = item.url.startsWith("http")
                const Icon = item.icon
                return (isExternal ? (
                    <Button key={item.name} variant="ghost" size="icon" className="border border-primary" asChild>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                        <Icon className="w-5 h-5" />
                        </a>
                    </Button>
                ) : (
                    <Button key={item.name} variant="ghost" size="icon" className="border border-primary" asChild>
                        <Link to={item.url}>
                        <Icon className="w-5 h-5" />
                        </Link>
                    </Button>
                ))
            })}
        </div>
  )
}