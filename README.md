# Twitter Clone

Building out a basic Twitter Clone with

- Turborepo
- Yarn
- NextJS 13
- Storybook

## Setup

Make sure you have the following basic requirements:

- NodeJS >= 14
- Supabase project

Initialize supabase, login and link your project

```
npx supabase init
npx supabase login
npx supabase link --project-ref <project_ref> -p <db_password>
```

Link your Vercel account to Turborepo to enable remote caching

```
npx turbo login
npx turbo link
```

Install yarn

```
corepack enable yarn
corepack prepare
```

Install project dependencies

```
yarn install
```

## How to run

```
yarn dev
```

The following servers and the respective ports will start

- [Twitter Web App](http://localhost:3000/)
- [UI Component Library](http://localhost:6006/)
