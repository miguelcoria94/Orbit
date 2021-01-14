from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Account_Transfers

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
