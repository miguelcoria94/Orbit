from .db import db
from .user import User


class Checkings_Account(db.Model):
    __tablename__ = 'checkings_account'

    id = db.Column(db.Integer, primary_key=True)
    balance = db.Column(db.Integer, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.id'), nullable=False, unique=True)

    user = db.relationship('User', back_populates='checkings_account', )

    def __init__(self, balance, user_id):
        self.balance = balance
        self.user_id = user_id

    def to_dict(self):
        return {
        "id": self.id,
        "balance": self.balance,
        "user_id": self.user_id
        }
