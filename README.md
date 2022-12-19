# README
This is our simulated social-media system, for use as a tool in user study measuring how visual trends can impact users. 
Built using:
[Express](https://expressjs.com), [Create React App](https://github.com/facebook/create-react-app), and hosted via [Render](https://render.com).
This app is deployed at [https://trend-study-tool.onrender.com](https://trend-study-tool.onrender.com).

## Deployment

  * Build Command: `yarn` (if you haven't yet installed yarn: https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
  * Start Command: `npm start`

The tool will be immediately live @ [Port 3000](http://localhost:3000/), and at the[https://trend-study-tool.onrender.com](https://trend-study-tool.onrender.com) URL as soon as the build finishes. (It should update after each new commit, but this can take a while. You may have to ask Shm to log-in and manually deploy the latest commit.)

## Development 

* Edit the content of the main page via `src/App.js` and the style via `src/App.css`
* Create and edit components in: `src/components/<name of component>` ex: `src/components/post/` contains `Post.js` and `Post.css` .


### Credits

Borrows liberally from the following tutorials:
https://www.makeuseof.com/upload-files-to-firebase-using-reactjs/ 
https://ordinarycoders.com/blog/article/instagram-clone-reactjs
https://www.geeksforgeeks.org/how-to-push-data-into-firebase-realtime-database-using-reactjs/