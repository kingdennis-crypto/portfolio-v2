import { GrayMatterFile } from 'gray-matter'
import { StaticImageData } from 'next/image'

export type WorkExperienceProps = {
  title: string
  description: string
  company: string
  start: string
  end: string
  tags: string[]
}

export type ElongatedImageProps = {
  image: StaticImageData | string
  description?: string
  isFullSize?: boolean
  darkMode?: boolean
}

export type HoverableLinkProps = {
  href: string
  label: string
  newTab?: boolean
  isBold?: boolean
}

export type ProjectCardProps = {
  icon: string
  title: string
  description: string
  href: string
}

export type HighlightedProjectsProps = {
  icon: string
  title: string
  description: string
  href: string
}

export type ProjectDetailPageParams = {
  params: {
    slug: string
  }
}

export type ProjectData = {
  data: {
    title: string
    slug: string
    coverImage: string
    technologies: string[]
    date: string
    repository: string
  }
  content: string
  isEmpty: boolean
} & GrayMatterFile<string>
