 ## Travel Mate Website 
This is Travel Mate website built using the the front end web tools. It uses the Webpack tools. The wepack tool used to create single page websites. 
The differnt goals of this project are:
<ul>
  <li>Html and css</li>
  <li>JavaScript</li>
  <li>Webpack Tool</li>
  <li>Express Server</li>
  <li>Using APIs and creating requests to external urls</li>
  <li>Service workers</li>
  </ul>
## Getting started
Install the npm on your root project directory.
`cd` into your new folder and run:
- `npm install`

## Setting up the API
There are three different APIs are used in this project.
<ul>
  <li><b>Geonome Api</b></li>
  This Api is used to fetch the lat and long of any city by using its name.<br>
  The url used for this API is:<br>
  <i>http://api.geonames.org/geoCodeAddressJSON?</i><br>
  You have to register on the Geonome API to get the API key and differnt end points you can target upon<br>
  <li><b>WeatherBit API</b></li><br>
    This API is used to fetch the weather forecast of location according to the lat and long of that location.
    <br>
    The url for this API is :<br>
    <i>https://api.weatherbit.io/v2.0/forecast/daily?</i><br>
    You have to register on the WeatherBit API to get the API key and differnt end points you can target upon<br>
  <li><b>Pixabay Api</b></li><br>
  This API is used to fetch the video and audio of a location by its name.<br>
  The url of this API is :<br>
  <i>https://pixabay.com/api/?key=</i><br>
  You have to register on the PixaBay API to get the API key and differnt end points you can target upon<br>  
</ul>
## Webpack Tool
<ul>
  <li>The step is to download the Webpack tool on your root folder.
  The command to domload the webpack tool is<br>
    <b>npm i webpack webpack-cli</b>
  </li>
 <li>
  Now we need to install the babel loader. This is used to load the js file from ES6 to vanilla js. This has to be done on the root folder.<br>
  <b>npm install -D babel-loader @babel/core @babel/preset-env webpack</b>
  See more documentation here:https://www.npmjs.com/package/babel-loader
 </li>
 <li>
  Now intall the Saas loader.This loader is used to import the css files
  <br>
  use this command as<br>
  npm install sass-loader node-sass webpack --save-dev<br>
  See documentaion here: https://www.npmjs.com/package/sass-loader<br>
 </li>
 <li>
  Now install file loader to load the assests into your dist files.
  <br>The command is:
  npm install file-loader --save-dev<br>
  See the documentaion here:
  https://www.npmjs.com/package/file-loader<br>
 </li>
  </ul>
## Jest Test
The jest Test is used to test your programs at the run time .The command to install the Jest Install is:
<br>
npm install --save-dev jest<br>
See more documentation here:https://jestjs.io/docs/en/getting-started.html
