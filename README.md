# Solc error demo

Relates to this issue: https://github.com/ethereum/solc-js/issues/493

## Steps to reproduce:

- Clone the repo
- I'm using node version 12.18.2 (`node -v`)
- `npm i`
- `npm start` - this will run a test script *that has been  designed to intentionally fail with a huge amount of console logging*, so as to demonstrate the bug.
