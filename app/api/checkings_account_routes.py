from flask import Blueprint, jsonify, session, request
from app.models import Checkings_Account, User, Savings_Account, Account_Transfers, Virtual_Cards, Balance_History, Expenses
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
    update_history = Balance_History(balance, user_id)

    db.session.add(new_checkings)
    db.session.add(update_history)
    db.session.commit()

    return {"id": new_checkings.id}



@checkings_account_routes.route('/<int:id>', methods=['PUT'])
def quick_load(id):
    user_id = request.json['currentUserId']
    weight = Checkings_Account.query.filter(Checkings_Account.user_id == user_id).one()
    newbalance = request.json['newBalance']
    update_history = Balance_History(balance=newbalance, user_id=user_id)

    weight.balance = newbalance
    

    db.session.add(update_history)
    db.session.add(weight)
    db.session.commit()

    return jsonify(weight.to_dict())


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

    return "hello"


@checkings_account_routes.route('/transfer-to-savings', methods=['PUT'])
def transferToSavings():
    currentUserId = request.json["userId"]
    amountToTransfer = request.json["savingsTransferAmount"]

    currentUser = Checkings_Account.query.filter(
        Checkings_Account.user_id == currentUserId).one()
    currentUser.balance = int(currentUser.balance) - int(amountToTransfer)
    currentUserSavings = Savings_Account.query.filter(
        Savings_Account.user_id == currentUserId).one()
    currentUserSavings.balance = int(currentUserSavings.balance) + int(amountToTransfer)

    new_transfer = Account_Transfers(amount=amountToTransfer, user_id=currentUserId, receiving_account="savings", sending_account="checkings")

    update_history = Balance_History(balance=currentUser.balance, user_id=currentUserId)


    db.session.add(update_history)
    db.session.add(currentUser)
    db.session.add(new_transfer)
    db.session.add(currentUserSavings)
    db.session.commit()

    return {"success": True}

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


@checkings_account_routes.route('/update-virtual-card', methods=['PUT'])
def updateVirtualCard():
    amount = request.json["cardBalance"]
    cardId = request.json["cardId"]
    userId = request.json["userId"]

    cardToUpdate = Virtual_Cards.query.filter(
        Virtual_Cards.id == cardId).one()

    currentUserBalance = Checkings_Account.query.filter(
        Checkings_Account.user_id == userId).one()
    currentUserBalance.balance = int(currentUserBalance.balance) + int(amount)

    cardToUpdate.status = 'disabled'

    update_history = Balance_History(balance=currentUserBalance.balance, user_id=userId)

    db.session.add(update_history)
    db.session.add(currentUserBalance)
    db.session.add(cardToUpdate)
    db.session.commit()
    return {"success": True}


@checkings_account_routes.route('/delete-expense', methods=['PUT'])
def deleteExpense():
    amount = request.json["cardBalance"]
    cardId = request.json["id"]
    userId = request.json["userId"]

    expenseToDelete = Expenses.query.filter(
        Expenses.id == cardId).one()

    expenseToDelete.status = "deleted"

    currentUserBalance = Checkings_Account.query.filter(
        Checkings_Account.user_id == userId).one()
    currentUserBalance.balance = int(currentUserBalance.balance) + int(amount)

    update_history = Balance_History(
        balance=currentUserBalance.balance, user_id=userId)

    db.session.add(update_history)
    db.session.add(currentUserBalance)
    db.session.delete(expenseToDelete)
    db.session.commit()
    return {"success": True}
