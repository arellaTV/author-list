## Krikey Code Challenge

### Part 1: SQL Challenge

Assuming the following tables are created:

```sql
CREATE TABLE authors (
id serial PRIMARY KEY,
name text,
email text,
date_of_birth timestamp
);

CREATE TABLE books (
id serial PRIMARY KEY,
author_id integer REFERENCES authors (id),
isbn text,
);

CREATE TABLE sale_items (
id serial PRIMARY KEY,
book_id integer REFERENCES books (id),
customer_name text,
item_price money,
quantity integer
);
```

Write SQL statements for the following:

### 1. Who are the first 10 authors ordered by date_of_birth?

In order to solve this problem, I first created my own Postgres database to use as a sandbox. I created the database with Docker using `backend/docker-compose.yml`.

```
# Use krikey_user/r@nd0mv@lu3 user/password credentials
version: "3.9"

services:
  krikeydb:
    image: postgres
    restart: always
    shm_size: 128mb
    ports:
      - 5432:5432
    environment:
      POSTGRES_PASSWORD: r@nd0mv@lu3
      POSTGRES_USER: krikey_user
      POSTGRES_DB: krikey_db

```

I then manually executed the SQL statement above. I used DBeaver to add rows to each table, first adding 15 authors (using random name and birthday generators I found online).

<img src="images/authors_table.png" />

From there, I landed on using this SQL statement to get `the first 10 authors order by date_of_birth` (executing it through DBeaver).

```sql
SELECT *
FROM public.authors
order by date_of_birth asc;
```

The above statement orders by date_of_birth in ascending order. To get the first 10 authors in descending order, you can use this statement:

```sql
SELECT *
FROM public.authors
order by date_of_birth desc;
```

### 2. What is the sales total for the author named “Lorelai Gilmore”?

For this question, I created a new author row with name "Lorelai Gilmore" (nice Gilmore Girls reference!). I also added her fictional birthday. I then added 2 rows for books, setting Lorelai as the author. Finally, I added 4 rows for sale_items (basically 2 sales per book).

<img src="images/lorelai_gilmore.png" />
<img src="images/books.png" />
<img src="images/sale_items.png" />

### 3. What are the top 10 performing authors, ranked by sales revenue?
