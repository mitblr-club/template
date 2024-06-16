# mitblr.club template

![](https://img.shields.io/github/v/release/mitblr-club/template)
![](https://img.shields.io/github/forks/mitblr-club/template?style=flat)

This template is a fully responsive website built with [Next.JS](https://nextjs.org), [TailwindCSS](https://tailwindcss.com), and [shadcn/ui](https://ui.shadcn.com).

## Configuration

1.  All core config. values of the template exist in the root at [`site.config.ts`](/site.config.ts).

    ```ts
    export const siteConfig = {
      name: '...',
      institution: '...',
      description: '...',
      eventsTableId: '...',
      blogTableId: '...',
      navLinks: [
        {
          title: 'Home',
          href: '/',
        },
        {
          title: 'Blog',
          href: '/blog',
        },
        {
          title: 'Events',
          href: '/events',
        },
      ] satisfies NavItem[],
      mediaLinks: {
        instagram: '...',
        linkedin: '...',
        github: '...',
        twitter: '...',
        institute: '...',
      },
      contactDetails: {
        number: '+91 1234567890',
        email: 'abc.efg@gmail.com',
      },
      homePage: {
        tagline: '...',
      },
    };
    ```

    a. The Notion Database IDs are provided to `eventsTableId` and `blogTableId`.

    b. The social media links are provided under `mediaLinks: {...}`.

    c. These same variables contribute to the metadata of the site.

2.  The homepage view has its files located at [`/app/home`](/app/home), and has its data stored in `data.ts`/`data.tsx` files that can be edited directly.

## Development

1. To install packages, run:

   ```bash
   npm install
   ```

   You can then make changes as necessary in order to be committed.

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Lint and format changes using ESLint/Prettier.

   ```bash
   # Linting
   npm run lint:fix

   # Formatting
   npm run format:write
   ```

Now, you can create a pull request to commit changes to the repository.
