This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## BUN
install [bun](http://bun.sh) through Homebrew
```bash
brew tap oven-sh/bun
brew install bun
```
update
```bash
brew upgrade bun
```
start dev server with bun
```bash
bun --bun run dev
```
install/add npm packages
```bash
bun add <pkg>
bun install <pkg>
```

## Used Tech

- [Next.js](http://nextjs.org) 14.x wilth App Router, [Typescript](http://typescriptlang.org) and [Tailwind CSS](http://tailwindcss.com)
- Bun 
- component library: [UI.shadcn](http://ui.shadcn.com)

## Used APIs
POSTER IMAGE API
example: https://codepen.io/pixelnik/pen/pgWQBZ

https://www.themoviedb.org/settings/api
API-sleutel: 030e0502e2bbaa8bd7801e0316f05127
API-leestoegangstoken: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzBlMDUwMmUyYmJhYThiZDc4MDFlMDMxNmYwNTEyNyIsInN1YiI6IjY1YTNhYjdmMjY2Nzc4MDEyODY0NjYxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ov3jhBpwnxSRrAcdZlgraezEy8nuw8945acVzK1torc
https://developer.themoviedb.org/docs/getting-started

NZB PLANET API
description of API: https://newznab.readthedocs.io/en/latest/misc/api.html#functions

https://api.nzbplanet.net/api?apikey=1af02d85bc38ededa87cbd56dc54a3d7&o=json&extended=1&t=search&q=napoleon

### predefined categories
| Categories|Category Name|
|-----------|-------------|
| 0000      | Reserved              |
| 1000      | Console               |
| 1010      | Console/NDS           |
| 1020      | Console/PSP           |
| 1030      | Console/Wii           |
| 1035      | Console/Switch        |
| 1040      | Console/XBox          |
| 1050      | Console/XBox 360      |
| 1060      | Console/Wiiware       | 
| 1070      | Console/XBox 360 DLC  |
| 1080      | Console/PS3           |
| 1090      | Console/XBox One      |
| 1100      | Console/PS4           |
| 2000      | Movies                |
| 2010      | Movies/Foreign        |
| 2020      | Movies/Other          |
| 2030      | Movies/SD             |
| 2040      | Movies/HD             |
| 2045      | Movies/UHD            |
| 2050      | Movies/BluRay         |
| 2060      | Movies/3D             |
| 3000      | Audio                 |
| 3010      | Audio/MP3             |
| 3020      | Audio/Video           |
| 3030      | Audio/Audiobook       |
| 3040      | Audio/Lossless        |
| 3050      | Audio/Podcast         |
| 4000      | PC                    |
| 4010      | PC/0day               |
| 4020      | PC/ISO                |
| 4030      | PC/Mac                |
| 4040      | PC/Mobile-Other       |
| 4050      | PC/Games              |
| 4060      | PC/Mobile-iOS         |
| 4070      | PC/Mobile-Android     |
| 5000      | TV                    |
| 5020      | TV/Foreign            |
| 5030      | TV/SD                 |
| 5040      | TV/HD                 |
| 5045      | TV/UHD                |
| 5050      | TV/Other              |
| 5060      | TV/Sport              |
| 5070      | TV/Anime              |
| 5080      | TV/Documentary        |
| 6000      | XXX                   |
| 6010      | XXX/DVD               |
| 6020      | XXX/WMV               |
| 6030      | XXX/XviD              |
| 6040      | XXX/x264              |
| 6050      | XXX/Pack              |
| 6060      | XXX/ImgSet            |
| 6070      | XXX/Other             |
| 7000      | Books                 |
| 7010      | Books/Mags            |
| 7020      | Books/EBook           |
| 7030      | Books/Comics          |
| 8000      | Other                 |
| 8010      | Other/Misc            |
| 7900      | Category Not Determined |
| 100000    |Custom                 |
