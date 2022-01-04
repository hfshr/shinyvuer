# shinyvuer

<!-- badges: start -->

![stability-wip](https://img.shields.io/badge/stability-work_in_progress-lightgrey.svg)

<!-- badges: end -->

A quick demo of using Shiny and Vue together. Inspired by this [shiny dev series episode](https://shinydevseries.com/post/episode-26-movievuer1/) (from which I ~~copied~~ borrowed more than a few ideas).

## Try it out

View the app on shinyapps.io here:

[https://harryfish.shinyapps.io/shinyvuer/](https://harryfish.shinyapps.io/shinyvuer/)

You can install app with:

```r
# install.packages("pak")
pak::pak("hfshr/shinyvuer")
```

Start the app with:

```r
shinyvuer::run_app()
```

## How?

Lots of great tools made by very clever people -

- [{golem}](https://github.com/ThinkR-open/golem) by [\@ColinFay](https://github.com/ColinFay)
- [{packer}](https://github.com/JohnCoene/packer) by [\@JohnCoene](https://github.com/JohnCoene)
- [this app](https://github.com/FrissAnalytics/shiny-vue-r) by [\@timelyportfolio](https://github.com/timelyportfolio) and [\@FrissAnalytics](https://github.com/FrissAnalytics)
- [vue](https://vuejs.org/v2/guide/)
- [vuetify](https://vuetifyjs.com/en/)

## Develop

Edit files in `srcjs/` directory and run `packer::bundle()` followed by `golem::run_dev()` to view changes.
