# TicTacToeGame
Tic-tac-toe game, created in javascript

## Development
* Prerequisites:
  * run `npm install` to install dependencies
* To run the app locally:
  * run `npm run dev` to create dev js bundle and start watching all related js files
  * open `dist/index.html` file
* To run unit tests locally:
  * run `npm test` to run tests once
  * run `npm run test-watch` to run tests with watching files

## Continuous Integration
Check travis pipeline:
[![Build Status](https://travis-ci.org/AgnieszkaKurek/TicTacToeGame.svg?branch=master)](https://travis-ci.org/AgnieszkaKurek/TicTacToeGame)

## Continuous Delivery
Application is automaticaly deployed into https://agnieszkakurek.github.io/TicTacToeGame on every push to master by [Travis pipeline](https://travis-ci.org/AgnieszkaKurek/TicTacToeGame)
In order to get the content of the deployed files you may:
* run `npm run prod` locally and check dist folder
* check [gh-pages branch](https://github.com/AgnieszkaKurek/TicTacToeGame/tree/gh-pages)

## Others

If you use Visual Studio Code, it is advised to install the following extensions:
* https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

In a separate branch called `feature/34-addJqueryClient` there is a jquery version of this game. It produces heavier js output file, so it is not merged.
