import { NotionRenderer } from 'react-notion';

import Image from 'next/image';
import Link from 'next/link';

import { formatDate } from '@/lib/formatDate';

import { Icons } from '@/components/icons';

import '@/styles/styles.css';

import { getPosts } from '../page';

async function getBlocks({ params: { slug } }: { params: { slug: any } }) {
  const posts = await getPosts();

  const post = posts.find((t: any) => t.slug === slug);

  const res = await fetch(`https://notion-api.splitbee.io/v1/page/${post.id}`);
  const blocks = await res.json();

  return {
    post,
    blocks,
  };
}

async function generateStaticParams() {
  const posts = await getPosts();
  const paths = posts.map((row: any) => `/${row.slug}`);
  return paths;
}

export default async function BlogPost({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { author: any; pfp: any; department: any };
}) {
  const paths = await generateStaticParams();

  const { author } = searchParams;
  const { pfp } = searchParams;
  const { department } = searchParams;

  const { slug } = params;

  const { post, blocks } = await getBlocks({ params: { slug: slug } });

  return (
    <>
      <Link href="/blog">
        <div className="mt-5 flex items-center px-0 text-base font-medium text-muted-foreground transition-colors hover:text-foreground/80 xl:px-c8">
          <Icons.arrowLeft className="h-5 w-5" />
          <div>Back to Blog</div>
        </div>
      </Link>

      <div className="mt-c20 px-0 pb-c3 md:mt-c10 xl:mt-c5 xl:px-c8">
        <div className="mb-14 flex flex-col gap-4">
          <div className="text-md font-medium">{formatDate(post.date)}</div>
          <div className="text-4xl font-bold">{post.title}</div>
          <div className="flex flex-col gap-5">
            <div className="text-md font-medium">Posted By</div>
            <div className="flex gap-3">
              <Image
                alt={author}
                className="mr-4 rounded-full"
                src={pfp}
                width={50}
                height={10}
              />
              <div className="flex flex-col">
                <div className="text-md font-semibold dark:font-medium">
                  {author}
                </div>
                <div className="text-md font-medium dark:font-light">
                  {department}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <NotionRenderer blockMap={blocks} />
        </div>
      </div>
    </>
  );
}
