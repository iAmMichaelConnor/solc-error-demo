import solc from 'solc';

/**
  Compiles a solidity file.
  @param {string} solidityFile - a contract, formatted as a string.
  @returns {Object} ast.
*/
const compile = solidityFile => {
  const params = {
    language: 'Solidity',
    sources: {
      input: {
        content: solidityFile,
      },
    },
    settings: {
      outputSelection: {
        '*': {
          '*': [],
          '': ['ast'],
        },
      },
    },
  };

  const compiled = JSON.parse(solc.compile(JSON.stringify(params)));

  const { ast } = compiled.sources.input;

  return ast;
};

// a basic solidity contract
const solidityFile = '// SPDX-License-Identifier: CC0\npragma solidity ^0.7.0;\ncontract Assign {\nuint256 private a;\nfunction assign(uint256 value) public {\na = value;\n}\n}';

// simulates our application 'doing other stuff'...
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  const ast = compile(solidityFile)
  console.log(ast); // showing that solc works
  await sleep(4000); // let's pretend our application went on to do other stuff for a few seconds...
  throw new Error(`Here's my app's error`); // this will be wrapped by solc's RuntimeError, amidst loads of console logging of the entire node_modules/solc/soljson.js file.
}

run();
