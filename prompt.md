**Avoid conflicts, inconsistencies and redundancies.**
**Do not change anything else in the codebase.**
**Use best practices always.**
**Ask as many questions as you need to implement the task successfully.**
**Do not make any assumptions.**

**Do not make any changes to the codebase that are not directly related to the task.**

Routine Commands:
pip freeze > requirements.txt
python manage.py runserver
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py collectstatic
source .venv/bin/activate
pip install -r requirements.txt
brew services list | grep postgres -> checking if its running
pg_isready -> checking if its runnin



starting postgresql homebrew server:
brew services start postgresq
connect to postgresql server directly: 
psql postgres- checking if there is a postgresql server installed
psql -U postgres -h localhost -p 5432 -d radicle_db
psql --version checking the version

stop postgresql homebrew server:
brew services stop postgresql

uninstall postgress and remove it
brew uninstall --force postgresql@15
rm -rf /opt/homebrew/var/postgresql@15

-- Create the database for your project
CREATE DATABASE radicle_db;

-- Create a new user with a password for your Django app
CREATE USER radicle_user WITH PASSWORD 'your_strong_password_here';

-- Grant all necessary permissions to the new user
GRANT ALL PRIVILEGES ON DATABASE radicle_db TO radicle_user;

exit psql by typing \q

postgresql port: 5432

Once you see the postgres=# prompt, you are connected. Now, set a new password for your main user. Choose a strong password and save it somewhere secure.
sql
ALTER USER gardlyphiloctete WITH PASSWORD 'your_new_password';

check existing users:
\du
SELECT * FROM pg_user;

check code in shell:
python manage.py shell

uninstall postgresql and remove it with homebrew:
brew uninstall --force postgresql@15
rm -rf /opt/homebrew/var/postgresql@15
 brew uninstall removes the core application files, it often does not remove everything, especially user data or configuration files that might have been created outside of Homebrew's typical installation path. For a truly "complete" removal, you'll often need to do a few extra steps:

Stop the PostgreSQL Service: Before uninstalling, make sure the PostgreSQL server is not running. You can usually do this with brew services stop postgresql.

Remove Data Directory: PostgreSQL stores its databases and data in a separate directory (often /usr/local/var/postgres or /opt/homebrew/var/postgresql on newer macOS versions). brew uninstall will generally not delete this, to prevent accidental data loss. If you want to remove all your databases, you'll need to manually delete this directory (e.g., rm -rf /usr/local/var/postgres). Be very careful with this step as it will permanently delete all your PostgreSQL data.

Remove Log Files: There might be log files in a similar location (e.g., /usr/local/var/log/postgres.log).

Remove User-Specific Config Files: Check your home directory for files like ~/.psqlrc or ~/.psql_history.

check if postgress is running and how it started
ps aux | grep postgres

kill a running postgress with sudo
sudo kill -9 <PID>

brew uninstall postgresql
# Or for a specific version:
brew uninstall postgresql@14
# You can also use --zap to try and remove more associated files, though data usually remains:
brew uninstall --zap postgresql

https://icons8.com/icons/set/search--author-kmg-design
https://icons8.com/icons/set/cart--author-kmg-design
https://icons8.com/icons/set/pause-button-circle--author-kmg-design
https://icons8.com/icon/gFGDJCRsV8Mv/play
https://icons8.com/icons/set/backward-button-circular--red
https://icons8.com/icons/set/music-streaming
