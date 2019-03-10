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
        

--------------------------------------------- SERVER ------------------------------------


--------------------------------------------- CLIENT ------------------------------------

- copy index.html


