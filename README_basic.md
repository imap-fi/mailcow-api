![npm](https://ico.y.gy/npm/dm/mailcow-api?style=flat-square&logo=npm)
![NPM](https://ico.y.gy/npm/l/mailcow-api?style=flat-square)
[![Snyk Vulnerabilities for npm package](https://ico.y.gy/snyk/vulnerabilities/npm/mailcow-api?style=flat-square&logo=snyk)](https://snyk.io/test/npm/mailcow-api)
[![Website](https://ico.y.gy/website?down_color=red&down_message=offline&label=documentation&up_color=success&up_message=online&url=https%3A%2F%2Fdoc.y.gy%2Fmailcow-api&style=flat-square)](https://doc.y.gy/mailcow-api/)
[![Website](https://ico.y.gy/website?down_color=red&down_message=offline&label=repository&up_color=success&up_message=online&url=https%3A%2F%2Fgit.y.gy%2Ffirstdorsal%2Fmailcow-api&style=flat-square&logo=gitlab)](https://git.y.gy/firstdorsal/mailcow-api/)

# Install
```
npm i mailcow-api
```

# Basic Example
```js
(async () => {
    //get global variables
    require('dotenv').config();
    
    //import the api client module
    const {
        MailcowApiClient
    } = require("mailcow-api")

    //create new mailcow api client with endpoint/baseurl and the api key
    const mcc = new MailcowApiClient(process.env.MAILCOW_API_BASEURL, process.env.MAILCOW_API_KEY);

    //get all domain on mailcow server
    console.log(await mcc.getDomain());
})();
```

## What is dotenv?
The line "require('dotenv').config();" gets the contents of a file called ".env" in which you should store your global and secret variables.

### 1. Install the module "dotenv" with
```
npm i dotenv
```
### 2. Create a file named ".env" in your applications root directory

*.env*
```c
MAILCOW_API_KEY='YOUR MAILCOW API KEY'
MAILCOW_API_BASEURL='https://mail.example.com' //no trailing slashes
```
### 3. Use your secret variables 
```
process.env.MAILCOW_API_BASEURL
process.env.MAILCOW_API_KEY
```

# Where to get the API key?
### 1. Open your mailcow UI and login as admin


### 1.1 Are you using two factor authentication for your admin account?
If not: **Do it now!** It's easy! For Android you can use the andOTP app.
andOTP can be used for 2FA with many services and is way better then the Google Authenticator app.

### 2. Scroll to and expand the API section

### 3. Insert the IP you want to accesss the API from or disable the API check

### 4. Tick the checkbox "Activate API" and save the settings

### 5. Copy your API key from the field above


# Documentation
**[Here](https://doc.y.gy/mailcow-api/)**

# Need help or missing a feature?
Feel free to contact me via [xl9jthv_7bvgakv9o9wg0jabn2ylm91xxrzzgt0e@y.gy](mailto:xl9jthv_7bvgakv9o9wg0jabn2ylm91xxrzzgt0e@y.gy) in english or german

## Mailcow API Documentation
[Apiary](https://mailcow.docs.apiary.io/)

[Swagger](https://demo.mailcow.email/api/)

## Links
[NPM](https://www.npmjs.com/package/mailcow-api)

[Documentation](https://doc.y.gy/mailcow-api/)

[Code](https://git.y.gy/firstdorsal/mailcow-api)



