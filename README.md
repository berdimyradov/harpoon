# Catch your first pokemon and get your first badge

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

The main objective of this repository is to teach you how to contribute to open source. For this [berdimyradov](https://github.com/berdimyradov) provides instructions to make your first pull requests. By following this instructions, you will be able to make pull requests to this repository and get their personal Pokemon, which will be displayed on the [project's main page](https://harpoon-six.vercel.app/)). In addition, the user will receive a badge from Github - _Pull Shark_.

![Pull Shark Badge](https://raw.githubusercontent.com/Schweinepriester/github-profile-achievements/main/images/pull-shark-default.png)

1.  **Fork the repository:** First, navigate to the repository `berdimyradov/harpoon` and click the "Fork" button in the top-right corner. This will create a copy of the repository in your own Github account.
2.  **Create first pull request** 1. **Edit the fork:** Next, go to the `<> Code` section of forked repository and edit `src/constants.ts` file by adding an item to an `POKEMONS_IS_CAUGHT_BY` object.
    `typescript
    export const POKEMONS_IS_CAUGHT_BY: Record<number, string> = {
    46: "berdimyradov",
    // <number> : <string>,

    // <number> is a number of pokemon which you can find in https://harpoon-six.vercel.app
    // <string> is your github username
    } as const;
    `2. **Create a commit and push it to a new brach:** Once you edit the`src/constants.ts` file, create a commit by filling and submitting the form bellow.
    ![Pokemon Chose Commit form](https://raw.githubusercontent.com/berdimyradov/harpoon/main/documentation/chose-commit.png) 3. **Create pull request:** Once your changes have been pushed to your forked repository, go to the original repository and click the "New pull request" button. Select the branch you just pushed your changes to and fill in a title and description for your pull request. 4. **Review and merge:** Finally, wait for the repository owner [berdimyradov](https://github.com/berdimyradov) to review your changes and merge them into the main branch. If there are any issues, [berdimyradov](https://github.com/berdimyradov) may request changes before merging.

3.  **Create second pull request**

    1.  **Edit the fork:** Next, go to the `<> Code` section of forked repository and edit `src/constants.ts` file by adding an item to an `POKEMONS_IS_SHINY` object.

    ```typescript
    export const POKEMONS_IS_SHINY: Record<number, boolean> = {
      46: true,
      // <number> : true,

      // <number> is a number of pokemon which you previously chose
    } as const;
    ```

    2.  **Create a commit and push it to a new brach:** Once you edit the `src/constants.ts` file, create a commit by filling and submitting the form bellow. ![Pokemon Shiny Commit form](https://raw.githubusercontent.com/berdimyradov/harpoon/main/documentation/pokemon-shiny.png)
    3.  **Create pull request:** Once your changes have been pushed to your forked repository, go to the original repository and click the "New pull request" button. Select the branch you just pushed your changes to and fill in a title and description for your pull request.
    4.  **Review and merge:** Finally, wait for the repository owner [berdimyradov](https://github.com/berdimyradov) to review your changes and merge them into the main branch. If there are any issues, [berdimyradov](https://github.com/berdimyradov) may request changes before merging.
