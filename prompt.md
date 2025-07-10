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
psql postgres
psql -U postgres -h localhost -p 5432 -d radicle_db

stop postgresql homebrew server:
brew services stop postgresql

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



https://icons8.com/icons/set/search--author-kmg-design
https://icons8.com/icons/set/cart--author-kmg-design
https://icons8.com/icons/set/pause-button-circle--author-kmg-design
https://icons8.com/icon/gFGDJCRsV8Mv/play
https://icons8.com/icons/set/backward-button-circular--red
https://icons8.com/icons/set/music-streaming
