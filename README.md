# Appium JavaScript UI Tests
This project demonstrates end-to-end ownership of a mobile test solution — from building the MAUI app in [maui-test-app](https://github.com/KarlTaylor908/maui-test-app) and designing the automation framework in JavaScript.

## Features:
- Mobile UI automation using Appium
- JavaScript test framework with WebDriverIO
-  Page Object Model (POM)
-  Scalable test structure

## Tests:
- Add Item
- Delete Item
- No Internet Connection

## Project Structure:
- test/ # Page Object Model structure (POM)
- test/ spec / # UI tests (.js)
- wdio.conf.js

  ## Instructions on Use
  ### 1) Prerequisite
  - Node.js / NPM
  - Appium Server
  - Android Automation Driver installed
  - Android emulator or physical device
  - .NET MAUI demo app installed (.apk). Can be installed via the releases - https://github.com/KarlTaylor908/appium-ui-js-tests/releases/tag/v1.0

  ### 2) Run Tests
  -  npx wdio run wdio.conf.js     
