REM GIT MENU

ECHO OFF

:MENU
ECHO gc - COMMIT
ECHO gp - PUSH
ECHO gf - FETCH
ECHO gr - RESET
ECHO gi - INIT
ECHO rs - RUN
ECHO x - EXIT
ECHO.

SET /P M=": " 
IF %M%==gc GOTO COMMIT
IF %M%==gp GOTO PUSH
IF %M%==gf GOTO FETCH
IF %M%==gr GOTO RESET
IF %M%==gi GOTO INIT
IF %M%==rs GOTO RUN
IF %M%==x GOTO EOF

:COMMIT
git log --oneline
SET /P Msg="Commit: "
git add .
git commit -m "%Msg%"
ECHO.
GOTO MENU

:PUSH
git log --oneline
SET /P Msg="Commit: "
git add .
git commit -m "%Msg%"
git push --set-upstream origin master
ECHO.
GOTO MENU

:FETCH
git fetch --all
git reset --hard origin/master
ECHO.
GOTO MENU

:RESET
git checkout --orphan temp_branch
git add .
git commit -am "start"
git branch -d master
git branch -m master
git push -f origin master
ECHO.
GOTO MENU

:INIT
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/bequietsoft/freespace.git
git push --set-upstream origin master
npm init 
npm install --save-dev nodemon
npm install express
ECHO.
GOTO MENU

:RUN
npm run dev
ECHO.
GOTO MENU

:EOF