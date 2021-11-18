# This is project of comicbooks store app.

The project uses javascript and consists of an Express server paired with Mongo database.

## Prerequisites

You will need the following installed on your system (globally):
* `node`;
* `npm`;
* `mongo`.

Then to pull in all the dependencies just run `npm install`.

## Project Structure

Client files are located into client directory.

Server files are stored in root directory which uses files found in:
* `controllers` - API handlers;
* `models` - Mongo models;
* `routes` - API Router and its versions;
* `middlewares` - Additional helpers for logging and queries;

The server entry is `/server.ts`.

### Development

* The backend server will be run through `npm run server` which uses `nodemon` and only reloads when backend files change.
