import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://sono-repo-lostark-hands-next.vercel.app',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1
		}
	];
}
