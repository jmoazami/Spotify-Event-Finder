# Spotify-Event-Finder
This project, inspired by the work of Developer [Brittany Chiang](https://www.newline.co/courses/build-a-spotify-connected-app), is meant to demonstrate my ability to extract personalized data from Spotify using the Spotify Developer API. Currently a work in progress, it will soon use this data and the TicketMaster API to find local concerts near you based off your favorite music.


This app was built using React and Node.js. Making using of the Spotify Developer API, this app makes use of the OAuth2 Protocol to acquire an access token from Spotify to extract user data. This data is then displayed on the webpage elegantly and cleanly.

Moving forward, the app will use the extracted data to "plug in" information to various endpoints provided by the TicketMaster API, as to find events and concerts of interests in a around a user's location based on their music interests.

# Getting Started

1. Register a Spotify App in your [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/) and add `http://localhost:8888/callback` as a Redirect URI in the app settings.

2. Create a `.env` file at the root of the project based on `.env.example` and add your unique `CLIENT_ID` and `CLIENT_SECRET` from the Spotify dashboard. Note that '.env.example' also includes an API key for TicketMaster--leave this blank for now as this functionality has not been implemented yet.

3. Ensure [nvm](https://github.com/nvm-sh/nvm) and [npm](https://www.npmjs.com/) are installed globally.

4. Install the correct version of Node.

    ```shell
    nvm install
    ```

5. Install dependencies.

    ```shell
    npm install
    ```

6. Run the React app on <http://localhost:3000> and the Node server on <http://localhost:8888>.

    ```shell
    npm start
    ```
