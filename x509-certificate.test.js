'use strict';
const fix = require('./x509-certificate.test.fixtures');
const t = require('chai').assert;
const getCertificate = require('./');

describe('x509-certificate', () => {

  describe('bufferTox509', () => {
    it('should convert a buffer to a certificate', () => {
      t.strictEqual(getCertificate.bufferTox509(fix.buffer), fix.certificate);
    });
  });

  it('should retrieve a certificate from https://redsmin.com', (done) => {
    getCertificate(443, 'redsmin.com', (err, certificate) => {
      t.strictEqual(err, null);
      t.strictEqual(certificate, '-----BEGIN CERTIFICATE-----\nMIIGTzCCBTegAwIBAgIRAKxlFKZ9eTAZfc5c8P1qvq4wDQYJKoZIhvcNAQELBQAw\ngZAxCzAJBgNVBAYTAkdCMRswGQYDVQQIExJHcmVhdGVyIE1hbmNoZXN0ZXIxEDAO\nBgNVBAcTB1NhbGZvcmQxGjAYBgNVBAoTEUNPTU9ETyBDQSBMaW1pdGVkMTYwNAYD\nVQQDEy1DT01PRE8gUlNBIERvbWFpbiBWYWxpZGF0aW9uIFNlY3VyZSBTZXJ2ZXIg\nQ0EwHhcNMTUwNTE4MDAwMDAwWhcNMTYwOTA1MjM1OTU5WjBaMSEwHwYDVQQLExhE\nb21haW4gQ29udHJvbCBWYWxpZGF0ZWQxHTAbBgNVBAsTFFBvc2l0aXZlU1NMIFdp\nbGRjYXJkMRYwFAYDVQQDFA0qLnJlZHNtaW4uY29tMIICIjANBgkqhkiG9w0BAQEF\nAAOCAg8AMIICCgKCAgEA1hCv9a75urP4TQpMAyyqatxraT5dnkbNfgnio/oekqNN\nwNLfWzJDFVCatPrlXLFsTYjP5fAesnibGKP9rT6c6Tx5izFbloiV72R8Cay3pQjo\nl0sVZBaYJhd9MWvlQN/EaLggiRvf4ksucEhuvvCWRXVuWj0D3YWTvicUUcrMCA/0\nwmmbpSANglKyQdn8PZIPfuzcj69PGtXs+/8hTuIngnaCcVWp+RkyIYyuKiNTU1zV\norFCjFcb61hkcNTvBjPcI7r75bL7BUdNvvvKJ8G2w7TnIGrWVJNh/cgovPCoB/HG\nAO3aiRqICN7UJ0h7HCq9l36o4Opch8EV6HHSWgXcNBwDR4Us9IQFXhgQgpyhgLeW\n57vWt7jK+04TK3Ljd9lf8Fn79L73BpANnTVopU6q7fU396zz8Y2MkFH2eNMSng5r\nfvBf7rg5PKcNkeDiIWzK5G+Ubl1vOjJ91vvhAwM6PYTkG1Y8bC2b8SrI9+OqPKSO\nxWjRW5bT2rpUo5F7zu1x8P84WDQvePxSQ51HJouSsM9q8mRqAf5tm+2QqNx71rMh\n0ilugZ8klX585+lnyqUYDdaqxRdl9TGVllZw2Bhy3vCdPvcwgJOL8PFkn5VBDVqw\nKUvE1MV4zkTBxbLjywBRooMZmq7fkbt9AbHZ7roPTGiQQa6zhHL5kj6212SL76sC\nAwEAAaOCAdcwggHTMB8GA1UdIwQYMBaAFJCvajqUWgvYkOoSVnPfQ7Q6KNrnMB0G\nA1UdDgQWBBTVCHwtAkK4UMqKIAOEyAaYssddUzAOBgNVHQ8BAf8EBAMCBaAwDAYD\nVR0TAQH/BAIwADAdBgNVHSUEFjAUBggrBgEFBQcDAQYIKwYBBQUHAwIwTwYDVR0g\nBEgwRjA6BgsrBgEEAbIxAQICBzArMCkGCCsGAQUFBwIBFh1odHRwczovL3NlY3Vy\nZS5jb21vZG8uY29tL0NQUzAIBgZngQwBAgEwVAYDVR0fBE0wSzBJoEegRYZDaHR0\ncDovL2NybC5jb21vZG9jYS5jb20vQ09NT0RPUlNBRG9tYWluVmFsaWRhdGlvblNl\nY3VyZVNlcnZlckNBLmNybDCBhQYIKwYBBQUHAQEEeTB3ME8GCCsGAQUFBzAChkNo\ndHRwOi8vY3J0LmNvbW9kb2NhLmNvbS9DT01PRE9SU0FEb21haW5WYWxpZGF0aW9u\nU2VjdXJlU2VydmVyQ0EuY3J0MCQGCCsGAQUFBzABhhhodHRwOi8vb2NzcC5jb21v\nZG9jYS5jb20wJQYDVR0RBB4wHIINKi5yZWRzbWluLmNvbYILcmVkc21pbi5jb20w\nDQYJKoZIhvcNAQELBQADggEBAAVB/CJ6NaK3hqod+UDVKajrgB/IjCOCDnOqnQDy\nkQqqsEHxL+OvmciNjAtMIl4CKruxiJ5v/mpQlalZaoFQ9h/Ioel2YfDXRJ3GRzrT\nzZWjZBF8toKA/2yHaDq25o6Ts/RvksWm6lc2JZC1NkkPrkY7VR/iaGhHOjlidxr7\np692N+sB1t9d013Q48jSheoBeTry9DjdyPwph+Udu5ky6t2J7u08mZH79Q13Lu+E\nyeguHFu52jw40MG1i/t+VKHr0mBIgzIkg+VZTKhuLT9Er5dCd5MEQZLohDl3uyLO\nNXu4AQtPaYqjK+GK9NPqmEnotx5WFf7V8TDX/qHdRx/xAtY=\n-----END CERTIFICATE-----');
      done();
    });
  });
});
