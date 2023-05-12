/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bg: string
}

const ProjectCard = ({ link, title, children, bg }: ProjectCardProps) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      width: `90%`,
      boxShadow: `lg`,
      color:'rgba(0,0,0,0)',
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 4,
      py: [4, 5],
      backgroundImage: `url(/${bg})` || 'none',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
        backgroundImage:"none"
      },
    }}
  >
    <div sx={{fontSize: [3,4],  textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>{children}</div>
    <div
      sx={{
        textTransform: `uppercase`,
        letterSpacing: `wide`,
        pt: 4,
        fontSize: [4,5],
        fontWeight: `medium`,
        lineHeight: 1,
      }}
    >
      {title}
    </div>
  </a>
)

export default ProjectCard
