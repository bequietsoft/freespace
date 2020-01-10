REM GIT MENU

ECHO OFF

:MENU
ECHO 1 - COMMIT`N`PUSH
ECHO 2 - FETCH
ECHO 3 - CLEAR
ECHO 4 - INIT/COMMIT/PUSH
ECHO 5 - NODEMON
ECHO 0 - EXIT
ECHO.

SET /P M=": " 
IF %M%==1 GOTO PUSH
IF %M%==2 GOTO FETCH
IF %M%==3 GOTO CLEAR
IF %M%==4 GOTO INIT
IF %M%==5 GOTO NODEMON
IF %M%==0 GOTO EOF

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

:CLEAR
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
git commit -m "0000"
git remote add origin https://github.com/bequietsoft/fart
git push --set-upstream origin master
ECHO.
GOTO MENU

:NODEMON
nodemon
ECHO.
GOTO MENU

:EOF