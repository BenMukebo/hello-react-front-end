# Getting Started with Create React App


## Description

> Now that you're familiar with Rails and React, it's time to put them together in a new kind of 'Hello World!' app. This exercise is going to have you create a React front-end with a Rails back-end and connect them to display a random message.


## Learning objectives

- Implement a connection between a Ruby on Rails back-end and React front-end.
- Understand pros and cons of different approaches of connecting Ruby on Rails back-end with React front-end.


## Getting Started

To get a local copy for this project and running follow these simple example steps.


## Setup

### Creating the hello-rails-react

```bash
$   rails new hello-rails-back-end --api --database=postgresql
$   cd hello-rails-back-end # Move into the application directory
```

```bash
$   npx create-react-app@latest hello-react-front-end
$   cd  hello-react-front-end # Move into the application directory
```


- Now run these commands to install everything.

```bash
$   bundle install
$   rails webpacker:install
$   rails new rails-react-tutorial --webpack=react -d=postgresql
$   rails webpacker:install:react
$   rails generate react:install
$   yarn install
```

### Clone this repository

```bash
$ https://github.com/BenMukebo/hello-react-front-end.git
$ cd hello-react-front-end
```

### Create the database

```bash
$   rails db:create   # or
$   rake db:create
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

`https://github.com/facebook/create-react-app/issues/11816`






### Install linter and 

- Rubocop gem

```bash
$  bundle init
$  bundle install
```

- ESLint

```bash
$  npm install --save-dev eslint@7.x eslint-config-airbnb@18.x eslint-plugin-import@2.x eslint-plugin-jsx-a11y@6.x eslint-plugin-react@7.x eslint-plugin-react-hooks@4.x @babel/eslint-parser@7.x @babel/core@7.x  @babel/plugin-syntax-jsx@7.x  @babel/preset-react@7.x @babel/preset-react@7.x

```

- Stylelint package

```bash
$  npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x

```

- Run linter

```bash
$  rubocop .
$  npx eslint .
$  npx stylelint "**/*.{css,scss}" 
```

- In auto-correct mode, RuboCop will try to automatically fix offenses:

```bash
$  rubocop -A # or
$  rubocop --auto-correct-all
$  npx eslint . --fix 
$  npx stylelint "**/*.{css,scss}" --fix 
```


## Built With

This project is build with:

-  ![Ruby](https://img.shields.io/badge/-Ruby-000000?style=flat&logo=ruby&logoColor=red)
-  ![Ruby on Rails](https://img.shields.io/badge/-Ruby_on_Rails-000000?style=flat&logo=ruby-on-rails&logoColor=blue)
- ![React](https://img.shields.io/badge/-React-000000?style=flat&logo=react)

## Authors

👤 **Ben Mukebo**

- GitHub: [@BenMukebo](https://github.com/BenMukebo)
- Twitter [@BenMukebo](https://twitter.com/BenMukebo)
- LinkedIn [BenMukebo](https://www.linkedin.com/in/kasongo-mukebo-ben-591720205/)

## 🤝 Contributor


Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/BenMukebo/hello-react-front-end/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Credit to [Gregoire Vella on Behance](https://www.behance.net/gregoirevella), the author of the original [design guidelines](https://www.behance.net/gallery/19759151/Snapscan-iOs-design-and-branding?tracking_source=)


## 📝 License

This project is [MIT](./MIT.md) licensed.
