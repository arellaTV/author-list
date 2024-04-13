## Krikey Code Challenge

### Part 2: Write an API Endpoint

Before starting, I decided that I wanted to leverage the sandbox database that I already made in Part 1. I created a SQL dump and rewrote the Dockerfile and docker-compose.yml such that it seeds with the .sql dump on creation.

Then my next step was to create a simple Node script that connects to the Postgres database instantiated and seeded in the newly created Docker container. In the script, I verified that I could connect and do a simple query for the authors table. I created three models, `Author`, `Book`, and `SaleItem`.

After verifying that I could query the authors table. I proceeded to configure Express and set up an endpoint at http://localhost:8080/authors.

I created a controller method that responds to GET requests at `/authors`. I used joi for query param validation.

- When an `author_name` query param is provided, it conditionally adds a `where` clause to find the author.
  - When none is found, it returns a `404 "Author not found"`.
  - When an `author_name` query param is given but left intentionally blank, it returns a `400 "author_name is not allowed to be empty"`.
- Otherwise, if not `author_name` query param is given, it returns the top 10 best selling authors.

I used Sequelize to construct the query, but I also implemented a raw query and commented it out.
