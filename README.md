# Orbit
  
<!-- ![heroku](https://github.com/harshcut/harshcut/blob/master/static/heroku.svg) 
![photoshop](https://github.com/harshcut/harshcut/blob/master/static/photshop.svg) 
![postgresql](https://github.com/harshcut/harshcut/blob/master/static/postgresql.svg) 
![python](https://github.com/harshcut/harshcut/blob/master/static/python.svg) 
![react](https://github.com/harshcut/harshcut/blob/master/static/react.svg) 
![vscode](https://github.com/harshcut/harshcut/blob/master/static/vscode.svg) -->
## Home

Personal Finance & Banking App
<br>

A live version of the application can be found [here](https://orbit-banking.herokuapp.com/).

![user auth gif](https://github.com/miguelcoria94/Orbit/blob/main/readme-images/homepage.png)

## Database Design

![user auth gif](https://github.com/miguelcoria94/Orbit/blob/main/readme-images/drawSQL-export-2021-01-19_08_58.png)

```py
from .db import db
from .user import User
from .savings_account import Savings_Account
from .checkings_account import Checkings_Account
from .account_transfers import Account_Transfers
from .virtual_cards import Virtual_Cards
from .balance_history import Balance_History
from .bug_report import Bug_Report
from .expenses import Expenses
```

## User Authenication

Users can securely create an account using our login and logout feature.  [CHECK IT OUT](https://github.com/miguelcoria94/Orbit/tree/main/react-app/src/components/auth)

![user auth gif](https://github.com/miguelcoria94/Orbit/blob/main/readme-images/login.png)
![user auth gif](https://github.com/miguelcoria94/Orbit/blob/main/readme-images/signup.png)

```py
from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  firstname = db.Column(db.String(40), nullable=False, unique=False)
  lastname = db.Column(db.String(40), nullable=False, unique=False)
  username = db.Column(db.String(40), nullable = False, unique =True)
  email = db.Column(db.String(255), nullable = False, unique =True)
  hashed_password = db.Column(db.String(255), nullable=False)
  
  savings_account = db.relationship('Savings_Account', back_populates='user', cascade="all, delete, delete-orphan")
  checkings_account = db.relationship('Checkings_Account', back_populates='user', cascade="all, delete, delete-orphan")
  account_transfers = db.relationship('Account_Transfers', back_populates='user', cascade="all, delete, delete-orphan")
  virtual_cards = db.relationship('Virtual_Cards', back_populates='user', cascade="all, delete, delete-orphan")
  balance_history = db.relationship('Balance_History', back_populates='user', cascade="all, delete, delete-orphan")
  bug_report = db.relationship('Bug_Report', back_populates='user', cascade="all, delete, delete-orphan")
  expenses = db.relationship('Expenses', back_populates='user', cascade="all, delete, delete-orphan")


  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email
    }
```

## Dashboard

Once a user logs in they are taken to there dashboard where they can get an overview of their account. [CHECK IT OUT](https://github.com/miguelcoria94/Orbit/blob/main/react-app/src/components/Dashboard.js)

![user auth gif](https://github.com/miguelcoria94/Orbit/blob/main/readme-images/dashboard.png)

```js
return (
    <Container fluid className="dashboard-wrapper">
      <Row>
        <Col className="col-3">
          <SideNav
            currentUser={currentUser}
            setAuthenticated={setAuthenticated}
          />
        </Col>
        <Col className="col-3">
          <CheckingsCard currentUserId={currentUserId} />
          <div className="chart-div">
            <LineChart
              id="users-chart"
              width="64vw"
              height="100%"
              colors={["rgb(8, 255, 29)", "#ffffff"]}
              label="Value"
              data={actualData}
              prefix="$"
            />
          </div>
        </Col>
        <Col col-3>
          <SavingsCard currentUserId={currentUserId} />
        </Col>
        <Col col-3 className="last-div">
          <QuickPay currentUserId={currentUserId} />
        </Col>
      </Row>
    </Container>
  );
```

## Transfers

Once a user logs in they can transfer between savings and checkings account. Users also have the ability to send eachother money via email. [CHECK IT OUT](https://github.com/miguelcoria94/Orbit/blob/main/react-app/src/components/QuickPay.js)

![user auth gif](https://github.com/miguelcoria94/Orbit/blob/main/readme-images/transfers.png)

```py
@checkings_account_routes.route('/transfer', methods=['PUT'])
def quick_pay():
    currentUserId = request.json["currentUserId"]
    recipientEmail = request.json["recipientEmail"]
    senderId = request.json["senderId"]
    amount = request.json["amount"]

    currentUser = Checkings_Account.query.filter(Checkings_Account.user_id == currentUserId).one()
    currentUser.balance = int(currentUser.balance) - int(amount)
    recipient = User.query.filter(User.email == recipientEmail).one()
    recipient_checkings = Checkings_Account.query.filter(Checkings_Account.user_id == recipient.id).one()
    recipient_checkings.balance = int(recipient_checkings.balance) + int(amount)

    update_history = Balance_History(balance=currentUser.balance, user_id=currentUserId)
    update_history_receiving = Balance_History(balance=recipient_checkings.balance, user_id=recipient.id)


    db.session.add(update_history)
    db.session.add(update_history_receiving)
    db.session.add(currentUser)
    db.session.add(recipient)
    db.session.commit()
```

## Virtual Cards

Once a user logs in they have the ability to create virtual cards to keep there personal information safe from merchants. If the user decides to delete a virtual card they created the balance of that card will be added back to their checkings account. [CHECK IT OUT](https://github.com/miguelcoria94/Orbit/blob/main/react-app/src/components/VirtualCardForm.js)

![user auth gif](https://github.com/miguelcoria94/Orbit/blob/main/readme-images/vc.png)

```py
@checkings_account_routes.route('/virtual-card', methods=['POST'])
def createVirtualCard():
    amount1 = request.json["amount"]
    cardNumber1 = request.json["cardNumber"]
    currentUser = request.json["currentUserId"]
    merchant1 = request.json["merchant"]
    currentBalance = request.json["currentBalance"]

    currentUserBalance = Checkings_Account.query.filter(
        Checkings_Account.user_id == currentUser).one()
    currentUserBalance.balance = int(currentUserBalance.balance) - int(amount1)

    new_virtual_card = Virtual_Cards(amount=amount1, user_id=currentUser, card_number=cardNumber1, merchant=merchant1, status="active")

    update_history = Balance_History(balance=currentUserBalance.balance, user_id=currentUser)


    db.session.add(update_history)
    db.session.add(new_virtual_card)
    db.session.add(currentUserBalance)
    db.session.commit()

    return {"success": True}
```

## Report A Bug

Once a user logs in they have the ability to report any bugs they come across. Currently the reports are saved to the database. In the future I will create an admin account where an admin can view all the bugs and update the user on the status. [CHECK IT OUT](https://github.com/miguelcoria94/Orbit/blob/main/react-app/src/components/BugReport.js)

![user auth gif](https://github.com/miguelcoria94/Orbit/blob/main/readme-images/bug.png)

```py
@user_routes.route('/bug-report', methods=['POST'])
def newBug():
    firstName = request.json["firstName"]
    lastName = request.json["lastName"]
    userEmail = request.json["userEmail"]
    title1 = request.json["title"]
    body1 = request.json["body"]
    currentUserId = request.json["currentUserId"]

    new_bug = Bug_Report(first_name=firstName, last_name=lastName, email=userEmail, title=title1, body=body1, user_id=currentUserId)

    db.session.add(new_bug)
    db.session.commit()
    return {"success": True}
```

## Expense Tracking

Once a user logs in they can begin tracking expenses. A pie chart is updated everytime they add an expense so that the user can visualize there spending. [CHECK IT OUT](https://github.com/miguelcoria94/Orbit/blob/main/react-app/src/components/ExpenseTracking.js)

![user auth gif](https://github.com/miguelcoria94/Orbit/blob/main/readme-images/expenses.png)

```py
@user_routes.route('/add-expense', methods=['POST'])
def newExpense():
    amount1 = request.json["amount"]
    expenseType1 = request.json["expenseType"]
    merchant1 = request.json["merchant"]
    userId1 = request.json["currentUserId"]

    currentUserBalance = Checkings_Account.query.filter(
        Checkings_Account.user_id == userId1).one()
    currentUserBalance.balance = int(currentUserBalance.balance) - int(amount1)

    update_history = Balance_History(
        balance=currentUserBalance.balance, user_id=userId1)


    new_expense = Expenses(amount=amount1, expense_type=expenseType1,
                         merchant=merchant1, user_id=userId1, status="active")

    db.session.add(update_history)
    db.session.add(currentUserBalance)
    db.session.add(new_expense)
    db.session.commit()
    return {"success": True}
```

## Looking forward - goals

Once a user logs in they will soon be able to set goals and visualize there progress as they fund each goal.

![user auth gif](https://github.com/miguelcoria94/Orbit/blob/main/readme-images/goals.png)

## 404 Page

Fun 404 page when a user visits a non-existent page

![user auth gif](https://github.com/miguelcoria94/Orbit/blob/main/readme-images/404.png)

```js
import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "bootstrap/dist/css/bootstrap.min.css";
import spaceman4 from "../images/space.png"
import Container from "react-bootstrap/Container";

const LogoutButton = ({ }) => {
    return (
      <Jumbotron fluid className="bg-404 ">
        <Container fluid className="fluid image container">
          <img
            alt="spaceman"
            src={spaceman4}
            height={300}
            className="animate__animated animate__slideInRight image"
          />
        </Container>
        <h1 className="title-404">Oh, ship...</h1>
        <h1 className="title-404">
          Houston, we have a problem.
        </h1>
        <a href="/" className="text-center test-404">
          404 Page Not Found - Go back home
        </a>
        <div className="inv-box"></div>
      </Jumbotron>
    );
};

export default LogoutButton;
```

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
