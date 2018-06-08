module.exports = function (config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine'],
      files: [
        'src/ticTacToeGameStatus.js',
        'src/tictTacToeGameScore.js',
        'src/ticTacToeGamePlayers.js',
        'src/ticTacToeCombination.js',
        'src/ticTacToeGame.js',
        'tests/ticTacToeGameSpec.js',
        'tests/ticTacToeGamesScoreSpec.js',
        'tests/ticTacToeGameCombinationSpec.js'
      ],
      client: {
        clearContext: false
      },
      exclude: [],
      reporters: ['progress', 'kjhtml'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['Chrome'],
      singleRun: false,
      concurrency: Infinity,
    })
  }
