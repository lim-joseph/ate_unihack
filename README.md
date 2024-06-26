# ALLODATE+ <3

Compare your Allocate+ timetables with your friends and find your matching downtime!

Created for Unihack Melbourne 2024, Allodate+ uses a React frontend and a Python backend powered by Flask to parse ics files to determine matching university timetable gaps.

<img src="https://imgur.com/p0R4BBO.png" width="825" />
<img src="https://imgur.com/U7tIxO1.png" width="825" />

### Installation

1. Clone and open the repo
    ```sh
    git clone https://github.com/lim-joseph/ate_unihack.git
    cd ate_unihack
    ```
2. Install npm packages

    ```sh
    npm i
    ```

3. Open a second terminal in the same directory

4. Navigate to flask server directory
    ```sh
    cd src/flask-server
    ```
5. Install python packages
    ```sh
    pip install -r req.txt
    ```
6. Run the flask server

    ```sh
    flask run
    ```

7. In the first terminal, run the react dev server
    ```sh
    npm start
    ```
