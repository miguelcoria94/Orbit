from .db import db
from .user import User


class Account_Transfers(db.Model):
    __tablename__ = 'account_transfers'

    id = db.Column(db.Integer, primary_key=True)
    amount = db.Column(db.Integer, nullable=False)
    receiving_account = db.Column(db.String(255), nullable=False, unique=False)
    sending_account = db.Column(db.String(255), nullable=False, unique=False)
    date = db.Column(db.DateTime(timezone=True),
                     server_default=db.func.now(), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.id'), nullable=False, unique=True)

    user = db.relationship('User', back_populates='account_transfers', )

    def __init__(self, amount, user_id, receiving_account, sending_account):
        self.amount = amount
        self.user_id = user_id
        self.receiving_account = receiving_account
        self.sending_account = sending_account


    def to_dict(self):
        return {
        "id": self.id,
        "amount": self.amount,
        "user_id": self.user_id,
        "receiving_account": self.receiving_account,
        "sending_account": self.sending_account,
        "date": self.date
        }
