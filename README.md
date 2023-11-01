# Next.js + MySQL + Personal modify
This is a [Next.js](https://nextjs.org/) project that uses [Prisma](https://www.prisma.io/) 
## Prerequisites
- [Node.js](https://nodejs.org/en/download/) `winget install --id OpenJS.NodeJS.LTS` on Windows
- NPM
- a MariaDB or MySQL database
## Download
```sh
git clone 'https://github.com/OrifInformatique/Nextjs_test.git'
```
```sh
cd Nextjs_test
```
```sh
npm install
```
## Config
create a .env.local file
```sh
touch .env.local
```
and put it in the URL of the API
```text
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```
## Set up the database
Create a new database with the following command:
```sh
mariadb -u root -p <<< 'CREATE DATABASE db20230815'
```
First, create your `.env` file by renaming the `.env.example` file to `.env`:
```sh
cp .env.example .env
```
to put in .env
```text
mysql://<USERNAME>:<PLAIN_TEXT_PASSWORD>@<ACCESS_HOST_URL>/<DATABASE_NAME>?sslaccept=strict
```
Example with the database of xampp on windows11 (here the database names db20230815)
```text
DATABASE_URL=mysql://root@localhost/db20230815
```
Push the database schema 
```sh
npx prisma db push
```
Run the seed script to populate your database with `Product` and `Category` data.
```sh
npm run seed
```
## Run the App
Run the app with following command:
```sh
npm run dev
```
Open your browser at [localhost:3000](localhost:3000) to see the running application.

## Troubleshoot
for `npx prisma db push` with `Error: Unknown binaryTarget debian-openssl-3.0.x and no custom binaries were provided` output:
```sh
npm install prisma --save-dev
npm install @prisma/client@dev prisma@dev
```
https://stackoverflow.com/questions/73117939/unknown-binarytarget-debian-openssl-3-0-x-and-no-custom-binaries-were-provided-e

