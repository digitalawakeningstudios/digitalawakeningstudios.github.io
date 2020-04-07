---
layout: job-application
title: "Glitch - Interactive Experience Developer"
greeting: Hi, I'm Nathan Selikoff, a cross-disciplinary senior engineer!
headline: I'd love to join the Glitch team :)
description: Hi, I'm Nathan Selikoff, a cross-disciplinary senior engineer, and I'd love to join the Glitch team :)

links:
  - text: Resume
    href: /assets/nathan-selikoff-resume-glitch.pdf
  - text: Commercial Work
    href: /
  - text: Interactive Art
    href: https://nathanselikoff.com
  - text: Email
    href: mailto:nathan@awakeningstudios.com
  - text: Twitter
    href: https://twitter.com/nselikoff
  - text: LinkedIn
    href: https://www.linkedin.com/in/nathanselikoff/
  - text: GitHub
    href: https://github.com/nselikoff
---

{:.sm:hidden}
[Projects](#projects){:.mr-2}
[Responses](#responses){:.mr-2}
[Links](#links)

{:.font-mono .text-accent .text-xl .lg:text-2xl .leading-tight .mb-4 id="projects"}

## Projects and previous work

{:.text-indigo-200 .text-lg .lg:text-xl .mb-4}

### Mobilize

![Omnimodal Mobilize Analytics Dashboard](/assets/img/jobs/omnimodal-mobilize-geospatial-analytics-dashboard.png)

![Omnimodal Realtime Data Flow](/assets/img/jobs/omnimodal-realtime-data-flow-720w.png)

{:.text-lg .text-indigo-100}
Context

In the past three years, as CTO and co-founder of a startup, I've been designing and building a geospatial data platform from the ground up.

To accomplish this, I've utilized and experimented with geospatial visualization APIs (Google Maps, Mapbox, turf.js, d3.js), pub/sub services (PubNub), streaming event pipelines (AWS Kinesis, Lambda), microservices (node.js), caching layers (Redis, AWS CloudFront), and more traditional web app frontends (Ember.js) and backends (Ruby on Rails, PostgreSQL). I've also dockerized legacy Java applications to facilitate deployment on AWS ECS/EC2, for particular needs in the data pipeline.

Part of the challenge has been to engineer reliable and scalable cloud-based data pipelines that can fetch and archive mobility data from public transit, shared mobility (bicycles and scooters), and parking APIs - and transform, cache, and make the data available to an intuitive web-based analytics dashboard.

Some of the third-party APIs we integrate with are based on open data standards (yay!) and some of them are not. Some endpoints are reliable; many are not. We know some of the ways that we want to use the data now, but there will be future uses that we haven't foreseen. To address these challenges, I designed and built a node.js microservice called `scribe`, and a Ruby on Rails + Sidekiq + Redis module called `librarian`.

Originally its own app, the Librarian registers real-time and static data feeds in a database, with metadata that describes where to fetch them from, how often to fetch them, and the last time they were fetched and archived. When the Librarian is run, a clock process will ping all registered feeds according to their configuration attributes, and when the time is right, will ask the Scribe to fetch and archive the feed in raw form into AWS S3, by POSTing with the appropriate info. If successful, the Scribe will respond with `201 Created` and various metadata.

This system is in production with 14 data feeds for the City of Orlando, but is designed to be able to scale up to hundreds of cities and thousands of data feeds.

{:.text-lg .text-indigo-100}
Links

The code is not open source, but I've extracted the READMEs for a little more context and would be happy to walk you through the system in further detail.

- [README for `scribe` and `librarian`](https://gist.github.com/nselikoff/77f00f055832d99543190fcaac6aa47c)

{:.text-indigo-200 .text-lg .lg:text-xl .mt-8 .mb-4}

### Filaments

![Filaments](/assets/img/jobs/filaments_0.jpg)

{:.text-lg .text-indigo-100}
Context

In 2014, I spent 6 days with about 200 students at Stone Middle School in Melbourne, Florida, teaching them the basics of making art with code. On the first day, I introduced the concept of "computational creation," or "creative coding," to the students, along with a discussion about using a sketchbook / design notebook in the creative process. Following that, we spend a few days with both Scratch and Processing, two programming environments accessible to students.

With Processing, we focused on abstract, algorithmic art and code based on drawing simple shapes. We discussed drawing within a coordinate system, how color works on a computer versus with paint (additive vs subtractive), the draw loop, variables, and basic interactivity. I shared the "chaos game", a stochastic method for generating a Sierpinski triangle, and talked about algorithmic drawing, giving them an example of mine called Filaments that many of them remixed.

At the time, we used Khan Academy's implementation of Processing JS, which was the first time Processing was available in an accessible, browser-based live coding environment that encouraged sharing and remixing. It has been amazing to see that niche blossom with the introduction of Glitch, and I recently adapted Filaments for Glitch, adding some simple interactivity to show how HTML inputs can control a p5.js sketch.

{:.text-lg .text-indigo-100}
Links

- [Filaments on Glitch](https://filaments.glitch.me)
- [Filaments on Khan Academy](https://www.khanacademy.org/computer-programming/filaments/2396343163) (make sure to check out the remixes!)
- [My original Filaments blog post](https://nathanselikoff.com/698/code-sketches/filaments)
- [Full writeup of my teaching artist residency](https://nathanselikoff.com/2316/events/teaching-artist-residency-stone-middle-school)

{:.font-mono .text-accent .text-xl .lg:text-2xl .leading-tight .mt-8 .mb-4 id="responses"}

## Responses

{:.text-indigo-200 .text-lg .lg:text-xl .mb-4}

### Why do you want to be a part of what we're doing at Glitch?

I come from an interdisciplinary art + tech background and have had quite a nontraditional career. My mom is an artist and my dad is a software engineer so I've grown up around both influences, which has benefited me greatly. I've never worked in a traditional tech company, having spent most of my 20+ year career freelancing with a variety of small businesses, non-profits, and later advertising and design firms.

Three years ago, I started a social enterprise called Omnimodal to address the need for high-quality, real-time data for public transit and other mobility systems. My cofounder and I talked a lot about fostering an inclusive, equitable and accessible environment where we and future team members could be ourselves, be honest with our needs, and look after our other passions and desires outside work. People describe me as kind, gentle, patient, and a good listener.

I'm now moving away from day to day responsibilities at my startup, and am seeking the right team for the next stage of my career. I have been keeping an eye on Glitch since the Fog Creek days - I was an avid reader of Joel On Software - and have been impressed at your longevity as a company, people-centric culture of sharing, and leadership with regards to diversity, equity and inclusion. I am strongly aligned with those values and would love to leverage my experience and perspective to make significant contributions to Glitch.

Although there aren't any openings currently listed, I believe my unique and deep art + tech background, especially in the past few years working on real-time data pipelines, visualization, and web-based services and tools, make me a great candidate for joining the Glitch team. In addition to working on the platform itself, I'd love to spend time playing and experimenting with creative coding, data visualization, and mapping libraries on Glitch like Processing, d3, three.js, turf.js, deck.gl, and Mapbox GL. By expanding the content and functionality of Glitch with these frameworks in mind, I believe I could help drive adoption of Glitch by new and emerging audiences of designers, artists, data journalists, and musicians.

There's a lot more I'd love to share, but I'll leave you with one final tidbit: my wife and I [rode bicycles 1000 miles across the US in the summer of 2009](https://www.youtube.com/watch?v=fKYUrGmXqIk)!
