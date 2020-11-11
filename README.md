# ✨ Terraria Dedicated Server On NodeJS
- Run Terraria servers (or any other game servers) on NodeJS ⚽
- Set up your config file and start the server 💡

# ❓ Idea
We can't run ".exe" files on sites like [Heroku](http://heroku.com/) or [Glitch](https://glitch.com/). But we can do anything with [child_process](https://nodejs.org/api/child_process.html), a nice thing that NodeJS gives us. Here I give an example of "Terraria", a game I play frequently, but you can set up a server for any game you want. The working logic of the system is as follows: First, we download the server files with the "request" module and build these files with the necessary commands. (You can use [child_process](https://nodejs.org/api/child_process.html) for this operation too.) I call this phase "build". When the "build" phase is over, we spawn the ".exe" extension server file we downloaded with [child_process](https://nodejs.org/api/child_process.html). And I call this phase "start". At this phase, your server is now up and running.

# 📦 Build and Running
- Run `yarn server:build` or `npm run server:build` to build and configure server files. Make sure you use this command only once. Because every time you use this command, your old server files are deleted. 🏗️
- Run `yarn server:start` or `npm run server:start` to start server 🎬

# 🔗 Contributing
Feel free to use GitHub's feautres. ✨
