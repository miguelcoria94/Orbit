from flask import Blueprint, jsonify, session, request
from app.models import Savings_Account, User
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
