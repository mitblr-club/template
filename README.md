# mitblr.club template

![](https://img.shields.io/github/v/release/mitblr-club/template)
![](https://img.shields.io/github/forks/mitblr-club/template?style=flat)

This template is a fully responsive website built with [Next.JS](https://nextjs.org), [TailwindCSS](https://tailwindcss.com), and [shadcn/ui](https://ui.shadcn.com).

## Configuration

1.  All core config. values of the template exist at [`/config/site.ts`](/config/site.ts). For convenience, we recommend using the Config Generator available at [https://mitblr.club/generators/config](https://mitblr.club/generators/config), although you can also edit these files directly.

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

4. The homepage view is organized into two sets of files within the [`/config/`](/config/) directory:

   a. The title, description, and FAQs are stored in the `home.ts`/`home.tsx` files. For convenience, we recommend using the Config Generator available at [https://mitblr.club/generators/home](https://mitblr.club/generators/home), although you can also edit these files directly.

   b. The cards displayed on the page are stored in the `cards.ts`/`cards.tsx` files. Similarly, you can use the Config Generator at [https://mitblr.club/generators/cards](https://mitblr.club/generators/cards) for easier configuration, or make direct edits to the files if preferred.

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
