# HTTPS/HSTS

## What is HTTPS?

- Hypertext transfer protocol (HTTP) is the primary protocol used to send data between a web browser and a website.
- Hypertext transfer protocol secure (HTTPS) is HTTP with a layer of encryption (TLS/SSL). It ensures secure communication on the internet.
- HTTPS encrypts the communication in order to increase security of data transfer, e.g. when transmitting sensitive data by logging into a bank account, email service, or health insurance provider.

## How does HTTPS work?

- User connects to a webpage, server will send over its SSL certificate which contains the public key necessary to start the secure session
- It's called SSL/TLS handshake: Series of back-and-forth communications used to establish a secure connection.
- HTTPS uses an encryption protocol to encrypt communications called Transport Layer Security (TLS).
- Formerly known as Secure Sockets Layer (SSL).
- Asymmetric public key infrastructure: Using two different keys to encrypt communications between two parties:

### Private key

- Controlled by the owner of a website and it’s kept privately.
- The key is hosted on a web server
- Is used to decrypt information encrypted by the public key.

### Public key

- Available to everyone who wants to communicate with the server in a secure manner.
- Information that’s encrypted by the public key can only be decrypted by the private key.

## Importance of HTTPS

- Information sent over by regular HTTP is broken into packets of data that can be easily “sniffed”
- HTTP communicates in plain text. Hence, a sniffer can easily read the content.
- Vulnerable to man-in the-middle attacks.
- With HTTPS, traffic is encrypted
- Packets can be sniffed but the content will contain nonsensical characters.

### Before encryption (HTTP):

Readable Content

### After encryption (HTTPS):

LjqweOZUGIITMsdfg0IRyiEhVsdfgpa6VnKyExMiEgNver

## HTTP Strict Transport Security (HSTS)

HSTS is a header which tells the browsers to stick with HTTPS and never visit the insecure HTTP version.

Website A wants data from API X. A is HTTPS, but API X with http

e.g. Strict-Transport-Security: max-age=5184000

## HTTPS Server on localhost with Node.js/Express.js

### Requirements:

- SSL Certificate
- Private Key
- Openssl

1. Create Keys and Cerificate

openssl req -x509 -newkey rsa:2048 -keyout private_keytmp.pem -out public_key.pem -days 365

2. Get Decrypted Keys

openssl rsa -in private_keytmp.pem -out private_key.pem
