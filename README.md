# Project doc

## docker-compose

You should install a docker in your development environment first.

Then you can use cmd docker-compose to download the images.

I have already written the config file for your docker.

You can tap this cmd in your cmd tool.

```bash
docker-compose up -d --force-recreate --build
```

## Run the project in localhost:8088

```bash
npm run dev
```

If you want to change the port, please modify it in the app.js.

## You can also use pm2 to start the project

```bash
npm start
```

## How to stop pm2

```bash
npm run stop
```

## How to delete pm2

```bash
npx pm2 delete all
```

Client use vue to display, use axios for ajax.

Server use koa2.

Use mongoose for DB operation.
