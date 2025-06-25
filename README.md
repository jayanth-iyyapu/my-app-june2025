Angular Installation:
=====================
1) Install NodeJS
Check: (in command prompt)
      node -v
      npm -v

2) Install angular
npm install -g @angular/cli@15
check:
      ng version

3) Angular Application
   --> move to the desired path/location
       cd desktop
   --> nr new my-app
       routing-yes
       css

4) open and run application
   -->In cmd move to the folder and give "code ." command
   -->Open Terminal and run command "ng serve"

**) Enable Execution Policy(for the first time only in laptop)
    --> open powershell as administrator
    --> run command "set-ExecutionPolicy Unrestricted"


Git:
====
1) Git Installation
   check: git -v

2) link our GitHub account to our system
   git config --global user.name "xxxxx"
   git config --global user.email "xxxxx"
   check:
   git config --list

3) link project <--> Repository
  -> create a repository
  ->git init
  ->git remote add origin url
       check: git remote -v

  -> git add .
  -> git commit -m "commit message"
  ->git push
       ->git push --set-upstream origin master -f(for the 1st time)
