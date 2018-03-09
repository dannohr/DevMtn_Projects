#!/usr/bin/env bash

# Adapted from http://scottwb.com/blog/2012/07/14/merge-git-repositories-and-preseve-commit-history/
#
# This is a script for archiving old private repos into an `attic` repo.  To use, fill in the `ACCOUNT`
# variable below, then add this script to your "attic" repo, then just `./archive.sh [reponame]` from
# your cloned attic repo.  This will take the contents of "reponame" and copy them into a subdirectory in
# attic named "reponame", preserving history.  Note that the original repo is not modified in any way
# (we clone it to /tmp/reponame and don't push anything) and this script doesn't auto-push your attic
# repo, so if it all goes horribly wrong, it's very easy to recover.

# Set this to the name of your account.
ACCOUNT=dannohr

set -e


if [ -z ${1+x} ]; then
    echo "Usage: ${0} [reponame]"
    exit 1
fi

STARTING_DIR=$(pwd)
echo Running from $STARTING_DIR

echo Preparing $1
cd /tmp
echo Cloning git@github.com:${ACCOUNT}/${1}.git
# git clone git@github.com:${ACCOUNT}/${1}.git
git clone https://github.com/${ACCOUNT}/${1}
# cd $1${ACCOUNT}/${1}
cd $1
mkdir $1
for file in $(git ls-files | sed -e 's/\/.*$//' | uniq); do git mv $file $1; done
git commit -m "Prepare ${1} for storage in attic."

echo Pulling to attic from $STARTING_DIR
cd $STARTING_DIR
git remote add $1 /tmp/$1
git pull --no-edit $1 master
git remote rm $1

echo Cleaning up
rm -rf /tmp/$1

echo Finished - please review and push