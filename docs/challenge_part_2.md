## Krikey Code Challenge

### Part 2: Write an API Endpoint

Before starting, I decided that I wanted to leverage the sandbox database that I already made in Part 1. I created a SQL dump and rewrote the Dockerfile and docker-compose.yml such that it seeds with the .sql dump on creation.

Then my next step was to create a simple Node script that connects to the Postgres database instantiated and seeded in the newly created Docker container. In the script, I verified that I could connect and do a simple query for the authors table.
