from app.models import db, Checkings_Account, User, Account_Transfers


def seed_account_transfers():
    demo = Account_Transfers(
        amount=30,
        receiving_account="savings",
        sending_account="checkings",
        user_id=User.query.filter_by(username='Demo').first().id)
    demo1 = Account_Transfers(
        amount=40,
        receiving_account="checkings",
        sending_account="savings",
        user_id=User.query.filter_by(username='Demo').first().id)
    demo2 = Account_Transfers(
        amount=50,
        receiving_account="savings",
        sending_account="checkings",
        user_id=User.query.filter_by(username='Demo').first().id)

    db.session.add(demo)
    db.session.add(demo1)
    db.session.add(demo2)

    db.session.commit()


def undo_account_transfers():
    db.session.execute('TRUNCATE acccount_transfers;')
    db.session.commit()
