# multi-jsbook

> Multi-jsbook is an editor with high fuctonality to write code or articles through markdown text editor. The product free to install through [npm](https://www.npmjs.com/search?q=multi-jsbook).
> The code or text which you write in the browser will be saved on your computer. 
> There are many other features, witch you can read in the docs.

## Tools:
- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [ESbuild](https://esbuild.github.io/)
- [Babel](https://babeljs.io/)
- [Unpkg](https://unpkg.com/)
- Styles [bulma](https://bulma.io/)

## Docs

### npm commands
- npx multi-jsbook serve [-p || --port] [number] [filename] - to start working. Default values: 4050, notebook.js
- npm i -g multi-jsbook - to download it globaly
- multi-jsbook serve- if allready installed
- After serve command you will see the .js, in directory where you run the command, all changes in the cell will be saved there automaticly.

### code cell features
- the editor provides you access to all npm packages, you can just import them, example: import axios from 'axios'
- React components - you can build a react app, components etc. You will see the result in the preview window
- show() funciton accept every type of data to the preview window every variable/functuion/react component will share its values with other code cells

### Code editor
- It's a Markdown text editor, so use can use all features from the markdown
- There is a guide of [syntaxys](https://www.markdownguide.org/)
