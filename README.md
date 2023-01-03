# Spotify Playlist Maker

## Requirements

- `React.js 18`
- `Node.js ^16.10`. Need to change your version?
  - [Windows](https://github.com/coreybutler/nvm-windows)
  - [Mac](https://github.com/tj/n)
- Firebase (database, auth, hosting, and storage).

## Getting Started

get credentials from spotify and firebase
We are using "yarn" instead of "npm" in this project.

1. Install yarn. `npm install -g yarn`
2. Install all node modules. `yarn install`
3. Make a copy of `.env.local.example` and rename it to `.env.local`.
4. Boot up the server. `yarn start`

### Hosting

1. Go to the official Firebase website and set up a project.
2. Enable Firebase Hosting by going into the hosting section under Build dropdown.
3. Inside your repo run the following commands (one at a time):
4. `npm install -g firebase-tools`
5. `firebase login`
6. `firebase init`
7. `yarn build` (_remember to always build before deploying your code to production_).
8. `firebase deploy`
9. If you run into trouble take a look at: https://www.geeksforgeeks.org/how-to-deploy-react-project-on-firebase/

## Sprint Progress

Go to the [milestones tab](../../milestone/1) to track your progress, it is important that when you complete an issue you mark it as closed.

### Public URL

[Replace me with the link to your app's URL](https://spotify-playlist-maker-4e821.web.app/)
