import { NotionRenderer } from 'react-notion';

import Link from 'next/link';

import { Icons } from '@/components/icons';

import '@/styles/styles.css';

import { getEvents } from '../page';

async function getBlocks({ params: { slug } }: { params: { slug: any } }) {
  const events = await getEvents();

  const event = events.find((t: any) => t.slug === slug);

  const res = await fetch(`https://notion-api.splitbee.io/v1/page/${event.id}`);
  const blocks = await res.json();

  return {
    event,
    blocks,
  };
}

async function generateStaticParams() {
  const events = await getEvents();
  const paths = events.map((row: any) => `/${row.slug}`);
  return paths;
}

export default async function EventPost({
  params,
}: {
  params: { slug: string };
}) {
  const paths = await generateStaticParams();

  const { slug } = params;

  const { event, blocks } = await getBlocks({ params: { slug: slug } });

  return (
    <>
      <Link href="/blog">
        <div className="mt-5 flex items-center px-0 text-base font-medium text-muted-foreground transition-colors hover:text-foreground/80 xl:px-c8">
          <Icons.arrowLeft className="h-5 w-5" />
          <div>Back to Events</div>
        </div>
      </Link>
      <div className="mt-c20 px-0 pb-c3 md:mt-c10 xl:mt-c5 xl:px-c8">
        <div className="text-4xl font-bold">{event.title}</div>
        <div>
          <NotionRenderer blockMap={blocks} />
        </div>
      </div>
    </>
  );
}
