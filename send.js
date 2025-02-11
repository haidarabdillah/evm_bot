const fs = require('fs');
const { Web3 } = require('web3');
const jsonData = JSON.parse(fs.readFileSync('address.json', 'utf8'));
const web3 = new Web3('http://127.0.0.1:7545');

async function main() {
  const priveKey= jsonData[0].privateKey
  const sender = web3.eth.accounts.wallet.add(priveKey)[0];
  let balance = await web3.eth.getBalance(sender.address);
  console.log(sender)
  console.log(balance)
  await web3.eth
    .sendTransaction({
      from: sender.address,
      to: "0xF5DC9f2E3B72BF0c826c2964e5734684ac05f6E4",
      value: 10000,
    })
    .on('transactionHash', (transactionHash) => {
      console.log('Transaction Hash:', transactionHash);
    })
    .on('receipt', (receipt) => {
      console.log('Receipt:', receipt);
    })
    .on('confirmation', (confirmation) => {
      console.log('Confirmation:', confirmation);
      process.exit(0);
    })
    .on('error', (error) => {
      console.log('Error:', error);
      process.exit(1);
    });

  console.log(balance);
}
let randtime = Math.random() * (600000 - 60000) + 60000; // Minimal 1 menit, maksimal 10 menit
// await sleep(randtime);

jsonData.forEach((_data, index) => {
  // console.log(_data);
});


let sendTime = true;
setInterval(async () => {
  if (sendTime) {
    console.log("=========🔥🔥started send coin job🔥🔥============");
    const today = new Date();
    console.log(`Current Date and Time: ${today.toLocaleString()}`);
    sendTime = false;
    await main();
    sendTime = false;
    console.log("=========ended auto stake job============");
  }
}, 1);

