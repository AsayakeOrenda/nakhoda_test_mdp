# nakhoda_test_mdp
Repositary contains files for recreation of test page: https://raw.githubusercontent.com/llparaschiv/oneoff/0fbb44608d248876976c25fedd74a6a5df3fe267/t1.jpg

Notes on Files:
There are three versions of the test recreation included in the repositary.

1.  Separated version: HTML, CSS and JS are set up in separate files. Open - Test2_html-separate.html
2.  Combined version: All html, css and js are within the same file. Open - Test3_all-in-one.html
3.  React App attempt version: All remaining files: 'public' and 'src' folders + package-lock.json and package.json files. Hopefully provide the files needed for react app version of the test.

Further notes on react app version: The react app was based off the original HTML/CSS version of the test-page. I've included comments within the app of any mayjor changes. I have also made comments within unfinished sections to discuss intended behaviour and/or problems encountered.

All react-app files which contain comments can be found in the 'src' folder. Complete list of files that include comments is as follows:

*  /src/script.js
*  /src/style.css
*  /src/App.js
*  /src/Header.js
*  /src/TabContentLayout.js
*  /src/ToggleSwitch.js

The react app was created using default facebook react git repository which can be found here:
https://github.com/facebook/create-react-app

The app was created with the default name 'my-app' using:
1. npx create-react-app my-app
2. cd my-app
3. npm start
