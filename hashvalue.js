const crypto = require('crypto'),
hashes = crypto.getHashes();

const pwd = 'a3xpu#XY5',
hashPwd   = crypto.createHash('sha1')
 .update(pwd)
 .digest('hex');

console.log(hashPwd);