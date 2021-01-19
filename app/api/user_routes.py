from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from app.models import User, Account_Transfers, Virtual_Cards, Balance_History, Bug_Report, Expenses, Checkings_Account
from app.models import db

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>/transfer-history')
def transfers(id):
    users = Account_Transfers.query.filter(id == Account_Transfers.user_id).order_by(Account_Transfers.date.desc()).all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>/virtual-cards')
def virtual_cards(id):
    users = Virtual_Cards.query.filter(id == Virtual_Cards.user_id).order_by(Virtual_Cards.date.desc()).all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>/balance-history')
def balance_history(id):
    users = Balance_History.query.filter(id == Balance_History.user_id).order_by(
        Balance_History.date.desc()).all()
    return {"history": [user.to_dict() for user in users]}


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


@user_routes.route('/<int:id>/expense-history')
def expense_history(id):
    users = Expenses.query.filter(id == Expenses.user_id).order_by(
        Expenses.date.desc()).all()
    return {"history": [user.to_dict() for user in users]}
