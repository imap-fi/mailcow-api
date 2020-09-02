<a name="Domain"></a>

## Domain : <code>Object</code>
For all options check /api/#/Domains/Create%20domain

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
const d = {
            active: 1,
            domain: "example.com",
            aliases: 400, // responding "object is not numeric" if missing is this a BUG? > should be "aliases missing" if cant be omited anyway
            backupmx: 0,
            defquota: 3072,
            description: "dwa",
            lang: "en",
            mailboxes: 10,
            maxquota: 10240,
            quota: 10240,
            relay_all_recipients: 0,
            rl_frame: "s",
            rl_value: 10
        }
```
