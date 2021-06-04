# Applied JavaScript Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Applied JavaScript**. During this sprint, you studied **DOM and components**. In your challenge this week, you will demonstrate your mastery of these skills by creating **an online Lambda newspaper**.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge.

## Project Set Up - DONE

- [ ] Fork and clone the repo. Delete your old fork from Github first if you are repeating this Unit.
- [ ] Open the assignment in Canvas and click on the "Set up git" option.
- [ ] Follow instructions to set up Codegrade's Webhook and Deploy Key.
- [ ] Push your first commit: `git commit --allow-empty -m "first commit" && git push`.
- [ ] Check to see that Codegrade has accepted your git submission.

For a step-by-step on setting up Codegrade see [this guide.](https://www.notion.so/lambdaschool/Submitting-an-assignment-via-Code-Grade-A-Step-by-Step-Walkthrough-07bd65f5f8364e709ecb5064735ce374)

## Project Instructions

### Introduction

You are going to create a Lambda Newspaper. Your job is going to be to create the components that make up the newspaper's home page.

In meeting the minimum viable product (MVP) specifications listed below, your project should look similar to the image linked below:

[Lambda Times](https://tk-assets.lambdaschool.com/cac4803c-6e8f-4846-be0e-b20d82a34a73_lambda-times.png)

### Instructions

- [ ] Navigate to the root of the project with your command line.
- [ ] Run `npm install` to download the dependencies listed in the `package.json` file.
- [ ] Run `npm start` to compile the project and serve it.
- [ ] Navigate Chrome to the URL indicated in the output of the `npm start` command.
- [ ] In a separate terminal, run `npm test` to run tests.

**Steps Required for MVP:**

- [ ] Step 0 is to link `src/index.js` to the `src/index.html` file using a script tag.
- [ ] Steps 1 and 2 are explained inside the `src/components/header.js` file.
- [ ] Steps 3 and 4 are explained inside the `src/components/tabs.js` file.
- [ ] Steps 5 and 6 are explained inside the `src/components/card.js` file.

**Important Notes:**

- Please **do not move or rename existing files** or folders.
- Careful adding your script tag in Step 0: the code inside `index.js` needs the DOM to be fully built before executing.
- Careful if you choose to install Axios using another script tag: the order in which script tags execute is important.
- If your development server stops "auto reloading", manually kill it with `CTRL+C` and restart it.
- Do not change the `package.json` file except to install libraries with NPM (Axios is _already_ in the `package.json`).
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and polish your work, including spell-checking and grammar-checking.
- It is better to submit a challenge that meets MVP than one that attempts too much and does not.

**Stretch Goals:**

**IMPORTANT:** Work on stretch goals in a **new branch**. You can branch off of `<firstName-lastName>` by executing `git checkout -b stretch`.

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

- [ ] Use the tabs at the top of the page to filter articles by topic.

## Submission format

- [ ] Submit via Codegrade by committing and pushing any new changes.
- [ ] Create a pull request to merge `<firstName-lastName>` branch into `main`.
- [ ] Please don't merge your own pull request and make sure **you are on your own repo**.
- [ ] Check Codegrade for automated feedback.
- [ ] Check Codegrade in the days following the Sprint Challenge for reviewer feedback.
- [ ] Any changes pushed after the deadline will not receive any feedback.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. What is the DOM? 
Defined as a Document Object Model. DOM defines a standard for accessing documents. When a web page loads, first the HTML is read and built. The browser parses and builds a model for the page using JavaScript. This model is a JavaScript Object. DOM is built as a Data Structure known as a tree with parent elements and nested child elements. Though, each child element of the DOM can also be its own tree with nested child elements. When the page is build developers can access the DOM as a JS object document.


2. What is an event? 
Javascript allows for code to be executed when events are detected. Events notify code of changes that may effect execution. Each event is represented by an object that is based on the Event interface that also may have additional custom fields or functions that provide information about what happened. 

3. What is an event listener?
Once an element is selected .addEventListener can be applied to that element. .addEventListener takes two arguments with the first being an event to listen for along with a second being the callback to initiate when that event is triggered; i.e.: "element.addEventListener('click', callback);" with a mouse click being the event thus making the web page interactive.

4. Why would we convert a NodeList into an Array?
The native JavaScript ES6 release brought a handful of helpful methods for working with arrays: Array.forEach(), Array.every(), Array.some(), Array.filter(), and more. Unfortunately, we can’t use any of these with the elements you get back when using querySelectorAll() because they would return a NodeList is not an array.

5. What is a component?
Components are reuseable blocks of code made up of HTML, CSS and or JavaScript.