# Creative Coding Portfolio Site

This site is built using [Jekyll](https://jekyllrb.com) and [Tailwind CSS](https://tailwindcss.com) and deployed to [awakeningstudios.com](https://awakeningstudios.com) via GitHub Pages.

## Prerequisites
* Ruby (recommend rbenv on OS X) and bundler
* Node (recommend nodenv on OS X)
* yarn

## Install
* `gem install jekyll`
* `git checkout [this repository]`
* `cd [checked out folder]`
* `bundle install`
* `yarn`

## Develop
* `jekyll serve --livereload`

## Deploy

Assuming GitHub Pages is setup and you're on the master branch, `git push` will do it!

## Wishlist
* when "closing" project page, link to proper scroll position on index (vertical and horizontal within portfolio items)
* lazy load images
* scroll L/R in thumbs should "settle" on an item nicely left-aligned
* swipe L/R on mobile/touch should advance one portfolio item at a time
