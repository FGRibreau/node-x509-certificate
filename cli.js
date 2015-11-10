#!/usr/bin/env node

const host = String(last(process.argv));

if(!host.includes(':')){
  console.error('usage: x509-certificate hostname:port');
  process.exit(1);
}

const pair = host.split(':');
const hostname = pair[0];
const port = pair[1];

require('./')(port, hostname, function(err, certificate){
  if(err){
    throw err;
  }
  console.log(certificate);
})


function last(arr){
  return arr[arr.length-1];
}
