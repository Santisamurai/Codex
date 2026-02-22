# RaceHub (Next.js + Tailwind + Prisma)

A mobile-first Next.js 14+ TypeScript app with Tailwind CSS, Prisma (SQLite), and routed sections for **Learn** and **Play**.

## Features

- Next.js App Router (TypeScript)
- Tailwind CSS styling
- Prisma ORM with SQLite
- Learn routes:
  - `/learn/cars`
  - `/learn/teams`
  - `/learn/drivers`
  - `/learn/tracks`
  - `/learn/rules`
  - `/learn/season-2026`
- Play routes:
  - `/play/quizzes`
  - `/play/strategy-sim`
- Homepage prompt to pick a favorite team and driver

## Setup

```bash
npm install
cp .env.example .env
npm run prisma:generate
npm run prisma:migrate -- --name init
npm run dev
```

Open http://localhost:3000.

## Useful commands

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run prisma:studio
```
