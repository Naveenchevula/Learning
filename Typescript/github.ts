// github/gitlab/bitbucket- version control tool 
// To work with github - we need to have git installed on our system
// we can download git from https://git-scm.com/downloads

// 1. you are the first person to start test automation - No REPO AVAILABLE
// 0. Create a new respository on the version control tool
// 1. create a project and write test case in your local system
// 2. initialize git in your local system - git init
// 3. add the files to the staging area - git add .
// local git area - working directory, staging area, local repository
// 4. commit the changes - git commit -m "Initial commit"  - commit message should be meaningful and should describe the changes made in the commit 
// 5. create branch - git branch <branch-name> - branches are used to work on different features or bug fixes without affecting the main codebase
// git branch -M main - to rename the default branch to main // git branch -M master - to rename the default branch to master // git branch <old-branch-name> <new-branch-name> - to rename a branch
// 6. git branch - List all the branches in the repository
// 7. git remote add orgin https://github.com/naveenchevula221-lgtm/TestPW.git 
// add a remote repo to your local repo linked with remote repository on github
// 8. git push - u origin <branch-name> - to push the changes to the remote repository on github
// 9 git checkout - b branch-name - to create a new branch going forward for all the new 
// 10. on master  branch - git pull 
// 11. git checkout - b branchName - create a new branch and pull the latest changes 
// 12. complete wiriting the test case and follow the steps #4 to #8 to commit and push the changes to the remote repository on github

    
// 2. you are joining an existing project - REPO AVAILABLE
// 1. clone the repository to your local system - git clone <repository-url> - to clone the repository from github to your local system

// 0. git clone repoURL - clone the repository from github to your local system
// 1. install all the dependencies 
//  npm install - to install all the dependencies listed in the package.json file
// 2. git checkout - b branchName - create a new branch and pull the latest changes
// 3. git branch - to list all the branches in the repository
// 4. wirte testcase  and save in local 
// 5. git status - to check the status of the files in the local repository
// 6. git add . - to add all the files to the local repository
// 7. git commit -m "commit message" - to commit the changes to the local repository
// 7.1 git checkout master - to switch to the master branch
// 7.2 git pull - to pull the latest changes from the remote repository to the local repository
// 7.3 git checkout branchName - to switch back to the branch you were working on
// 7.4 git merge master / git rebase master - to merge the latest changes from the master branch to your branch
// 8. git push - u origin branchName - to push the changes to the remote repository on github[working branch to remote repository]
// 9. create a pull request on github to merge the changes from your branch to the master branch[PR] merge your changes to the master branch after review and approval from the team members
//

// Follow #2- #9 for the next steps to work on an existing project on github
// git stash - to save the changes in the local repository without committing them - to save the changes temporarily and switch to another branch or pull the latest changes from the remote repository without losing the changes made in the local repository
// git stash pop - to apply the stashed changes to the current branch
// git revert HEAD~1 [latest 1]
// git push --force - to force push the changes to the remote repository on github - use with caution as it can overwrite the changes made by other team members in the remote repository