# VSF-Newleaf Integration

### Installation

---

Add your module to `<Project>/packages`

### Setup

---

Register the integration in the `middleware.config.js` file.

```javascript
module.exports = {
  integrations: {
    newleaf: {
      location: "@absolute-web/vsf-newleaf/server",
      configuration: {
        apiUrl: process.env.NEWLEAF_API_URL,
      },
    },
  },
};
```

Add `NEWLEAF_API_URL` variable to .env file

```
NEWLEAF_API_URL=<API_URL>
```

Register the module in the `nuxt.config.js` file.

```javascript
buildModules: {
  [
    '@vue-storefront/nuxt',
    {
      useRawSource: {
        dev: [
          '@absolute-web/vsf-newleaf',
        ],
        prod: [
          '@absolute-web/vsf-newleaf',
        ],
      },
    }
  ],
  ['@absolute-web/vsf-newleaf/nuxt'],
},
```
