Run server and client seperately
    cd server
        npm run server
    cd server/client
        npm start

Run server and client in a single comment  (see the instructions below the file)
    cd server
    npm run dev





--------------------------------- GIT GITHUB Configuration ------------------------------------
The Directory Configuaration will be as following
/react-redux-materialui
    / server
        / client

For managing the git and github
    - Create folder : /react-redux-materialui
    - Create folder : /server
    - cd server
        - npm init
    - in the root
        - git init
        - git status
        - git add .
        - git commit -m "First Commit"
    - Then Create the /client folder with
        - Create React App tool, in Webstorm (or manually)
        - There can be a warning about git while creating the client. Choose "Add Root" there.
    - Open the Webstorm Project from the root directory
        /Webstorm/File/Open -> /react-redux-materialui

    - Or you can change the root of git in "Webstorm/Preferences/Version Control"

    - Share Project to github by Webstorm
        /Webstorm/VCS/Import into Version Control | Share Project on GitHub.
        If you have not registered your account in WebStorm, the Login to GitHub dialog opens.
        Specify your access token or request a new one with your login and password.


    After All Changes
        For committing changes to git
            - From the Command Prompt
                - cd {root directory}
                - git add .
                - git commit -m "Your Message"
            - From Webstorm
                - /Webstorm/VCS/Git/Commit File
        For pushing to github
            - /Webstorm/VCS/Git/Push


    Adding A New Branch
        - /Webstorm/VCS/Git/Branches
            - Create A New Branch
                master-clean

    Changing Working Branch
        - /Webstorm/VCS/Git/Branches
            - select the branch
                checkout

    When you push to the github (/Webstorm/VCS/Git/Push)
        working branch will be pushed

	For Openin The Project in a new environment
		- Webstorm/VCS/Checkout from Version Control
		- In directories which have "package.json"
			- run "npm install"



--------------------------------------------- SERVER ------------------------------------


--------------------------------------------- CLIENT ------------------------------------

- copy index.html


