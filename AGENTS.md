# AGENTS.md

## Project

Personal website built with Next.js 16, React 19, and TypeScript. Includes portfolio pages, MDX blog, guestbook, Better
Auth, PostgreSQL, and Prisma.

## Stack

- Next.js App Router (`app/`)
- React 19, strict TypeScript
- Tailwind CSS v4
- MDX for posts (`posts/*.mdx`)
- Prisma 7 + PostgreSQL
- Better Auth
- Bun as main package manager (`bun.lock` exists)

## Useful commands

```bash
bun install
bun --bun run dev
bun --bun run build
bun --bun run lint
```

Prisma:

```bash
bunx --bun prisma generate
bunx --bun prisma migrate deploy
bunx --bun prisma migrate dev
```

## Structure

- `app/` — routes, layout, pages, API routes.
- `components/` — reusable React components.
- `components/ui/` — base UI primitives.
- `components/blocks/` — page sections/blocks.
- `lib/` — auth, Prisma client, utilities, types.
- `posts/` — MDX blog posts.
- `prisma/` — schema and migrations.
- `public/` — static files.

## Code style

- Strict TypeScript. Avoid `any` when proper typing is possible.
- Formatting: 4 spaces, `;`, double quotes, `printWidth: 120`.
- Use `@/*` imports when relative paths get deep.
- Components are functional and use PascalCase.
- Component filenames are mostly lowercase/kebab-case now — keep local style.
- Do not mix server and client code. Add `"use client"` only when browser APIs, hooks, or events are needed.
- For `className`, use existing helpers (`cn` from `lib/utils.ts`) when class merging is needed.

## Next.js rules

- Prefer Server Components by default.
- Keep Client Components minimal.
- Do not access `process.env` from Client Components.
- Keep site metadata in `app/layout.tsx` when changing SEO/global metadata.
- API routes live in `app/api/**/route.ts`.

## Blog / MDX

- Store posts in `posts/*.mdx`.
- Frontmatter must match types/parser in `lib/posts.ts` and `lib/types/post.types.ts`.
- Check `components/mdx-components.tsx` for MDX components.

## Prisma / Auth

- Prisma client is generated into `app/generated/prisma` from `prisma/schema.prisma`.
- Do not edit generated files manually.
- For database changes, update `prisma/schema.prisma` and create migration.
- Secrets and connection strings belong only in `.env`; do not commit real values.
- Update `.env.example` when adding new environment variables.

## Verification before response

After code changes, run when possible:

```bash
bun run lint
bun run build
```

If build/lint were not run, state why.

## Constraints

- Do not rewrite site visual style unless requested.
- Do not delete content, posts, migrations, or public assets without explicit request.
- Do not change auth/database schema without explaining consequences.
- Do not commit `.env`, tokens, passwords, or keys.
