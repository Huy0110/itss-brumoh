# Git flow

```bash
## Make sure you have the latest code version
$ git pull origin main

## Checkout new branch
$ git checkout -b <branch_name>

... Coding ...

## Check lint and prettier for consistencies
$ npm run format
$ npm run lint:prettier

## Commit code
$ git add .
$ git commit -m "commit message"
$ git push origin <branch_name>

... Waiting review ... -> Team lead merge

```