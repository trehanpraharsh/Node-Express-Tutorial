const { createReadStream } = require("fs");

const stream = createReadStream(".content/big.txt");

//* default size of the buffer is 64kb
//* last buffer - remainder
//* highWaterMark - control size
//* const stream = createReadStream('./content/big.txt', {highWaterMark : 90000})
//* const stream = createReadStream('./content/big.txt', {encoding: 'utf-8})

stream.on("data", function (result) {
  console.log(result);
});
