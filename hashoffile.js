const fs = require('fs')
const crypto = require('crypto'),
hashes = crypto.getHashes();

const len = 4096, 
pos = 0, offset =0,
file = './video.mp4',
buff = Buffer.alloc(len);

fs.open(file, 'r', (err, fd) => {
 fs.read(fd, buff, offset, len, pos, (err, bytes, buff) => {
 const hash = crypto
 .createHash('whirlpool')
 .update(buff)
 .digest('hex');
 console.log(hash);
});
});