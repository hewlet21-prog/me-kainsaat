import Link from 'next/link'
import { notFound } from 'next/navigation'
import ProjectDetailClient from '@/components/ProjectDetailClient'
import { projectById, projects } from '@/lib/content'
import { siteConfig } from '@/lib/site'

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }))
}

export async function generateMetadata({ params }) {
  const { id } = await params
  const project = projectById[id]

  if (!project) {
    return {
      title: `Proje Bulunamadi | ${siteConfig.shortName}`,
      description: `${siteConfig.shortName} Erzurum proje arsivinde aradiginiz kayit bulunamadi.`,
      robots: { index: false, follow: false },
    }
  }

  const title = `${project.title} | ${siteConfig.shortName}`
  const description = `${project.description} ${project.location} bolgesinde ${project.category.toLowerCase()} ve ${project.area.toLowerCase()} odakli uygulama detaylarini inceleyin.`
  const keywords = [
    project.title,
    `${project.location} ${project.category}`,
    `${project.location} ${project.area}`,
    `${project.location} insaat projesi`,
    ...project.highlights,
  ]

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `/projects/${project.id}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      locale: 'tr_TR',
      images: [
        {
          url: project.coverImage,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [project.coverImage],
    },
  }
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params
  const project = projectById[id]

  if (!project) {
    notFound()
  }

  return <ProjectDetailClient project={project} />
}
