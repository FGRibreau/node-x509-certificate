'use strict';
const tls = require('tls');

function bufferTox509(buffer) {
  // from https://github.com/yorkie/node-x509-builder
	if (typeof buffer !== 'string') {
		buffer = buffer.toString('base64');
	}
	var result = '-----BEGIN CERTIFICATE-----\n';
	var offset = 0;
	var len = buffer.length;
	while (offset < len) {
		result += buffer.slice(offset, offset + 64) + '\n';
		offset += 64;
	}
	return result + '-----END CERTIFICATE-----';
}

/**
 * Retrieve an x509 certificate
 * @param  {number} port
 * @param  {string} host
 * @param  {[object]} options 
 *
 * @param  {function} f(err, certificate)
 */
function getCertificate(port, host, options, f) {
	if (typeof options === 'function') {
		f = options;
		options = {};
	}

	const socket = tls.connect(port, host, options, function() {
		if (!socket.authorized) {
      return f(new x509UnauthorizedCertificateException());
		}

		var cert = socket.getPeerCertificate();
    f(null, bufferTox509(cert.raw));
	});
}

// Exceptions
function x509CertificateException(message, code) {
	Error.call(this, message);
	this.code = code;
}

function x509UnauthorizedCertificateException() {
	x509CertificateException.call(this, 'TLS connection was unauthorized', 'E_X509_CERTIFICATE_UNAUTHORIZED');
}


const expose = [bufferTox509, x509UnauthorizedCertificateException];

module.exports = getCertificate;

expose.forEach((f) => {
  getCertificate[f.name] = f;
});
