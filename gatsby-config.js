const config = require("./config/config")
const plugins = require("./config/plugins")

module.exports = {
  siteMetadata: {
    title: `Chance The Hacker's Starter`,
    description: `A starter featuring Typescript, Sass, React Spring, React Waypoint and Google Analytics built in. Brought to you by the fine folks working hard at The Hacking Corp, working hard, so you don't have to!`,
    author: `@gatsbyjs`,
  },
  plugins,
}
