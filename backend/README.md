# Author List Backend

A backend app that returns information about top selling authors

## Description

This app was built with Node and written in TypeScript.

## Getting Started

### Run Locally

#### Dependencies

- Node v20
- Docker (optional)
- Docker Compose (optional)

### Installing

```sh
npm install
```

### Set up your database with Docker

Run your docker database with `docker compose`.

```sh
cd db
docker compose up -d
```

### Set up environment variables

Before running the program, create a .env. You can do that quickly for development like this:

```sh
cat .env.example >> .env
```

### Executing the program

To run the program in dev mode

```sh
npm run dev
```

And visit http://localhost:8080 to get a "Hello world!" response back.
