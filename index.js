'use strict';
const f = require("node-fetch")


/**
 * For all options check out {@link https://demo.mailcow.email/api/}
 * @typedef Domain
 * @type {Object}
 * @prop {String} domain Name of the domain to add
 * @prop {Number} [active=1] Whether the domain should be active or not
 * @prop {Number} [aliases=400] Number of aliases allowed
 * @prop {Number} [defquota=3072]
 * @prop {Number} [mailboxes=10]
 * @prop {Number} [maxquota=10240]
 * @prop {Number} [quota=10240]
 * @example
 * const domain = {
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
 *
 */


/** @module mailcow-api */
/** 
 * @class Class representing the Mailcow API client 
 *@example 
(async () => {
    require('dotenv').config();

        const {
        MailcowApiClient
    } = require("./index.js")

    const mc = new MailcowApiClient(process.env.MAILCOW_API_BASEURL, process.env.MAILCOW_API_KEY);

    console.log(await mc.getDomain());
})();
*/

module.exports.MailcowApiClient = class {
    /**
     * Create a Mailcow API client.
     * @constructor
     * @param {string} baseurl The base url where the api can be found
     * @param {string} apikey The api key for the mailcow api endpoint
     * @example
     * const mc = new MailcowApiClient(process.env.MAILCOW_API_BASEURL, process.env.MAILCOW_API_KEY);
     */
    constructor(baseurl, apikey) {
        this.baseurl = baseurl;
        this.apikey = apikey;
    }
    /**
     * Gets a specific domain or all domains
     * @param {String} [domain='all'] The domain you want to get
     * @returns {Array} Array of domains
     * @example
     * await mc.getDomain()
     * */
    async getDomain(domain) {
        if (!domain || !domain.length) domain = "all"
        return f(`${this.baseurl}/api/v1/get/domain/${domain}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': this.apikey
            }
        }).then(async (res) => {
            const j = await res.json().catch();
            if (!j.length) return [j]
            return j;
        })
    }
    /**
     * Adds a domain to the server
     * @param {Domain} domain The domain you want to set add
     * @returns {Boolean} True on success
     * @example
        await mc.addDomain({
            domain: "example.com",
        }))
     * */
    async addDomain(domain) {
        if (!domain) throw new Error('Missing Domain Object');
        if (!domain.domain) throw new Error('Domain object must contain a value for domain. Example: {domain:"example.com"}');
        if (!domain.domain.match(/[A-Za-z0-9]+\.[A-Za-z0-9]+$/)) throw new Error('domain is invalid');
        domain.active = typeof (domain.active) == 'undefined' ? 1 : domain.active;
        domain.aliases = typeof (domain.aliases) == 'undefined' ? 400 : domain.aliases;
        domain.defquota = typeof (domain.defquota) == 'undefined' ? 3072 : domain.defquota;
        domain.mailboxes = typeof (domain.mailboxes) == 'undefined' ? 10 : domain.mailboxes;
        domain.maxquota = typeof (domain.maxquota) == 'undefined' ? 10240 : domain.maxquota;
        domain.quota = typeof (domain.quota) == 'undefined' ? 10240 : domain.quota;

        return f(`${this.baseurl}/api/v1/add/domain`, {
            method: 'POST',
            headers: {
                'X-Api-Key': this.apikey,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(domain)
        }).then(async (res) => {
            const j = await res.json().catch();
            if (j[0].type === 'success') return true;
            return false;
        });
    }
    /**
     * Edits one or more domains on the server. Applies the attributes to all domains provided.
     * @param {Array|String} domains The domains you want to edit
     * @param {Object} attributes Attributes to change for all domains provided domains
     * @returns {Boolean} True on success
     * @example
        await mc.editDomain(["example.com"], {
            aliases: 399
        });
        //This will set the aliases of example.com to 399
     */
    async editDomain(domains, attributes) {
        if (typeof domains === 'string') domains = [domains]


        const body = {
            items: domains,
            attr: attributes
        }

        return f(`${this.baseurl}/api/v1/edit/domain`, {
            method: 'POST',
            headers: {
                'X-Api-Key': this.apikey,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(async (res) => {
            const j = await res.json().catch();
            if (j[0].type === 'success') return true;
            return false;
        });
    }



}