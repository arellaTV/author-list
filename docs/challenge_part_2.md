## Krikey Code Challenge

### Part 2A: Write an API Endpoint

Before starting, I decided to leverage the sandbox database that I made in Part 1. I created a SQL dump and rewrote the Dockerfile and docker-compose.yml so that it seeds with the database with the .sql dump on creation.

Then my next step was to create a simple Node script that connects to my Postgres database. In the script, I verified that I could connect and do a simple query for the authors table. I created three models, `Author`, `Book`, and `SaleItem`.

After verifying that I could query the authors table. I proceeded to configure Express and set up an endpoint at http://localhost:8080/authors.

I created a controller method that responds to GET requests at `/authors`. I used joi for query param validation.

- When an `author_name` query param is provided, it conditionally adds a `where` clause to find the author.
  - When none is found, it returns a `404 "Author not found"`.
  - When an `author_name` query param is given but left intentionally blank, it returns a `400 "author_name is not allowed to be empty"`.
- Otherwise, if no `author_name` query param is given, it returns the top 10 best selling authors.

I used Sequelize to construct the query, but I also implemented a raw query as well. More details about both queries are in Part 2B.

Here is a link to the Swagger docs for the API: http://localhost:8080/api-docs

### Part 2B: API Performance

Before I attempted to optimize, I collected some stats. I used artillery to run a load test to simulate 1000 concurrent requests. You can find the config I used at `backend/tests/krikey-load-test.yml`. Although this is still different than 1000 actual users, it's still a decent benchmark for how the endpoint can handle a large amount of calls at once. Here are the results when using the Sequelize query:

```sh
http.requests: ................................ 4164
http.response_time:
  min: ........................................ 1
  max: ........................................ 265
  mean: ....................................... 19.5
  median: ..................................... 3
  p95: ........................................ 77.5
  p99: ........................................ 223.7
```

It looks like the mean response time is 19.5 ms. Here are the results for using the raw query:

```sh
http.requests: ................................ 4172
http.response_time:
  min: ........................................ 1
  max: ........................................ 213
  mean: ....................................... 11.1
  median: ..................................... 3
  p95: ........................................ 40.9
  p99: ........................................ 58.6
```

The raw query had a mean response time of 11.1 ms. We see a 43% reduction going from 19.5ms to 11.1ms. We also see dramatic reductions in p95 and p99 (95th and 99th percentile). The reduction is possibly due to less overhead. This trade-off may or may not be worth it depending on how quickly devs can build queries in sequelize vs raw sql. Sequelize's high level abstraction may make it easier to build faster depending on the task. Of course, we should also take these numbers with a grain of salt as I ran artillery directly against my local server.

We can potentially optimize this further by adding caching via Redis, adding appropriate expiration times and cache invalidation with Sequelize hooks.
