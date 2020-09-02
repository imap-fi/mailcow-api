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
**Returns**: <code>Array</code> - array of domains  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [domain] | <code>String</code> | <code>&#x27;all&#x27;</code> | the domain you want to get |

**Example**  
```js
await mc.getDomain()
```
<a name="module_mailcow-api.MailcowApiClient+addDomain"></a>

#### mailcowApiClient.addDomain(domain) ⇒ <code>Boolean</code>
adds a domain to the server

**Kind**: instance method of [<code>MailcowApiClient</code>](#module_mailcow-api.MailcowApiClient)  
**Returns**: <code>Boolean</code> - true on success  

| Param | Type | Description |
| --- | --- | --- |
| domain | [<code>Domain</code>](#Domain) | the domain you want to set add |

**Example**  
```js
await mc.addDomain({
            domain: "example.com",
        }))
```
<a name="module_mailcow-api.MailcowApiClient+editDomain"></a>

#### mailcowApiClient.editDomain(domains, attributes) ⇒ <code>Boolean</code>
edits one or more domains on the server; applys the attributes to all domains provided

**Kind**: instance method of [<code>MailcowApiClient</code>](#module_mailcow-api.MailcowApiClient)  
**Returns**: <code>Boolean</code> - true on success  

| Param | Type | Description |
| --- | --- | --- |
| domains | <code>Array</code> \| <code>String</code> | the domains you want to edit |
| attributes | <code>Object</code> | attributes to change for all domains provided domains |

**Example**  
```js
await mc.editDomain(["example.com"], {
            aliases: 399
        });
        //this will set the aliases of example.com to 399
```
<a name="Domain"></a>

## Domain : <code>Object</code>
For all options check out [https://demo.mailcow.email/api/](https://demo.mailcow.email/api/)

**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| domain | <code>String</code> |  | name of the domain to add |
| [active] | <code>Number</code> | <code>1</code> | wheter the domain should be active or not |
| [aliases] | <code>Number</code> | <code>400</code> | number of aliases allowed |
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
