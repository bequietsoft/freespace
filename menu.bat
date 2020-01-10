REM GIT MENU

ECHO OFF

:MENU
ECHO 1 - COMMIT
ECHO 2 - PUSH
ECHO 3 - FETCH
ECHO 4 - CLEAR
ECHO 5 - INIT
ECHO 6 - NODEMON
ECHO 7 - RUN
ECHO 0 - EXIT
ECHO.

SET /P M=": " 
IF %M%==1 GOTO COMMIT
IF %M%==2 GOTO PUSH
IF %M%==3 GOTO FETCH
IF %M%==4 GOTO CLEAR
IF %M%==5 GOTO INIT
IF %M%==6 GOTO NODEMON
IF %M%==7 GOTO RUN
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
git commit -m "first commit"
git remote add origin https://github.com/bequietsoft/freespace.git
git push --set-upstream origin master
npm init 
npm install --save-dev nodemon
npm install express
ECHO.
GOTO MENU

:NODEMON
nodemon
ECHO.
GOTO MENU

:RUN
npm run dev
ECHO.
GOTO MENU

:EOF