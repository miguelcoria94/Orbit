from flask import Blueprint, jsonify, session, request
from app.models import Checkings_Account, User
from app.models import db

checkings_account_routes = Blueprint('checkings_account', __name__)


@checkings_account_routes.route('/<int:id>')
def user_savings(id):
    balance = Checkings_Account.query.filter(Checkings_Account.user_id == id).first()
    return {'checkings_balance': [balance.to_dict()]}


@checkings_account_routes.route('', methods=['PUT'])
def add_checkings():
    user_id = request.json['currentUserId']
    balance = request.json['loadBalance']

    new_checkings = Checkings_Account(balance, user_id)

    db.session.add(new_checkings)
    db.session.commit()

    return {"id": new_checkings.id}



@checkings_account_routes.route('/<int:id>', methods=['PUT'])
def quick_load(id):
    user_id = request.json['currentUserId']
    weight = Checkings_Account.query.filter(Checkings_Account.user_id == user_id).one()
    newbalance = request.json['newBalance']

    weight.balance = newbalance

    db.session.add(weight)
    db.session.commit()

    return jsonify(weight.to_dict())


@checkings_account_routes.route('/transfer', methods=['PUT'])
def quick_pay():
    currentUserId = request.json["currentUserId"]
    recipientEmail = request.json["recipientEmail"]
    senderId = request.json["senderId"]
    amount = request.json["amount"]

    currentUserBalance = Checkings_Account.query.filter(Checkings_Account.user_id == currentUserId).one()

    currentUserBalance.balance = int(currentUserBalance.balance) - int(amount)

    db.session.add(currentUserBalance)
    db.session.commit()

    return "hello"
