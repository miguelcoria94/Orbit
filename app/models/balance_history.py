from .db import db
from .user import User


class Balance_History(db.Model):
    __tablename__ = 'balance_history'

    id = db.Column(db.Integer, primary_key=True)
    balance = db.Column(db.Integer, nullable=False)
    date = db.Column(db.DateTime(timezone=True),
                     server_default=db.func.now(), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.id'), nullable=False)

    user = db.relationship('User', back_populates='balance_history', )

    def __init__(self, balance, user_id,):
        self.balance = balance
        self.user_id = user_id

    def to_dict(self):
        return {
            "id": self.id,
            "amount": self.balance,
            "user_id": self.user_id,
            "date": self.date,
        }
