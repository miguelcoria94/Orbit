from .db import db
from .user import User


class Bug_Report(db.Model):
    __tablename__ = 'bug_report'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(255), nullable=False)
    last_name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=False)
    date = db.Column(db.DateTime(timezone=True),
                     server_default=db.func.now(), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.id'), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    body = db.Column(db.String(2000), nullable=False)

    user = db.relationship('User', back_populates='bug_report', )

    def __init__(self, first_name, last_name, user_id, email, title, body):
        self.first_name = first_name
        self.last_name = last_name
        self.user_id = user_id
        self.email = email
        self.title = title
        self.body = body

    def to_dict(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "second_name": self.second_name,
            "user_id": self.user_id,
            "email": self.email,
            "title": self.title,
            "body": self.body,
            "date": self.date
        }
