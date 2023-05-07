# BOOK NOB

本を売るなら BOOK NOB

## Stacks

- Next.js(App Router)
- TypeScript
- Prisma
- MSW
- Storybook
- Axios
- Tailwind CSS

## Setup

```sh
yarn create next-app
```

### Prisma

初期設定

```sh
yarn add prisma -D
yarn prisma init
```

@prisma/client の install
schema.prisma の path を通す

```sh
yarn prisma generate --schema=./src/prisma/schema.prisma
```

### Storybook

初期設定

```sh
npx storybook@latest init
```
