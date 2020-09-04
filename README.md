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
**[Documentation for THIS wrapper](https://firstdorsal.eu/doc/mailcow-api/)**

# Need help or missing a feature?
Feel free to contact me via [xl9jthv_7bvgakv9o9wg0jabn2ylm91xxrzzgt0e@firstdorsal.eu](mailto:xl9jthv_7bvgakv9o9wg0jabn2ylm91xxrzzgt0e@firstdorsal.eu) in english or german

## Mailcow API Documentation
[Apiary](https://mailcow.docs.apiary.io/)

[Swagger](https://demo.mailcow.email/api/)


## Modules

<dl>
<dt><a href="#module_mailcow-api">mailcow-api</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Domain">Domain</a> : <code>Object</code></dt>
<dd><p>For all options check out <a href="https://demo.mailcow.email/api/">https://demo.mailcow.email/api/</a></p>
</dd>
</dl>

<a name="module_mailcow-api"></a>

## mailcow-api

* [mailcow-api](#module_mailcow-api)
    * [.MailcowApiClient](#module_mailcow-api.MailcowApiClient)
        * [new module.exports.MailcowApiClient(baseurl, apikey)](#new_module_mailcow-api.MailcowApiClient_new)
        * [.getDomain([domain])](#module_mailcow-api.MailcowApiClient+getDomain) ⇒ <code>Array</code>
        * [.addDomain(domain)](#module_mailcow-api.MailcowApiClient+addDomain) ⇒ <code>Boolean</code>
        * [.editDomain(domains, attributes)](#module_mailcow-api.MailcowApiClient+editDomain) ⇒ <code>Boolean</code>

<a name="module_mailcow-api.MailcowApiClient"></a>

### mailcow-api.MailcowApiClient
Class representing the Mailcow API client

**Kind**: static class of [<code>mailcow-api</code>](#module_mailcow-api)  

* [.MailcowApiClient](#module_mailcow-api.MailcowApiClient)
    * [new module.exports.MailcowApiClient(baseurl, apikey)](#new_module_mailcow-api.MailcowApiClient_new)
    * [.getDomain([domain])](#module_mailcow-api.MailcowApiClient+getDomain) ⇒ <code>Array</code>
    * [.addDomain(domain)](#module_mailcow-api.MailcowApiClient+addDomain) ⇒ <code>Boolean</code>
    * [.editDomain(domains, attributes)](#module_mailcow-api.MailcowApiClient+editDomain) ⇒ <code>Boolean</code>

<a name="new_module_mailcow-api.MailcowApiClient_new"></a>

#### new module.exports.MailcowApiClient(baseurl, apikey)
Create a Mailcow API client.


| Param | Type | Description |
| --- | --- | --- |
| baseurl | <code>string</code> | The base url where the api can be found |
| apikey | <code>string</code> | The api key for the mailcow api endpoint |

**Example**  
```js
const mc = new MailcowApiClient(process.env.MAILCOW_API_BASEURL, process.env.MAILCOW_API_KEY);
```
<a name="module_mailcow-api.MailcowApiClient+getDomain"></a>

#### mailcowApiClient.getDomain([domain]) ⇒ <code>Array</code>
Gets a specific domain or all domains

**Kind**: instance method of [<code>MailcowApiClient</code>](#module_mailcow-api.MailcowApiClient)  
**Returns**: <code>Array</code> - Array of domains  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [domain] | <code>String</code> | <code>&#x27;all&#x27;</code> | The domain you want to get |

**Example**  
```js
await mc.getDomain()
```
<a name="module_mailcow-api.MailcowApiClient+addDomain"></a>

#### mailcowApiClient.addDomain(domain) ⇒ <code>Boolean</code>
Adds a domain to the server

**Kind**: instance method of [<code>MailcowApiClient</code>](#module_mailcow-api.MailcowApiClient)  
**Returns**: <code>Boolean</code> - True on success  

| Param | Type | Description |
| --- | --- | --- |
| domain | [<code>Domain</code>](#Domain) | The domain you want to set add |

**Example**  
```js
await mc.addDomain({
            domain: "example.com",
        }))
```
<a name="module_mailcow-api.MailcowApiClient+editDomain"></a>

#### mailcowApiClient.editDomain(domains, attributes) ⇒ <code>Boolean</code>
Edits one or more domains on the server. Applies the attributes to all domains provided.

**Kind**: instance method of [<code>MailcowApiClient</code>](#module_mailcow-api.MailcowApiClient)  
**Returns**: <code>Boolean</code> - True on success  

| Param | Type | Description |
| --- | --- | --- |
| domains | <code>Array</code> \| <code>String</code> | The domains you want to edit |
| attributes | <code>Object</code> | Attributes to change for all domains provided domains |

**Example**  
```js
await mc.editDomain(["example.com"], {
            aliases: 399
        });
        //This will set the aliases of example.com to 399
```
<a name="Domain"></a>

## Domain : <code>Object</code>
For all options check out [https://demo.mailcow.email/api/](https://demo.mailcow.email/api/)

**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| domain | <code>String</code> |  | Name of the domain to add |
| [active] | <code>Number</code> | <code>1</code> | Whether the domain should be active or not |
| [aliases] | <code>Number</code> | <code>400</code> | Number of aliases allowed |
| [defquota] | <code>Number</code> | <code>3072</code> |  |
| [mailboxes] | <code>Number</code> | <code>10</code> |  |
| [maxquota] | <code>Number</code> | <code>10240</code> |  |
| [quota] | <code>Number</code> | <code>10240</code> |  |

**Example**  
```js
const domain = {
            active: 1,
            domain: "example.com",
            aliases: 400, // responding "object is not numeric" if missing is this a BUG? > should be "aliases missing" if cant be omited anyway
            backupmx: 0,
            defquota: 3072,
            description: "Hello!",
            lang: "en",
            mailboxes: 10,
            maxquota: 10240,
            quota: 10240,
            relay_all_recipients: 0,
            rl_frame: "s",
            rl_value: 10
        }
```
