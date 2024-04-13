## Krikey Code Challenge

### Part 3: Build & Deploy Webpage

I opted to build the frontend with Next.js. Because I'm using raw CSS (via CSS module), I didn't need to import any additional dependencies. The only dependencies imported are the ones included from Next.js

With Next.js, you can fetch data server side and send down the fully loaded markup on first load. In my implementation, there's no additional JavaScript executed client side once it's loaded.

The added benefits of this approach are:

1. High Lighthouse scores
2. If this page was intended to be public facing, it would rank well for SEO because the entire markup is ready for the search engine scrapers
3. Simple deployment to Vercel. You can also opt to deploy it like any other Node app.

### Lighthouse scores

The app hits 100 on all Lighthouse score metrics for both mobile and desktop on the deployed app: [https://author-list.vercel.app/](https://author-list.vercel.app/)

<img src="images/lighthouse_scores.png" >

### Deployed URLs

Visit the deployed frontend: https://author-list.vercel.app/

Visit the deployed backend: https://author-list-production.up.railway.app/authors
