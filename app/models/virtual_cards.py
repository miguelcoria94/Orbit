from .db import db
from .user import User


class Virtual_Cards(db.Model):
    __tablename__ = 'virtual_cards'

    id = db.Column(db.Integer, primary_key=True)
    amount = db.Column(db.Integer, nullable=False)
    merchant = db.Column(db.String(255), nullable=False, unique=False)
    status = db.Column(db.String(255), nullable=False, unique=False)
    date = db.Column(db.DateTime(timezone=True),
                     server_default=db.func.now(), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.id'), nullable=False, unique=True)

    user = db.relationship('User', back_populates='virtual_cards', )

    def __init__(self, amount, user_id, merchant, status):
        self.amount = amount
        self.user_id = user_id
        self.merchant = merchant
        self.status = status


    def to_dict(self):
        return {
            "id": self.id,
            "amount": self.amount,
            "user_id": self.user_id,
            "merchant": self.merchant,
            "status": self.status,
            "date": self.date
        }
