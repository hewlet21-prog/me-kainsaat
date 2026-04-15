import { services, projects } from '@/lib/content'
import { siteConfig } from '@/lib/site'

export default function sitemap() {
  const staticRoutes = ['', '/about', '/contact', '/career', '/projects', '/services']

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : 0.8,
    })),
    ...services.map((service) => ({
      url: `${siteConfig.siteUrl}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    })),
    ...projects.map((project) => ({
      url: `${siteConfig.siteUrl}/projects/${project.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
  ]
}
