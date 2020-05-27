# XSFR - Cross - Site - Request - Forgery

Attacker tricks user's browser into issuing request, website executes it

## How to prevent?

- Checking the http Referer Header to see if the request comes from an authorized page
- Use synchronizer token pattern where a token for each request is embedded by the web application in all html forms and verified on the server side
- Logoff immediately after using a web application
- Do not allow browser to save username/password and do not allow web sites to remember user login
- Do not use the same browser to access sensitive web sites and to surf the web freely
