from .db import db
from .user import User

class Savings_Account(db.Model):
    __tablename__ = 'savings_account'

    id = db.Column(db.Integer, primary_key=True)
    balance = db.Column(db.Integer, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    user = db.relationship('User', back_populates='stories', )
    
    def __init__(self, balance, user_id):
        self.balance = balance
        self.user_id = user_id

    def to_dict(self):
        return {
        "id": self.id,
        "balance": self.balance,
        "user_id": self.user_id
        }
