## Ember CLI UUID

This is an npm package that contains the Ember CLI uuid generator for Ember-Data
library, packaged as an [Ember CLI](https://github.com/stefanpenner/ember-cli)
Addon.

This addon adds a hook to your Adapter (and all adapters extended from DS.Adapter) to generate the id of each record you create on the client-side.

## Installation

Ember CLI >= 0.2.3, run

```
ember install ember-cli-uuid
```

in your Ember CLI project's root.

**If you run with Ember CLI >= 0.1.5 && < 0.2.3**

```
ember install:addon ember-cli-uuid
```

**If you run with Ember CLI >= 0.0.44 && < 0.1.5**

```
npm install --save-dev ember-cli-uuid
ember generate ember-cli-uuid
```
