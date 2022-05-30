# firebase-deploy-multi-project

A simple node program for execute firebase deploy using a specif project alias between many firebase projects.

## 💾 Install 

`npm install firebase-deploy-multi-project --save-dev` or `yarn add firebase-deploy-multi-project -D`


## Configuration Guide
You can see how firebase use alias strategy on this link: https://firebase.google.com/docs/cli#project_aliases


## What this package does
Basically we concat three commands in a row:
```sh
$ firebase use --clear
$ firebase use [project_alias]
$ firebase deploy
```


## 📜 Help

```text
Usage: _ [options] <command> [...args]

Arguments:
  --alias [string]                Set the project alias to use
  --only [string]                 Set what service you want to deploy (firestore, functions, storage...)
  --token [string]                Set the firebase deploy token
```

## 📋 Contributing Guide

If you would like to write types, tests or improve this package, please sent your PR! :D  
