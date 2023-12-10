## Setup

### Back-end

```bash
# Go to Front-end directory
$ cd be

# Setup local env variables
$ cp .env.example .env

# Install dependencies
$ npm install

# Start server
$ npm start
```

### Front-end

```bash
# Go to Front-end directory
$ cd fe

# Setup local env variables
$ cp .env.example .env

# Install dependencies
$ npm install

# Start server
$ npm start
```

The default `.env` file does not include MongoDB credentials, please ask your teammate.

## Development

### Start server

Quick start up

```bash
$ npm start
```

If you use VSCode and want to use _breakpoint_ for debugging, start server using `F5` instead.

### Refs

- Framework: [ReactJS](https://react.dev/)
- Read: [Git flow](./docs/GIT_FLOW.md)
- Read: [Style guide](./docs/STYLE_GUIDE.md)
- Read: [Database schema](./docs/db-schema/README.md)
- Read: [Development docs](./docs/README.md)

### Tips

If you are using VSCode, install the following extensions to help with development:

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) (must-have)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) (must-have)

To regenerate database docs, install [tbls](https://github.com/k1LoW/tbls) and run `tbls doc --force`
