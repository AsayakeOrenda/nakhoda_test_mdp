# nakhoda_test_mdp
Repositary contains files for recreation of test page.

Notes on Files:
There are three versions of the test recreation included in the repositary.

1.  Separated version: HTML, CSS and JS are set up in separate files. Open - Test2_html-separate.html
2.  Combined version: All html, css and js are within the same file. Open - Test3_all-in-one.html
3.  React App attempt version: All remaining files: 'public' and 'src' folders + package-lock.json and package.json files. Hopefully this provides the files needed for the react app version of the test.

Further notes on the react app version:
<br/>The react app was based off the original HTML/CSS version of the test-page. I've included comments within the app of any major changes made in order to convert it. I have also made comments within unfinished sections to discuss intended behaviour and/or problems encountered.

All react-app files which contain comments can be found in the 'src' folder. Complete list of files that include comments is as follows:

*  /src/script.js
*  /src/style.css
*  /src/App.js
*  /src/Header.js
*  /src/TabContentLayout.js
*  /src/ToggleSwitch.js


# App Installation Guide:
1.  Download all the files from git.
2.  In the root directory run npm install
3.  Run npm start.

The app should then start locally in the browser.

# Original Template Source:
The initial template react app was created using the default facebook react git repository which can be found here:
https://github.com/facebook/create-react-app

The initial template app was created following the standard instructions with the default name 'my-app' using:
1. npx create-react-app my-app
2. cd my-app
3. npm start

For further information please view the facebook react git repository.
