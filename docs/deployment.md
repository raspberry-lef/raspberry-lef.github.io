---
id: deployment
title: Deployment
sidebar_label: Deployment
---

## Using Docker

### Create a PostgreSQL Instance (Optional)

*If you have a PostgreSQL database instance configured and running you can skip this section.*

Start a PostgreSQL database instance using docker:

```sh
docker run --rm --name activeworkflow-db \
  -e POSTGRES_PASSWORD=activeworkflowpassword \
  -e POSTGRES_USER=activeworkflow \
  -v activeworkflow-data:/var/lib/postgresql/data \
  -d docker.io/postgres
```

This starts a database with the username/password you provided and mounts a docker volume (activeworkflow-data) so your data is
preserved during runs.

You can stop the database with:

```sh
docker stop activeworkflow-db
```

### Run ActiveWorkflow Using the Official Docker Image

The default ActiveWorkflow instance consists of three containers: web, scheduler and worker.
You can run ActiveWorkflow using the official docker image with:

```sh
docker run --rm --name activeworkflow-web \
  --link activeworkflow-db:postgres \
  -e DATABASE_URL=postgres://activeworkflow:activeworkflowpassword@postgres/active_workflow
  -e SECRET_KEY_BASE=secretrandomstring \
  -e CREATE_DATABASE=true \
  -e DISABLE_SSL=true \
  -p 3000:3000 \
  -d docker.io/automaticmode/active_workflow

docker run --rm --name activeworkflow-scheduler \
  --link activeworkflow-db:postgres \
  -e DATABASE_URL=postgres://activeworkflow:activeworkflowpassword@postgres/active_workflow
  -e SECRET_KEY_BASE=secretrandomstring \
  -e CREATE_DATABASE=true \
  -e DISABLE_SSL=true \
  -d docker.io/automaticmode/active_workflow bundle exec rails runner bin/scheduler.rb

docker run --rm --name activeworkflow-worker \
  --link activeworkflow-db:postgres \
  -e DATABASE_URL=postgres://activeworkflow:activeworkflowpassword@postgres/active_workflow
  -e SECRET_KEY_BASE=secretrandomstring \
  -e CREATE_DATABASE=true \
  -e DISABLE_SSL=true \
  -d docker.io/automaticmode/active_workflow bundle exec script/delayed_job -n 2 run
```

For convenience you can gather all the environment variable definitions in a single file, for example `activeworkflow.env`:

```sh
DATABASE_URL=postgres://activeworkflow:activeworkflowpassword@postgres/active_workflow
SECRET_KEY_BASE=secretrandomstring
CREATE_DATABASE=true
DISABLE_SSL=true
```
And then start ActiveWorkflow with:

```sh
docker run --rm --name activeworkflow-web \
  --link activeworkflow-db:postgres \
  --env-file activeworkflow.env
  -p 3000:3000 \
  -d docker.io/automaticmode/active_workflow

docker run --rm --name activeworkflow-scheduler \
  --link activeworkflow-db:postgres \
  --env-file activeworkflow.env
  -d docker.io/automaticmode/active_workflow bundle exec rails runner bin/scheduler.rb

docker run --rm --name activeworkflow-worker \
  --link activeworkflow-db:postgres \
  --env-file activeworkflow.env
  -d docker.io/automaticmode/active_workflow bundle exec script/delayed_job -n 2 run
```

The above commands assume that you have a PostgreSQL instance in a docker container named `activeworkflow-db` and that you link it to ActiveWorkflow. If your database is hosted differently edit the `--link` line accordingly and/or omit it and use the corresponding `DATABASE_URL` environment variable.

ActiveWorkflow is configured by default with user `admin` and password `password` and is accessible using a web browser on `http://localhost:3000`.

You can stop ActiveWorkflow with:

```sh
docker stop activeworkflow-web activeworkflow-scheduler activewrorkflow-worker
```

!Note: For production deployment we strongly recommend you to use a web server (like nginx or Apache) to provide an SSL front. The `DISABLE_SSL` variable allows AcitveWorkflow to run without SSL encryption and should be omitted for production.

### Using docker-compose

You can also run ActiveWorkflow using
[`docker-compose`](https://docs.docker.com/compose/). For this you need a
[`docker-compose.yml`](https://github.com/automaticmode/active_workflow/blob/master/docker-compose.yml)
and a [`.env`](https://github.com/automaticmode/active_workflow/blob/master/.env) file with environment variables.
Please edit these according to your requirements. You can read more about supported environment variables in the [Environment](#environment) section below.

You can then run ActiveWorkflow with:

```sh
docker-compose up
```

You can stop it with:

```sh
docker-compose down
```

This setup has a PostgreSQL database included.

## Environment Variables

ActiveWorkflow tries to follow the best practices of a [12 factor](https://12factor.net/) app. You can configure your ActiveWorkflow instance by setting environment variables. The following environment variables are supported:

- `DATABASE_USERNAME`, `DATABASE_PASSWORD`, `DATABASE_HOST` and `DATABASE_NAME` are self-explanatory credentials required to establish a connection to the PostgreSQL database.

- `DATABASE_URL` substitutes all of the above environment variables and could be used for convenience. It has the format
  `postgres://{username}:{password}@{hostname}/{database_name}`, where `{}` should replaced by corresponding values.

- `CREATE_DATABASE` should be `true` for the web process to create a database. Usually it is used during the first run if you haven't created a database instance in advance. It is idempotent, so it can be given even if a database has been already created.

- `DO_NOT_MIGRATE` should be `true` to skip database migrations. By default the ActiveWorkflow web process runs database migration scripts to update the database schema to the latest version.

- `DO_NOT_SEED` should be `true` to avoid seeding a database. By default the ActiveWorkflow web process creates a new user and a simple example workflow. The seed user is configured by using the environment variables described below.

- `SEED_EMAIL`, `SEED_USERNAME` and `SEED_PASSWORD` are the credentials of the user that the ActiveWorkflow web process should create (unless `DO_NOT_SEED` is set to `true`). Created user is made an admin. If a user with the provided email already exists, the operation is skipped. If these variables are not set ActiveWorkflow creates a user `admin` with password `password` and email `admin@example.com`.

- `SECRET_KEY_BASE` is a random string used to encrypt data, specifically session information.

- `AGENT_LOG_LENGTH` defines how many log entries per entries to keep. 200 log entries are kept if this variable is undefined.

- `PORT` is the port where the ActiveWorkflow web process should listen on.

- `DISABLE_SSL` could be set to `true` when testing by using direct connection on localhost. For production you should use some web server to provide an SSL front (like nginx or Apache) and leave `DISABLE_SSL` unset.

- `WEB_CONCURRENCY`, `RAILS_MAX_THREADS` define how many processes and threads should the web process use to serve requests.

- `SMTP_DOMAIN`, `SMTP_SERVER`, `SMTP_PORT`, `SMTP_AUTHENTICATION` ('none' or 'plain'),
  `SMTP_SSL` (false or true), `SMTP_USER_NAME`, `SMTP_PASSWORD` are all used for SMTP configuration.

- `SMTP_ENABLE_STARTTLS_AUTO` - you may need to set this to `true` for some servers.

- `SMTP_OPENSSL_VERIFY_MODE` - use `peer` for production or `none` for testing.


## How to Build Your Own Docker Image

You can build your own docker image of ActiveWorkflow by checking out the
[ActiveWorkflow repository](https://github.com/automaticmode/active_workflow/)
and using `docker build` command:

```sh
git clone https://github.com/automaticmode/active_workflow.git
cd active_workflow
docker build -t {yourname}/active_workflow .
```
