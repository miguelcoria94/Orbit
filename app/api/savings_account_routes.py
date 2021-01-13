from flask import Blueprint, jsonify, session, request
from app.models import Savings_Account, User, Checkings_Account, Account_Transfers
from app.models import db

savings_account_routes = Blueprint('savings_account', __name__)


@savings_account_routes.route('/<int:id>')
def user_savings(id):
    balance = Savings_Account.query.filter(Savings_Account.user_id == id).first()
    return {'savings_balance': [balance.to_dict()]}


@savings_account_routes.route('', methods=['POST'])
def add_savings():
    user_id = request.json['currentUserId']
    balance = request.json['userBalance']

    new_savings = Savings_Account(balance, user_id)

    db.session.add(new_savings)
    db.session.commit()

    return {"id": new_savings.id}


@savings_account_routes.route('/transfer-to-checkings', methods=['PUT'])
def transferToCheckings():
    currentUserId = request.json["userId"]
    amountToTransfer = request.json["checkingsTransferAmount"]

    currentUser = Savings_Account.query.filter(
        Savings_Account.user_id == currentUserId).one()
    currentUser.balance = int(currentUser.balance) - int(amountToTransfer)
    currentUserCheckings = Checkings_Account.query.filter(
        Checkings_Account.user_id == currentUserId).one()
    currentUserCheckings.balance = int(currentUserCheckings.balance) + int(amountToTransfer)

    new_transfer = Account_Transfers(amount=amountToTransfer, user_id=currentUserId, receiving_account="checkings", sending_account="savings")

    db.session.add(currentUser)
    db.session.add(new_transfer)
    db.session.add(currentUserCheckings)
    db.session.commit()

    return "hello"
