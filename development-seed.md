---
layout: job-application
title: "Development Seed - Data/Cloud Engineer"
greeting: Hi, I'm Nathan Selikoff, a multidisciplinary senior engineer!
headline: I'd love to join the Development Seed Engineering team :)
description: Hi, I'm Nathan Selikoff, a multidisciplinary senior engineer, and I'd love to join the Development Seed Engineering team :)

links:
  - text: Resume
    href: /assets/nathan-selikoff-resume-development-seed.pdf
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
[About Me](#responses){:.mr-2}
[Projects](#projects){:.mr-2}
[Links](#links)

{:.font-mono .text-accent .text-xl .lg:text-2xl .leading-tight .mb-4 id="responses"}
## About Me

{:.text-indigo-200 .text-lg .lg:text-xl .mb-4}
### Tell us about yourself and what you’d love to work on at Development Seed:

I come from an interdisciplinary art + tech background and have had quite a nontraditional career. My mom is an artist and my dad is a software engineer so I've grown up around both influences, which has benefited me greatly. Over the past 20+ years, I've pursued opportunities that engage both the left and right sides of my brain as I've worked with small businesses, non-profits, research labs, and advertising agencies as a developer, designer and entrepreneur.

Three years ago, I started a social enterprise called Omnimodal to address the need for high-quality, real-time data for public transit and other mobility systems. As CTO, I've been designing and building a geospatial data platform from the ground up. Part of the challenge has been to engineer reliable and scalable cloud-based data pipelines that can fetch and archive mobility data from public transit, shared mobility (bicycles and scooters), and parking APIs - and transform, cache, and make the data available to an intuitive web-based analytics dashboard.

Even more so than technology, a central challenge for Omnimodal has been navigating the organizational complexity of public and semi-public agencies; our end users are the internal staff at cities, counties, Metropolitan Planning Organizations, and Departments of Transportation. I'm particularly proud of how we have been able to incorporate clickable prototypes, user testing, and other principles of design thinking and agile software development to directly involve the staff in the development process.

I'm now moving away from day to day responsibilities at my startup, and am seeking the right team for the next stage of my career. I have been keeping an eye on Development Seed since the late 2000s, when you were innovating in the Drupal ecosystem - and have been impressed at your longevity as a company, engagement with the public sector, and commitment to applying your time and effort towards moving the needle on the world's toughest challenges. I am strongly aligned with those values and would love to leverage my experience and perspective to make significant contributions to Development Seed's Earth Observation data platform.

My background, especially in the past few years working on real-time geospatial data pipelines, visualization, and web-based services and tools, make me a great candidate for both the Data Engineer and Cloud Engineer positions currently open. I'd love to work on tools that help scientists intuitively explore and leverage data, and ultimately lead to the kinds of rapid insights humanity needs to navigate what's ahead in terms of climate change and other unexpected challenges that will strain (and are currently straining) our resilience. Also, I would love to play and experiment with the team on new ideas, so I'm excited that you've dedicated "The Greenhouse" to such activities.

There's a lot more I'd love to share, but I'll leave you with one final tidbit: my wife and I [rode bicycles 1000 miles across the US in the summer of 2009](https://www.youtube.com/watch?v=fKYUrGmXqIk).

{:.font-mono .text-accent .text-xl .lg:text-2xl .leading-tight .mt-8 .mb-4 id="projects"}
## Projects and previous work

{:.text-indigo-200 .text-lg .lg:text-xl .mb-4}
### Mobilize

![Omnimodal Mobilize Analytics Dashboard](/assets/img/jobs/omnimodal-mobilize-geospatial-analytics-dashboard.png)

![Omnimodal Realtime Data Flow](/assets/img/jobs/omnimodal-realtime-data-flow-720w.png)

{:.text-lg .text-indigo-100}
Context

In the past three years, as CTO and co-founder of a startup, I've been designing and building a geospatial data platform from the ground up.

To accomplish this, I've utilized and experimented with geospatial visualization APIs (Google Maps, Mapbox, turf.js, d3.js), pub/sub services (PubNub), streaming event pipelines (AWS Kinesis, Lambda), microservices (node.js), caching layers (Redis, AWS CloudFront), and more traditional web app frontends (Ember.js) and backends (Ruby on Rails, Postgresql). I've also dockerized legacy Java applications to facilitate deployment on AWS ECS/EC2, for particular needs in the data pipeline.

Part of the challenge has been to engineer reliable and scalable cloud-based data pipelines that can fetch and archive mobility data from public transit, shared mobility (bicycles and scooters), and parking APIs - and transform, cache, and make the data available to an intuitive web-based analytics dashboard.

Some of the third-party APIs we integrate with are based on open data standards (yay!) and some of them are not. Some endpoints are reliable; many are not. We know some of the ways that we want to use the data now, but there will be future uses that we haven't foreseen. To address these challenges, I designed and built a node.js microservice called `scribe`, and a Ruby on Rails + Sidekiq + Redis module called `librarian`.

Originally its own app, the Librarian registers real-time and static data feeds in a database, with metadata that describes where to fetch them from, how often to fetch them, and the last time they were fetched and archived. When the Librarian is run, a clock process will ping all registered feeds according to their configuration attributes, and when the time is right, will ask the Scribe to fetch and archive the feed in raw form into AWS S3, by POSTing with the appropriate info. If successful, the Scribe will respond with `201 Created` and various metadata.

This system is in production with 14 data feeds for the City of Orlando, but is designed to be able to scale up to hundreds of cities and thousands of data feeds.

{:.text-lg .text-indigo-100}
Links

The code is not open source, but I've extracted the READMEs for a little more context and would be happy to walk you through the system in further detail.

* [README for `scribe` and `librarian`](https://gist.github.com/nselikoff/77f00f055832d99543190fcaac6aa47c)

{:.text-indigo-200 .text-lg .lg:text-xl .mt-8 .mb-4}
### Filaments

![Filaments](/assets/img/jobs/filaments_0.jpg)

{:.text-lg .text-indigo-100}
Context

In 2014, I spent 6 days with about 200 students at Stone Middle School in Melbourne, Florida, teaching them the basics of making art with code. On the first day, I introduced the concept of "computational creation," or "creative coding," to the students, along with a discussion about using a sketchbook / design notebook in the creative process. Following that, we spend a few days with both Scratch and Processing, two programming environments accessible to students.

With Processing, we focused on abstract, algorithmic art and code based on drawing simple shapes. We discussed drawing within a coordinate system, how color works on a computer versus with paint (additive vs subtractive), the draw loop, variables, and basic interactivity. I shared the "chaos game", a stochastic method for generating a Sierpinski triangle, and talked about algorithmic drawing, giving them an example of mine called Filaments that many of them remixed.

{:.text-lg .text-indigo-100}
Links

* [Filaments on Khan Academy](https://www.khanacademy.org/computer-programming/filaments/2396343163) (make sure to check out the remixes!)
* [My original Filaments blog post](https://nathanselikoff.com/698/code-sketches/filaments)
* [Full writeup of my teaching artist residency](https://nathanselikoff.com/2316/events/teaching-artist-residency-stone-middle-school)
