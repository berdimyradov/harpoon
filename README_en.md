## Instructions

1. **Catch a Pokemon:** Go to https://harpoon-six.vercel.app and select a Pokemon that has not already been caught. Remember the number in the top-right corner of the Pokemon's card. You will need it in the next steps.

   | Pokemon                                                                                                     | Is Caught |
   | ----------------------------------------------------------------------------------------------------------- | --------- |
   | ![selected](https://raw.githubusercontent.com/berdimyradov/harpoon/main/documentation/selected.png)         | ✅        |
   | ![non-selected](https://raw.githubusercontent.com/berdimyradov/harpoon/main/documentation/non-selected.png) | ❌        |

2. **Fork the repository:** Navigate to the repository `berdimyradov/harpoon` and click the "Fork" button in the top-right corner. This will create a copy of the repository in your own Github account.

3. **Create your first pull request:**

   1. **Edit the fork:** In the `src/constants.ts` file of your forked repository, add an item to the `POKEMONS_IS_CAUGHT_BY` object by specifying the number of the Pokemon you caught and your Github username.

      ```typescript
      export const POKEMONS_IS_CAUGHT_BY: Record<number, string> = {
        46: "yourGithubUsername",
        // <number> : <string>,
        // <number> is the number of the Pokemon you caught, which you can find in https://harpoon-six.vercel.app
        // <string> is your Github username
      } as const;
      ```

   2. **Create a commit and push it to a new branch:** After editing the `src/constants.ts` file, create a commit by filling out and submitting the form shown below.

      ![Pokemon Chose Commit form](https://raw.githubusercontent.com/berdimyradov/harpoon/main/documentation/chose-commit.png)

   3. **Create a pull request:** Once your changes have been pushed to your forked repository, go to the original repository and click the "New pull request" button. Select the branch you just pushed your changes to and fill in a title and description for your pull request.

   4. **Review and merge:** Wait for the repository owner, [berdimyradov](https://github.com/berdimyradov), to review your changes and merge them into the main branch. If there are any issues, [berdimyradov](https://github.com/berdimyradov) may request changes before merging.

4. **Create your second pull request:**

   1. **Edit the fork:** In the `src/constants.ts` file of your forked repository, add an item to the `POKEMONS_IS_SHINY` object by specifying the number of the Pokemon you caught and setting its value to `true`. Make sure you choose the same Pokemon number that you chose in your first pull request.

      ```typescript
      export const POKEMONS_IS_SHINY: Record<number, boolean> = {
        46: true,
        // <number> : true,
        // <number> is a number of the Pokemon, which you previously chose
      } as const;
      ```

   2. Create a commit and push it to a new branch: After editing the src/constants.ts file, create a commit by filling and submitting the form shown below.

      ![Pokemon Chose Commit form](https://raw.githubusercontent.com/berdimyradov/harpoon/main/documentation/chose-commit.png)

   3. **Create a pull request**: Once your changes have been pushed to your forked repository, go to the original repository and click the "New pull request" button. Select the branch you just pushed your changes to and fill in a title and description for your pull request.

   4. **Review and merge:** Finally, wait for the repository owner [berdimyradov](https://github.com/berdimyradov) to review your changes and merge them into the main branch. If there are any issues, [berdimyradov](https://github.com/berdimyradov) may request changes before merging.
