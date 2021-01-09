from app.models import db, Savings_Account, User

def seed_savings_account():
    demo = Savings_Account(balance=1000, user_id=User.query.filter_by(username='Demo').first().id)

    db.session.add(demo)

    db.session.commit()


def undo_savings_account():
    db.session.execute('TRUNCATE savings_account;')
    db.session.commit()
