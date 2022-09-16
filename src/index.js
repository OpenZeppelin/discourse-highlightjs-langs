const { solidity, yul } = require('highlightjs-solidity');
const { cairo } = require('highlightjs-cairo');

api.registerHighlightJSLanguage('solidity', solidity);
api.registerHighlightJSLanguage('yul', yul);
api.registerHighlightJSLanguage('cairo', cairo);
