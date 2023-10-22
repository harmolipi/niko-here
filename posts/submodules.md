---
title: "Git Submodules"
date: "2023-10-21"
---

I recently found myself taking over a WordPress project that involved several
plugins and a theme. To keep them together, the entire `wp-content` directory
had been checked into a git repo, which seemed a little too much to me -
especially since some LSPs look for a `.git` file to recognize the root folder
of a project.

Usually I try to keep each plugin and theme in its own self-contained repo, so
my first thought was to just split it apart entirely. But on the other hand,
because each of these pieces does make a part of a cohesive whole, there is
logic to keeping them together... so what's the solution?

## Submodules

A little bit of research led me to
[git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules), so here I
will very simply share my findings.

Submodules allow a repository to contain a reference to another repository. That
reference is kept within a `.gitmodules` file, which tracks the path and the URL
of the module. The module is tied to a particular commit on that referenced
repository (the submodule), allowing others to get the same exact version of
everything when cloning down a project containing submodules. When viewing a
repo containing submodules on GitHub, it all seems to be organized like normal,
but with a slightly different icon on a directory that happens to be a
submodule. Clicking on it takes you to that submodules own repository.

## How to break `wp-content` apart into submodules

Here are the steps I took to better organize this project into multiple
submodules.

1. Move each plugin and theme into a separate directory, somewhere outside of
   this whole project:

   ```bash
   mv wp-content/plugins/my-plugin ~/temp/my-plugin
   ```

2. Initialize each of those directories with git and commit them:

   ```bash
   cd ~/temp/my-plugin
   git init
   git commit -m "Initial commit"
   ```

3. Set up a new repo on GitHub and push the local repos up:

   ```bash
   git remote add origin https://github.com/harmolipi/my-plugin.git
   git branch -M main
   git push -u origin main
   ```

4. Add each plugin back into the main project as a submodule, in its original
   path:

   ```bash
   git submodule add https://github.com/harmolipi/my-plugin.git wp-content/plugins/my-plugin
   ```

5. Update all submodules to their latest commits:

   ```bash
   git submodule update --remote
   ```

6. Stage and commit the changes in the main repo:

   ```bash
   git add .
   git commit -m "Move plugins and themes into submodule"
   ```

Now the project is still its cohesive whole, but has also been broken into some
more logical and self-contained components at the same time!

## How to work on a project with submodules

### Cloning

To properly pull and populate this repo and all of its submodules:

1. Clone the main repository:

   ```bash
   git clone https://github.com/harmolipi/my-plugin.git
   ```

2. Initialize submodules:

   ```bash
   git submodule init
   ```

3. Pull the latest version of each submodule:

   ```bash
   git submodule update --remote
   ```

### Making changes

When making changes to an individual submodule, commit to its own repository,
return to this parent repository, and:

1. Update the submodule reference:

   ```bash
   git submodule update --remote
   ```

2. Commit the updated submodule reference to the main repository:

   ```bash
   git add .
   git commit -m "Update submodule to the latest commit"
   ```

## Conclusion

Submodules are a great way to use git for both individual repos, and groupings
of those repos. Submodules should come in handy for WP builds like this one, as
well as webapps with separate frontend and backend repos, and other similar
projects.
