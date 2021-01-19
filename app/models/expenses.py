from .db import db
from .user import User


class Expenses(db.Model):
    __tablename__ = 'expenses'

    id = db.Column(db.Integer, primary_key=True)
    expense_type = db.Column(db.String(255), nullable=False)
    amount = db.Column(db.Integer, nullable=False)
    merchant = db.Column(db.String(255), nullable=False)
    date = db.Column(db.DateTime(timezone=True),
                     server_default=db.func.now(), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.id'), nullable=False)

    user = db.relationship('User', back_populates='expenses', )

    def __init__(self, expense_type, amount, merchant, user_id):
        self.expense_type = expense_type
        self.amount = amount
        self.merchant = merchant
        self.user_id = user_id

    def to_dict(self):
        return {
            "id": self.id,
            "expense_type": self.expense_type,
            "amount": self.amount,
            "merchant": self.merchant,
            "user_id": self.user_id,
            "date": self.date
        }
