# Sporty assignment

Run locally in development mode

> npm install
> npm run dev

Build & run locally

> npm install
> npm run build
> npm run preview

Main tools and frameworks used:

- React
- Redux toolkit
- Tailwind

I know for a fact that the design is uninspiring to say the least, but since the time was limited and there were no clear objectives about the design, this is the simplest ui that I came up with that plays nicely both for mobile and larger screens without being time consuming to create.

Redux is completely overkill for this project and I know it.

This could be a project with simple fetch requests and saving data on localstorage for “caching” or even Context for sharing data.

Usually I am working with Redux/Axios/Redux Saga for larger projects to do data fetching/manipulation/storing.

It was the word ‘caching’ I noticed in the assignment that sparked the idea of trying RTK Query for the first time, as caching is one of the benefits out of the box.

So, while I understand this is completely overkill, it was a nice opportunity for me to do something out of my comfort zone and not use Sagas and Axios.

If time was not a factor I would also try to handle the accessibility issues better (although Lighthouse score is not bad at all at 90%). Also I would have written some tests, especially regarding data integrity but also for components consistency.

Lastly I know I would have done a couple of things differently if it were for a production app like hiding the redux dev tools for production and probably put the api base url in an .env environment for better portability between local/dev/production environments and things like that. I didn’t do any of that just because I didn’t think that they do matter for the assignment, I’m just bringing those things up for clarity.

This is a rough breakdown of the time I spent in each task

- Read and understand the assignment & the api docs – 10 mins
- Redux setup – 20 mins
- Api & store setup – 40 mins
- Rendering list & Modal – 20 mins
- Filter & search – 20 mins

All in all this took me probably a bit more than 100 minutes but it was my first time using RTK Query.
