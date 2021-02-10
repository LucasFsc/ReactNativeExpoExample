# React Native Expo example

Hi, welcome to my React Native example app using Expo. This app was made for presentation purposes.

## What's it about

This app covers basic concepts, making use of some important daily development libraries for React Native.

## So... how can I configure my app to looks like this?

Below you can find a list of commands and steps that will make the bed for you.

- First of all make sure you have [Expo CLI](https://expo.io/) installed, then start your app:

  ```sh
  expo init my-project
  ```

- There are some important configs and plugins you would like to add into your app:

  - [eslint](https://eslint.org/)
  - [prettier](https://prettier.io/)
  - [babel](https://babeljs.io/)

  So, follow the next commands:

  ```sh
  yarn add eslint -D

  yarn eslint --init
  ```

  To select the proper configuration check out this [tutorial](https://henriquetavares.com/pt-br/setting-eslint-on-reactjs-and-react-native/).
  Then run:

  ```sh
  yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
  ```

  Also add [babel-plugin-root-import](https://www.npmjs.com/package/babel-plugin-root-import) & [eslint-import-resolver-babel-plugin-root-import](https://github.com/unconfident/eslint-import-resolver-babel-plugin-root-import) this will make your imports more clean and save you some time:

  ```sh
  yarn add babel-plugin-root-import eslint-import-resolver-babel-plugin-root-import -D
  ```

  After all, my configuration files looks like:

  <details><summary>.eslintrc.js</summary>
    <p>

  ```js
  module.exports = {
    env: {
      browser: true,
      es6: true
    },
    extends: ['airbnb', 'prettier', 'prettier/react'],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
      __DEV__: 'readonly'
    },
    parser: 'babel-eslint',
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 2018,
      sourceType: 'module'
    },
    plugins: ['react', 'prettier'],
    rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
      'import/prefer-default-export': 'off',
      'no-param-reassign': 'off',
      'no-console': ['error', { allow: ['tron'] }],
      'react/no-unescaped-entities': 'off',
      'react/jsx-props-no-spreading': 'off'
    },
    settings: {
      'import/resolver': {
        'babel-plugin-root-import': {
          rootPathPrefix: '~',
          rootPathSuffix: 'src'
        }
      }
    }
  }
  ```

    </p>
  </details>

  <details><summary>.prettierrc</summary>
    <p>

  ```json
  {
    "singleQuote": true,
    "trailingComma": "none",
    "semi": false
  }
  ```

    </p>
  </details>

  <details><summary>babel.config.js</summary>
    <p>

  ```js
  module.exports = (api) => {
    api.cache(true)
    return {
      presets: ['babel-preset-expo'],
      plugins: [
        [
          'babel-plugin-root-import',
          {
            rootPathSuffix: './src',
            rootPathPrefix: '~/'
          }
        ]
      ]
    }
  }
  ```

    </p>
  </details>

  <br/>

- Then select your visual framework, mine was [React Native Elements](https://reactnativeelements.com/docs/), and follow its instructions.

- For navigation our old friend [React Navigation](https://reactnavigation.org/).

- Also, add [styled-components](https://styled-components.com/) & [styled-system](https://styled-system.com/) to give it a charm:

  ```sh
  yarn add styled-components styled-system
  ```

## What do I do next?

Your imagination is the limit (cliche... but seriously), now that you know how to configure the basics of a React Native App with Expo from ground up, feel free to test your limits and learn things by yourself.