# submit_nns_proposal_tutorial

This is a static page (hosted on the Internet Computer) that gives user instructions on how to submiyt Motion proposals to the NNS.

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

