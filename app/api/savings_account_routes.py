from flask import Blueprint, jsonify, session, request
from app.models import Savings_Account, User
from app.models import db

savings_account_routes = Blueprint('savings_account', __name__)


@savings_account_routes.route('/<int:id>')
def user_savings(id):
    balance = Savings_Account.query.get(id)
    return {'savings_balance': balance.to_dict()}
