from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  firstname = db.Column(db.String(40), nullable=False, unique=False)
  lastname = db.Column(db.String(40), nullable=False, unique=False)
  username = db.Column(db.String(40), nullable = False, unique =True)
  email = db.Column(db.String(255), nullable = False, unique =True)
  hashed_password = db.Column(db.String(255), nullable=False)
  
  savings_account = db.relationship('Savings_Account', back_populates='user', cascade="all, delete, delete-orphan")
  checkings_account = db.relationship('Checkings_Account', back_populates='user', cascade="all, delete, delete-orphan")
  account_transfers = db.relationship('Account_Transfers', back_populates='user', cascade="all, delete, delete-orphan")
  virtual_cards = db.relationship('Virtual_Cards', back_populates='user', cascade="all, delete, delete-orphan")
  balance_history = db.relationship('Balance_History', back_populates='user', cascade="all, delete, delete-orphan")


  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email
    }
