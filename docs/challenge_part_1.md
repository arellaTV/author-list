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

### 2. What is the sales total for the author named “Lorelai Gilmore”?

### 3. What are the top 10 performing authors, ranked by sales revenue?
