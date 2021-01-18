from app.models import db, Checkings_Account, User, Account_Transfers


def seed_account_transfers():
    return none


def undo_account_transfers():
    db.session.execute('TRUNCATE acccount_transfers;')
    db.session.commit()
