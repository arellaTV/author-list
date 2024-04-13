## Krikey Code Challenge

### Part 3: Build & Deploy Webpage

I opted to build the frontend with Next.js. Because I'm using raw CSS (via CSS module), I didn't need to import any additional dependencies. The only dependencies imported are the ones included from Next.js

With Next.js, you can fetch data server side and send down the fully loaded markup on first load. In my implementation, there's no additional JavaScript executed client side once it's loaded.

The added benefits of this approach are:

1. High Lighthouse scores
2. If this page was intended to be public facing, it would rank well for SEO because the entire markup is ready for the search engine scrapers
3. Simple deployment to Vercel. You can also opt to deploy it like any other Node app.

### Lighthouse scores

The app scores above 90 on all Lighthouse score metrics for both mobile and desktop.

<img src="images/lighthouse_scores.png" >
