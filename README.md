# Next.js + MySQL + modif

This is a [Next.js](https://nextjs.org/) project that uses [Prisma](https://www.prisma.io/) 

## Demo 

https://next-mysql.vercel.app

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)


## Set up the database

Create a new database with the following command:



## Set up the starter Next.js app

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-mysql nextjs-mysql
```

Next, you'll need to create a database username and password through the CLI to connect to your application. If you'd prefer to use the dashboard for this step, you can find those instructions in the [Connection Strings documentation](https://docs.planetscale.com/concepts/connection-strings#creating-a-password) and then come back here to finish setup.

First, create your `.env` file by renaming the `.env.example` file to `.env`:

```sh
cp .env.example .env
```

Next, using the PlanetScale CLI, create a new username and password for the branch of your database:





to put in .env
```text
mysql://<USERNAME>:<PLAIN_TEXT_PASSWORD>@<ACCESS_HOST_URL>/<DATABASE_NAME>?sslaccept=strict
```
exemple with the database of xampp on windows11 (here the databae names db20230815)
```text
DATABASE_URL=mysql://root@localhost/db20230815
```

Push the database schema = `php spark migrate --all`

`npx prisma db push`

Run the seed script to populate your database with `Product` and `Category` data.

`npm run seed`

## Run the App

Run the app with following command:

`npm run dev`

Open your browser at [localhost:3000](localhost:3000) to see the running application.



# perso
```
winget install --id OpenJS.NodeJS.LTS
npm install bootstrap
```
