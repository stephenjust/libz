# libz
Simple Mad Libs style game in NodeJS

This game was written as a simple feature to be included in an email newsletter. It uses the Express JS
system to handle requests, and persists any submitted responses to mongodb. Most of the game's content is
generated client-side by javascript in a very sloppy fashion. There is no input validation on form submissions,
so anything that is sent is persisted to the database, making this code impractical to use for large public
websites.

Responses can be viewed at the `/responses/all` endpoint.

In order to edit the story used in this puzzle, you can modify `public/javascripts/global.js`.
