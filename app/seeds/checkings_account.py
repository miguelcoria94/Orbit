from app.models import db, Checkings_Account, User


def seed_checkings_account():
    demo = Checkings_Account(
        balance=500, user_id=User.query.filter_by(username='Demo').first().id)

    db.session.add(demo)

    db.session.commit()


def undo_checkings_account():
    db.session.execute('TRUNCATE checkings_account;')
    db.session.commit()
