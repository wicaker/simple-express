# Simple-Rest

### PLEASE COMPLETELY READ THESE INFORMATION FIRST!!

---

## Main Tech stacks

    * MySql as main database engine
    * NodeJS as server runner
    * Express as server framework
    mobile use general REST API)
    * Sequelize as database ORM
    * Json Web Token aka JWT as authentication

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1.  Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
    Required version:
    ```
    "node": ">= 9.0.0"
    ```
2.  Install your dependencies

    ```
    cd path/to/rest-hellojasa; npm install
    ```

3.  Configure things

    > Create .env file in root directory of the project

    Write this in `.env` file

    #### .env

    ```
        SERVER_PORT=9001
        DEV_HOST=127.0.0.1
        DEV_USER={your_mysql_username}
        DEV_PASS={your_mysql_password}
        DEV_DATABASE=simple-rest
    ```

4.  Migrate database using sequelize
    Run these commands in order

    ### If you have sequelize installed global

    ```
    sequelize db:create
    ```

    ```
    sequelize db:migrate
    ```

    ### If you have been not installing sequelize global

    ```
    node_modules/.bin/sequelize db:create
    ```

    ```
    node_modules/.bin/sequelize db:migrate
    ```

6.  Start your app

    ```
    npm start
    ```

## Testing

Simply run `npm run test` and all your tests in the `test/` directory will be run.

## Heroku App URL:
https://hellojasa-restapi.herokuapp.com/

## Postman API Docs:
https://documenter.getpostman.com/view/9245591/SVzw4LVv

## License

Copyright (c) 2019
