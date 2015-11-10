# node-x509-certificate
Retrieve the public TLS certificate in x509 format from a distant host

# npm

```shell
npm install x509-certificate --save
```


# getCertificate(port, host, callback)

```js
getCertificate(443, 'redsmin.com', (err, certificate) => {
  if(err){
    throw err;
  }

  console.log(certificate); // x509 certificate
});
```

- `host`: host the client should connect to
- `port`: port the client should connect to
- `callback(err: {Error,Null}, certificate: String)`

# getCertificate(port, host, options, callback)

```js

getCertificate(443, 'my-very-own-sni-host.com', {
  rejectUnauthorized: true,
  servername: 'my-very-own-sni-host.com'
}, (err, certificate) => {
  if(err){
    throw err;
  }

  console.log(certificate); // x509 certificate
});
```

- `option` object is the same as `tls.connect` option object
