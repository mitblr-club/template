'use server';

import { siteConfig } from '@/site.config';

export async function getBlogPosts() {
  const res = await fetch(
    `https://notion-api.splitbee.io/v1/table/${siteConfig.blogTableId}`,
    { next: { revalidate: 60 } }
  );
  const posts = await res.json();

  return posts;
}
