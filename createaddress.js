const web3 = require('web3')
const account = web3.eth.accounts.create();
const fs = require('fs');

const totalAccount= 10000
let arraydata = [];

for (let i = 0; i < totalAccount; i++) {
  const accountData = {
    address: account.address,
    privateKey: account.privateKey
  };
  arraydata.push(accountData);

}

fs.writeFileSync('address.json', JSON.stringify(arraydata, null, 2));
