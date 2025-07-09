# Medusa Plugin Mammoth Fulfillment

A fulfillment provider plugin for Medusa e-commerce platform, based on the default Medusa manual fulfillment provider.

## Installation

```bash
npm install github:t-lock/medusa-plugin-mammoth-fulfillment#commit-hash
```

Or in package.json:
```json
{
  "dependencies": {
    "medusa-plugin-mammoth-fulfillment": "github:t-lock/medusa-plugin-mammoth-fulfillment#commit-hash"
  }
}
```

## Usage

Add to your `medusa-config.js`:

```javascript
const plugins = [
  // ... other plugins
  `medusa-plugin-mammoth-fulfillment`,
  // ... other plugins
]
```

## Development

```bash
# Install dependencies
npm install

# Build the plugin
npm run build

# Watch for changes
npm run watch

# Run tests
npm test
```

## Features

- Exact replica of the Medusa Manual Fulfillment Provider, except it supports calculated shipping options
