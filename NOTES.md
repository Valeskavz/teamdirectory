# Part 1
## Question 1:
Category A:
Fixing of bugs: 
When fixing and bug it is best practice to make a commit that is labelled according to the type of bug that was fixed. The fix itself might take more than one commit, therefore it is important to be descriptive when labeling the commits. This will assist the developer(s) themselves or other developers when looking back at historic commits. 
Adding a new feature:
Developers would want to know when they added a new feature within their project. This helps any future bugs that might occur and the developers will then know from where they need to start troubleshooting and looking for the root cause of the bug itself. Making a commit(s) for this helps keep track of everything and all the changes that were made when the feature was added not only to the specific methos itself, but the small tweaks that were made throughout the project that perhaps should not have been altered.
Updating a feature:
Some features will be updated to improve functionality or meet user requirements. Therefore, a few lines of code might have to change in the existent feature to meet the required standards, and with that, commits indicating these changes are important to keep in record.

Category B:
Updating hard-coded text:
When a typo or the heading of a page has been updated, it is not necessary to make a commit for those small changes, as they are in quotation marks and making a change within these strings will never cause a bug, but is more to do with the User’s interface.
Deletion of Console.log code used for troubleshooting:
When developing, developers tend to add extra lined of Console.log code in multiple files when they were previously trying to fix a bug, but made a commit before deleting these lines of code. These lines of code can be deleted throughout the project without making a commit, because you are cleaning up the code to what it must actually look like, and removing anything that was used to assist the developer(s) in fixing the bug.

Category C:
appsettings.Development.json:
This file can be ignored, because it is good practice for developers to store their third party API keys, API secrets, database connections strings and token keys in this file. All this information is confidential and leaking it into a commit is not ideal, because it will then be on GitHub for others to see and access, which can be a serious security risk.

## Question 2:
Merge:
The merge preserves all the original commits, timestamps and author information. Secondly, it preserves the branch structure in its original shape. Lastly, the uncommitted changes are also preserved.
The merge discards the linear timeline of commits. Secondly, when , merge conflict happen, it discards the automated structural alignment of those lines. Lastly, git discards the individual commit history of the source branch on the target branch.

Rebase:
The rebase preserves file change differences, author name, email and date, and lastly uncommitted changes.
The git rebase discards original commit hashes(SHAs), the original committer date, the timeline where branch was made and existing merge commits are discarded.
I will be using merge for part 3, because the intentional conflict is useful for preserving branching and conflict-resolution history.

## Question 3:
git push -u origin main:
Send local commits on main and to Github.
GitHub’s main branch is created/updated with my commits.

git push:
Send new local commits to GitHub’s tracked branch.
GitHub receives new commits and its main branch moves forward

git push -u origin feature/add-department:
Send the feature branch and its commits to GitHub and establishes upstream tracking.
The feature branches appear on GitHub with Commits.

git push origin --delete feature/add-department:
Sends a request to delete the remote feature branch.
The feature/add-department branch is removed from GitHub.
git pull – rebase: Fetch commits from GitHub and then reapplies my local commits on top of the updated remote branches.

Git pull –rebase:
Fetches commits from GitHub and then reapplies my local commits on top of the updated remote branch.
GitHub itself does not change during the pull. My local repository is updated to match the remote history.

Git push (after rebase):
Sends the rebased local commits to GitHub.
GitHub’s branch is updated with the rebased commits.
Pushing to GitHub cannot verify that the code actually worked correctly. It can successfully push code containing errors, due to Git only verifying the changes can be transferred, not the because the application functions as intended.

## Question 4:
a.)	Non-descriptive
Fix validation errors in form submission
b.)	Implementation-focused
Handle user input validation on form submission
c.)	Non-descriptive
Implement initial form validation
d.)	Intent/behaviour-focused
Add email format validation to prevent invalid submissions
e.)	Non-descriptive
Update form validation logic
f.)	Implementation-focused
Clarify setup instructions in project notes


# 1st Diff
The diff showed that I added a line to display the total number of team members and the code displaying each member remains unchanged.

# 2nd Diff
The difference showed that I added a hard-coded line to display the number of developers in the team.

# Task 4
The feature branch was merged into main using fast-forward merge. I was able to determine this because Git specified in the terminal that it was a  "Fast-forward" merge.

# Task 7 
The conflict occured in README.md in line one for both branches. The conflict was resolved by selecting the best option out of the two contents.

# Task 9
Task 4's merge created a diamond-shaped history because the feature branch and the main branch had seperate commits before they were merged. With task 9, rebase removed the feature commit onto the latest main, which created a straight history linewith no merge commit.
I would select a merge wen I want to preserve the original branch history and I would select rebase when I want a clean straight history before integrating a branch.

# Part 4
Github had the latest commit because I made a direct edit in README.md on the main branch on the website itself. I used git pull-rebase, because the local commit did not conflict with the remote change. Therefore, Git could replay my commit on top of the latest commit and keep the history linear. Force-pushing would've overwritten the remote history. Therefore it was not the appropriate solution.

# Reflection
## 1. What made a commit high-value?:
A high-value commit represents one clear change. 
I committed major functionality separately, such as adding team data, displaying team members, and adding departments. I bundled the small changes needed to complete the department feature together because they formed one complete feature and did not need separate commits.

## 2. Your merge vs. rebase choice
I used a merge for the Part 3 conflict because it preserves the original branch history and clearly shows where the conflict occurred and was resolved. This matches my Question 2 answer, where I chose merge when preserving branching history is important.

## 3. The rejected push
My push was rejected because GitHub contained a newer commit from a direct README.md edit. I used git pull rebase to bring the remote changes into my local branch and replay my commit on top. This kept the history linear without overwriting the remote commit, unlike with force-pushing.

## 4.  One thing that surprised you
I was surprised when my push was rejected even though my local commit was valid. This taught me that Git also checks whether my local history is up to date with the remote repository before accepting a push.
