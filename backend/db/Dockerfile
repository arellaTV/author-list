FROM postgres:16 as db
WORKDIR /app
COPY ./init.sh /docker-entrypoint-initdb.d
COPY ./dump.sql ./db/dump.sql