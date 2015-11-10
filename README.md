# node-x509-certificate
Retrieve the public TLS certificate in x509 format from a distant host

# npm

```shell
npm install x509-certificate --save
```

# usage

### getCertificate(port, host, callback)

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

### getCertificate(port, host, options, callback)

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

# cli

```bash
> x509-certificate redsmin.com:443

-----BEGIN CERTIFICATE-----
MIIGTzCCBTegAwIBAgIRAKxlFKZ9eTAZfc5c8P1qvq4wDQYJKoZIhvcNAQELBQAw
gZAxCzAJBgNVBAYTAkdCMRswGQYDVQQIExJHcmVhdGVyIE1hbmNoZXN0ZXIxEDAO
BgNVBAcTB1NhbGZvcmQxGjAYBgNVBAoTEUNPTU9ETyBDQSBMaW1pdGVkMTYwNAYD
VQQDEy1DT01PRE8gUlNBIERvbWFpbiBWYWxpZGF0aW9uIFNlY3VyZSBTZXJ2ZXIg
Q0EwHhcNMTUwNTE4MDAwMDAwWhcNMTYwOTA1MjM1OTU5WjBaMSEwHwYDVQQLExhE
b21haW4gQ29udHJvbCBWYWxpZGF0ZWQxHTAbBgNVBAsTFFBvc2l0aXZlU1NMIFdp
bGRjYXJkMRYwFAYDVQQDFA0qLnJlZHNtaW4uY29tMIICIjANBgkqhkiG9w0BAQEF
AAOCAg8AMIICCgKCAgEA1hCv9a75urP4TQpMAyyqatxraT5dnkbNfgnio/oekqNN
wNLfWzJDFVCatPrlXLFsTYjP5fAesnibGKP9rT6c6Tx5izFbloiV72R8Cay3pQjo
l0sVZBaYJhd9MWvlQN/EaLggiRvf4ksucEhuvvCWRXVuWj0D3YWTvicUUcrMCA/0
wmmbpSANglKyQdn8PZIPfuzcj69PGtXs+/8hTuIngnaCcVWp+RkyIYyuKiNTU1zV
orFCjFcb61hkcNTvBjPcI7r75bL7BUdNvvvKJ8G2w7TnIGrWVJNh/cgovPCoB/HG
AO3aiRqICN7UJ0h7HCq9l36o4Opch8EV6HHSWgXcNBwDR4Us9IQFXhgQgpyhgLeW
57vWt7jK+04TK3Ljd9lf8Fn79L73BpANnTVopU6q7fU396zz8Y2MkFH2eNMSng5r
fvBf7rg5PKcNkeDiIWzK5G+Ubl1vOjJ91vvhAwM6PYTkG1Y8bC2b8SrI9+OqPKSO
xWjRW5bT2rpUo5F7zu1x8P84WDQvePxSQ51HJouSsM9q8mRqAf5tm+2QqNx71rMh
0ilugZ8klX585+lnyqUYDdaqxRdl9TGVllZw2Bhy3vCdPvcwgJOL8PFkn5VBDVqw
KUvE1MV4zkTBxbLjywBRooMZmq7fkbt9AbHZ7roPTGiQQa6zhHL5kj6212SL76sC
AwEAAaOCAdcwggHTMB8GA1UdIwQYMBaAFJCvajqUWgvYkOoSVnPfQ7Q6KNrnMB0G
A1UdDgQWBBTVCHwtAkK4UMqKIAOEyAaYssddUzAOBgNVHQ8BAf8EBAMCBaAwDAYD
VR0TAQH/BAIwADAdBgNVHSUEFjAUBggrBgEFBQcDAQYIKwYBBQUHAwIwTwYDVR0g
BEgwRjA6BgsrBgEEAbIxAQICBzArMCkGCCsGAQUFBwIBFh1odHRwczovL3NlY3Vy
ZS5jb21vZG8uY29tL0NQUzAIBgZngQwBAgEwVAYDVR0fBE0wSzBJoEegRYZDaHR0
cDovL2NybC5jb21vZG9jYS5jb20vQ09NT0RPUlNBRG9tYWluVmFsaWRhdGlvblNl
Y3VyZVNlcnZlckNBLmNybDCBhQYIKwYBBQUHAQEEeTB3ME8GCCsGAQUFBzAChkNo
dHRwOi8vY3J0LmNvbW9kb2NhLmNvbS9DT01PRE9SU0FEb21haW5WYWxpZGF0aW9u
U2VjdXJlU2VydmVyQ0EuY3J0MCQGCCsGAQUFBzABhhhodHRwOi8vb2NzcC5jb21v
ZG9jYS5jb20wJQYDVR0RBB4wHIINKi5yZWRzbWluLmNvbYILcmVkc21pbi5jb20w
DQYJKoZIhvcNAQELBQADggEBAAVB/CJ6NaK3hqod+UDVKajrgB/IjCOCDnOqnQDy
kQqqsEHxL+OvmciNjAtMIl4CKruxiJ5v/mpQlalZaoFQ9h/Ioel2YfDXRJ3GRzrT
zZWjZBF8toKA/2yHaDq25o6Ts/RvksWm6lc2JZC1NkkPrkY7VR/iaGhHOjlidxr7
p692N+sB1t9d013Q48jSheoBeTry9DjdyPwph+Udu5ky6t2J7u08mZH79Q13Lu+E
yeguHFu52jw40MG1i/t+VKHr0mBIgzIkg+VZTKhuLT9Er5dCd5MEQZLohDl3uyLO
NXu4AQtPaYqjK+GK9NPqmEnotx5WFf7V8TDX/qHdRx/xAtY=
-----END CERTIFICATE-----
```
