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
