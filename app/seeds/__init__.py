from flask.cli import AppGroup
from .users import seed_users, undo_users
from .savings_account import seed_savings_account, undo_savings_account
from .checkings_account import seed_checkings_account, undo_checkings_account
from .account_transfers import seed_account_transfers, undo_account_transfers

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_savings_account()
    seed_checkings_account()
    seed_account_transfers()

    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_savings_account()
    undo_checkings_account()
    undo_account_transfers()
    # Add other undo functions here
