# DevOps TypeScript + Lint CI Demo

This repo demonstrates a CI setup using GitHub Actions for linting and building TypeScript code.

## Run Locally

```
npm install
npm run lint
npm run build
```

## Understanding This Codebase
This repo can automatically trigger a GitHub Action that runs npm run lint and npm run build on every push and upon the creation of a pull request

The ```.github/workflows/ci.yml``` file instructs github to start an action that performs checks to ensure code meets a set standard.

This can be paired with Pull requests and code review to enforce a code quality minimum.

As for the code in this codebase itself - there is just a single simple typescript file ```sum.ts```.

## Things to Try out
Fork this repository and try the following:

1. (mild) Intentionally commit invalid typescript code and observe the github action failing. See if you can find the error in the build logs. Commit a fix and observe the github action pass.

2. (mild) Intentionally commit a linting error and observe the github action failing.  See if you can find the error in the build logs. Commit a fix and observe the github action pass.

3. (mild) Create a branch and pull request and observe the github action trigger. See if you can find the setting that prevents Pull Requests from being merged if a github action fails (may not be enforceable on free accounts).

4. (mild) Create a new npm script and update the ```.github/workflows/ci.yml``` to trigger your new script. (ensure that the script does not run indefinitly/start with a simple script - you will eat up your build minutes if you're not careful!)

5. (medium) Add a badge to the README that dynamically updates if the github action is passing or failing.

6. (medium) Rewrite the ```.github/workflows/ci.yml``` file to run the linting and build check in parallel.

7. (medium) Add an environment variable and secret variable and access/use each in your github action.

8. (medium) Create a github action that only triggers for a specific branch.

9. (spicy) add a step to ```.github/workflows/ci.yml``` that only runs if the linting and build checks pass. 

10. (spicy) Add caching to your GitHub Actions workflow to speed up npm install.

11. (spicy) Create a GitHub Action that runs every day at 9am and prints the date/time to the logs.


## Additional Notes
When forking this repo, you will need to activate github actions. Note that free accounts will have a limit of build minutes available.