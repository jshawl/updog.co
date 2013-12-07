---
layout: post
title: "Git(Hub) for Designers" 
---

# Git(Hub) for Designers

## Goals:

1. Understand what Git is and why people use it.
2. Understand how GitHub fits into a modern web development workflow.
3. Understand the basics of how Git works.

## Helpful Resources:

1. `$ git help` while in the terminal
2. [git-scm](http://git-scm.com/)
3. [git ready](http://gitready.com/)

### What is Git?

Git is a distributed version control system. In the beginning, there were _versions_ of files:

![files](/img/files.png "Files")

**Q**: Why is this bad?

**A**: How do you know what's changed?

You would have to manually open up each file and compare them line by line.

Which copy did you send to someone for review/editing?

Git tracks changes to the *same* set of files. It stores the file's changes
in a local database, known as a repository. Just like the attempts at making
snapshots of a file in the above image, Git stores a snapshot of your entire 
project at each time you make a commit. 

This means we can always go back in time and view the state of a project at any point. 

This may seem crazy. If you're working on a massive project with several files, saving the entire state
of a project should take up a lot of space, right? Nope! Since only changes are saved, if a file has
not changed sinced a previous commit, Git just stores a link to the file's previous changes. 

Let's start tracking!

### Setting Up Git.

1. [Download Git](http://git-scm.com/downloads)
2. Open up Terminal - /Applications/Utitlities/Terminal
  * or, cmd + space; Search for terminal.
4. `$ git --version # checks that git is installed`

### Tracking Files

1. Navigate to your directory: 
    *  `$ cd /path/to/project/` _or_
    *  `$ cd ` and drag your project's folder to the terminal window.
2. `$ git init`
3. `$ git add . `
  *  The `.` is a shortcut for every file in the working directory.
  * Instead, you could type out `git add index.html` or `git add *.scss`
4. `$ git commit -m 'initial commit'`

**Note:** If you don't have a project to work with, or would rather tamper with someone else's files, you can download
a sample project at [http://jshawl.com/vanilla.zip](http://jshawl.com/vanilla.zip).

This is my personal boilerplate for new projects. Feel free to use it for your next website!
### What just happened?

![how git works](http://git-scm.com/figures/18333fig0106-tn.png  "how git works")

_Photo Credit: [http://git-scm.com](http://git-scm.com)_

#### Why do we need the staging area?

When I first started using git, I didn't understand why I needed the staging area. 

    $ git commit -am 'commit message'

... will add all file changes to the staging area, and then make a commit with the given message. This is handy,
and much easier than typing `git add . && git commit -m 'commit message'`. The staging area allows us to make clean
and meaningful commits. 

Say you've been working on a project and have made changes to both the HTML and CSS:

    $ vim -O index.html style.css
    $ git status # Tells us what's going on
    # Changes not staged for commit:
    #   (use "git add <file>..." to update what will be committed)
    #   (use "git checkout -- <file>..." to discard changes in working directory)
    #
    #	modified:   index.html
    #	modified:   styles.css

If I want to roll back to a time when only I had changed the HTML (say, for debugging your JavaScript hooks), it will be useful to have
a separate commit for these two separate changes. 

    $ git add index.html
    $ git status
    # On branch master
    # Changes to be committed:
    #   (use "git reset HEAD <file>..." to unstage)
    #
    #	modified:   index.html

If we commit now, we will only add the changes to index.html to this commit. 

The staging area lets us have super fine grained control over our commits.

When I first started using Git, I had trouble understanding why we needed the staging area at all. I often used `git commit -am`
and just committed whatever collection of files I had been editing over the past few hours.

My commit messages were meaningless, and being able to go back in time to a point where there were several drastic changes
or none at all was hardly useful.

## Make some commits!

Now you should take some time to make some changes to your files. Fix typos, add features,
whatever! When you're ready to commit, running

    $ git status

Will tell us that we have changes that are not yet staged.

To see what's been committed so far:

    $ git log
    commit 050dc263e417485ff26bc7464769a49250444923
    Author: Jesse Shawl <jesse@jshawl.com>
    Date:   Fri Nov 29 16:07:24 2013 -0500

       Initial Commit

Or my favorite: 

    $ git log --all --decorate --graph --pretty=format:"%h %d %s"
    * 050dc26  (HEAD, origin/master, origin/HEAD, master) added some formatting
    * 1774738  Update readme.md
    * bce6eb6  Added explanation about staging area

`HEAD` is where you currently are. The first 7 alphanumeric characters to
what's known as a SHA-1 hash which is a unique identifier for your commit.

The parentheses contain the names of the current branches.

### The basics of git branching

Need to rollback to a previous commit? The safest way to do this is:

    $ git checkout sHaHaSh
    $ git checkout -b experimental-rewrite

This checks out the project at a specific commit, and then creates a new branch
so we can save commits we create.

#### Feature branches

Another use for git branches is feature branches. One of my favorite git workflows involves topic
or feature branches. I work on websites, and this means keeping `master` in a 100% deployable state.

Any experimental features get created on their own branch, and are only merged into `master` after
those commits have been cleaned up and the code tested.

### The basics of merging.

Say we created a new feature branch, and are ready to deploy.

    $ git checkout master

Checks out the branch you want to merge _into_.

    $ git merge experimental-feature

Merges the commits on the experimental-feature branch into master. 

## Github

GitHub is a code hosting service. You can push your own code to GitHub, view others' code, and watch and star repositories. 


[Create a new repo](https://github.com/new)

We'll use the same local repo we were working with, and push it to github. 

### Pushing

First, we have to tell our local repo where the remote repo is.

    $ git remote add origin git@github.com:username/reponame.git

If you've never connected to github before, you will need to setup SSH keys and add them
to the site:
   
    $ mkdir ~/.ssh/
    $ cd ~/.ssh/
    $ ssh-keygen -t rsa 
    $ # Press enter a bunch of times!
    $ cat id_rsa.pub | pbcopy

Then, we push! 

    $ git push remotename branchname

### Pulling

Say we're working with other people who are pushing their code to a github repository. In order to pull down their changes, we'll need to git pull:

    $ git pull origin master

### Merge Conflicts

There is a thing called merge conflicts. It happens when two separate branches have made changes to the same part of a file.
Git doesn't know which change is correct, and cannot merge the branches. This can be scary at first. Here are some helpful resources
for dealing with merge conflicts:

    $ git help merge conflicts
 
* [Resolving a merge conflict from the command line](https://help.github.com/articles/resolving-a-merge-conflict-from-the-command-line)

### Working with Others

#### What is Forking?

Forking just makes a copy of somebody else's repo. It let's anyone just copy code, so they can make changes without affecting the original repository. 

Was there anything that was confusing when you were learning Git? Fork this repo and submit a pull request.

After you've forked a repo, you can clone it to your local machine by running:

    $ git clone git@github.com:username/reponame.git

#### What's a pull request?

We're asking the original repo's author to pull in our changes. I mentioned in the beginning that Git was a _distributed_ version
control system. It means that everyone accessing a git repo may see the entire code base's history. 

Maybe talk again here about how Git is _distributed_. Reference the beginning of the talk.
