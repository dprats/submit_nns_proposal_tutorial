# Tutorial: How to submit NNS proposals

This is a static page (hosted on the Internet Computer) that gives user instructions on how to submit motion proposals to the NNS.

You can see it deployed to a canister here: https://3ndt4-3yaaa-aaaah-qbjaq-cai.raw.ic0.app/

## Running the project locally

If you want to test your project locally, you can use the following commands:

### Terminal window 1:
```bash
# Starts the replica, running in the background
dfx start --background

dfx deploy
```
And leave that window running (do not close it).

### Terminal window 2:

Type in:

# 
```bash
# tells npm to constantlly rebuild your project's front-end
npm start
```

Which will start a server at `http://localhost:8080`.

And leave that window running (do not close it).

### Browser window

This will put you in the following developer loop:
1. Make a change to the repo
2. Save change locally
3. Navigate to http://localhost:8080/ to see the latest HTML change

### Notes on the styling and front-end

@dprats note: While the commands in this tutorial are all valid. The actual front-end and styling is still a work in progress. As a starting point (and solely for inspiration to get my thoughts in order), I used my favorite developer documentation as inspiration (Stripe's docs). This tutorial is a public repo done for fun and should not be seen as official by [DFINITY](https://dfinity.org/) Foundation ubless more original front-end is used. 
