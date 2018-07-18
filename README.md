# TicTacToeGame
Tic-tac-toe game, created in javascript

## Development
* Prerequisites:
  * Run `npm install` to install dependencies
* To run the app locally:
  * `npm run dev` to create dev js bundle and start watching all related js files
  * Open `dist/index.html` file
* To run unit tests locally:
  * `npm test` - to run tests once
  * `npm run test-watch` to run tests with watching files

## Continuous Integration:
Check travis pipeline:
[![Build Status](https://travis-ci.org/AgnieszkaKurek/TicTacToeGame.svg?branch=master)](https://travis-ci.org/AgnieszkaKurek/TicTacToeGame)

## Continuous Delivery:
Application is automaticaly deployed into https://agnieszkakurek.github.io/TicTacToeGame on every push to master by [Travis](https://travis-ci.org/AgnieszkaKurek/TicTacToeGame)
In order to get the content of the deployed files you may:
* run `npm run prod` locally and check dist folder
* check `gh-pages` branch

## Others

If you use Visual Studio Code, it is advised to install the following extensions:
* https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint