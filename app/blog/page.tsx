import authors from '@/data/authors';

import Image from 'next/image';
import Link from 'next/link';

import { formatDate } from '@/lib/formatDate';
import { getBlogPosts } from '@/lib/getBlogPosts';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default async function Blog() {
  const posts = await getBlogPosts();

  const descLength: number = 40;
  const titleLength: number = 40;

  return (
    <div className="mt-c20 px-0 pb-c3 md:mt-c10 xl:mt-c5 xl:px-c8">
      <div className="text-4xl font-bold">Latest Updates</div>

      <div className="flex flex-col gap-3 md:grid md:grid-cols-2 xl:grid-cols-3">
        {posts && posts.length > 0 ? (
          posts
            .filter((post: any) => {
              return post.published ? post : null;
            })
            .reverse()
            .map((post: any) => {
              let author: string = 'Some Guy';
              let pfp: string = 'https://i.imgur.com/AP6LUqW.png';
              let department: string = 'Unknown';

              if (post.authors && post.authors.length > 0) {
                for (const key in authors) {
                  if (post.authors[0].id == key) {
                    author = authors[key as keyof typeof authors].fullName;
                    pfp = authors[key as keyof typeof authors].profilePhoto;
                    department =
                      authors[key as keyof typeof authors].department.name;
                    break;
                  }
                }
              }

              let hiddenDescText: string = '';

              if (post.description.length > descLength) {
                post.description =
                  post.description.substring(0, descLength - 3) + '...';
              } else {
                hiddenDescText = '* '.repeat(
                  (descLength - post.description.length) / 2
                );
              }

              let hiddenTitleText: string = '';

              if (post.title.length > titleLength) {
                post.title = post.title.substring(0, titleLength - 3) + '...';
              } else {
                hiddenTitleText = '* '.repeat(
                  (titleLength - post.title.length) / 2
                );
              }

              return (
                <div className="mt-c5" key={post.id}>
                  <Link
                    href={`/blog/[slug]?author=${encodeURIComponent(
                      author
                    )}&pfp=${encodeURIComponent(
                      pfp
                    )}&department=${encodeURIComponent(department)}`}
                    as={`/blog/${post.slug}?author=${author}&pfp=${pfp}&department=${department}`}
                    passHref
                  >
                    <Card className="flex h-fit w-c80 flex-col bg-card shadow-md duration-300 ease-in-out hover:scale-105 hover:bg-opacity-100 hover:shadow-lg  md:w-c40 xl:w-c25">
                      <CardHeader>
                        <div className="text-md font-light dark:font-extralight">
                          {formatDate(post.date)}
                        </div>
                        <CardTitle className="flex w-full flex-col justify-center">
                          <div className="w-full text-xl font-bold">
                            {post.title}
                            <span className="hidden">{hiddenTitleText}</span>
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-fit text-clip text-sm font-medium dark:font-light">
                          {post.description}{' '}
                          <span className="invisible">{hiddenDescText}</span>
                        </div>
                        <div className="pb-0 pr-1 pt-2">
                          {post.tags?.map((tag: any) => (
                            <span
                              key={tag}
                              className="align-center mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-3">
                        <Image
                          alt={author}
                          className="mr-1 rounded-full"
                          src={pfp}
                          width={40}
                          height={40}
                        />
                        <div className="flex flex-col">
                          <div className="text-md font-bold">{author}</div>
                          <div className="text-md">{department}</div>
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                </div>
              );
            })
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </div>
  );
}
