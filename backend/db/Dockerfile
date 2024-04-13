FROM postgres:16 as db
WORKDIR /app
COPY ./db/init.sh /docker-entrypoint-initdb.d
COPY ./db/dump.sql ./db/dump.sql