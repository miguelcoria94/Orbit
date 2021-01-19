<h1 align="center">
<img src="https://github.com/miguelcoria94/Orbit/blob/main/readme-images/Screen%20Shot%202021-01-06%20at%201.55.05%20PM.png" alt="orbit-logo">
<br>
  Documentation
</h1>
<h1 align="center">
  <img src="https://cdn.worldvectorlogo.com/logos/react.svg" alt="js-logo" width="50">
  <img src="https://i.ibb.co/d2HFVkR/kisspng-flask-by-example-web-framework-python-bottle-sebastian-estenssoro-5b6c0aa33b3b57-91701197153.png" alt="flask-logo" width="50">
  <img src="https://i.ibb.co/VpGfh8w/icons8-postgresql-96-1.png" alt="psql-logo" width="50">
  <img src="https://hakin9.org/wp-content/uploads/2019/08/connect-a-flask-app-to-a-mysql-database-with-sqlalchemy-and-pymysql.jpg" alt="sqlalchemy-logo" width="50">
  <img src="https://cdn.vox-cdn.com/thumbor/fbrTLtxuP2D29o8VJUaE-u3NKfU=/0x0:792x613/1200x800/filters:focal(300x237:426x363)/cdn.vox-cdn.com/uploads/chorus_image/image/59850273/Docker_logo_011.0.png" alt="sqlalchemy-logo" width="50">
</h1>

## Home

Personal Finance & Banking App
<br>

A live version of the application can be found [here](https://orbit-banking.herokuapp.com/).

![user auth gif](https://github.com/miguelcoria94/Orbit/blob/main/readme-images/homepage.png)

## Database Design

![user auth gif](https://github.com/miguelcoria94/Orbit/blob/main/readme-images/drawSQL-export-2021-01-19_08_58.png)

## User Authenication

Users can securely create an account using our login and logout feature.  [CHECK IT OUT](https://github.com/miguelcoria94/Orbit/tree/main/react-app/src/components/auth)

![user auth gif](https://github.com/miguelcoria94/Orbit/blob/main/readme-images/login.png)
![user auth gif](https://github.com/miguelcoria94/Orbit/blob/main/readme-images/signup.png)

## Dashboard

Once a user logs in they are taken to there dashboard where they can get an overview of their account. [CHECK IT OUT](https://github.com/miguelcoria94/Orbit/blob/main/react-app/src/components/Dashboard.js)

![user auth gif](https://github.com/miguelcoria94/Orbit/blob/main/readme-images/dashboard.png)

## Transfers

Once a user logs in they can transfer between savings and checkings account. Users also have the ability to send eachother money via email. [CHECK IT OUT](https://github.com/miguelcoria94/Orbit/blob/main/react-app/src/components/QuickPay.js)

![user auth gif](https://github.com/miguelcoria94/Orbit/blob/main/readme-images/transfers.png)

## Virtual Cards

Once a user logs in they have the ability to create virtual cards to keep there personal information safe from merchants. If the user decides to delete a virtual card they created the balance of that card will be added back to their checkings account. [CHECK IT OUT](https://github.com/miguelcoria94/Orbit/blob/main/react-app/src/components/VirtualCardForm.js)

![user auth gif](https://github.com/miguelcoria94/Orbit/blob/main/readme-images/vc.png)

## Report A Bug

Once a user logs in they have the ability to report any bugs they come across. Currently the reports are saved to the database. In the future I will create an admin account where an admin can view all the bugs and update the user on the status. [CHECK IT OUT](https://github.com/miguelcoria94/Orbit/blob/main/react-app/src/components/BugReport.js)

![user auth gif](https://github.com/miguelcoria94/Orbit/blob/main/readme-images/bug.png)

## Expense Tracking

Once a user logs in they can begin tracking expenses. A pie chart is updated everytime they add an expense so that the user can visualize there spending. [CHECK IT OUT](https://github.com/miguelcoria94/Orbit/blob/main/react-app/src/components/ExpenseTracking.js)

![user auth gif](https://github.com/miguelcoria94/Orbit/blob/main/readme-images/expenses.png)

## Looking forward - goals

Once a user logs in they will soon be able to set goals and visualize there progress as they fund each goal.

![user auth gif](https://github.com/miguelcoria94/Orbit/blob/main/readme-images/goals.png)

## Upcoming Features

- account locking feature
- user pin before any action
- notifications
- login history
- request from others
- mobile check deposits
- update password
- send a text on transaction
- bills due calender
- atm map
- tools




# Flask React Project

This is the backend for the Flask React project.

## Getting started

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

***
*IMPORTANT!*
   If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
   You can do this by running:

   ```bash
   pipenv lock -r > requirements.txt
   ```

*ALSO IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***

## Deploy to Heroku

1. Create a new project on Heroku
2. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres"
3. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)
4. Run

   ```bash
   heroku login
   ```

5. Login to the heroku container registry

   ```bash
   heroku container:login
   ```

6. Update the `REACT_APP_BASE_URL` variable in the Dockerfile.
   This should be the full URL of your Heroku app: i.e. "https://flask-react-aa.herokuapp.com"
7. Push your docker container to heroku from the root directory of your project.
   This will build the dockerfile and push the image to your heroku container registry

   ```bash
   heroku container:push web -a {NAME_OF_HEROKU_APP}
   ```

8. Release your docker container to heroku

   ```bash
   heroku container:release web -a {NAME_OF_HEROKU_APP}
   ```

9. set up your database:

   ```bash
   heroku run -a {NAME_OF_HEROKU_APP} flask db upgrade
   heroku run -a {NAME_OF_HEROKU_APP} flask seed all
   ```

10. Under Settings find "Config Vars" and add any additional/secret .env variables.

11. profit
