# ARC Information and Capacity Web Application 
course-project-group-107 created by GitHub Classroom


https://docs.google.com/document/d/1QMwsDsiX4-V7Xs55aPAnMR1Aw9s-YrrikJWeds3ZCxY/edit


Project Name: ARC Information and Capacity Web Application 

Project Introduction:
Our web application was made with the intent to create a platform for the ARC and its members would use to better help make informed decisions on when to go to the ARC. This would be done by allowing logged in users to see capacities of different areas within the ARC. Another feature that we have is for users to see a catalog page of all the different areas within the ARC.

Technical Architecture/Roles:
Backend- For the backend, our main language used was Python, using the Django framework to enable our API. The backend uses the Django Rest framework for the API, as well as a SQL Database to hold our data for capacities and users. Our backend engineers for this project were Keshav Trikha and Diego Taveras. 

Frontend- The front end uses the React framework with javascript as its primary language. The frontend uses Axios POST requests to react with the Django Rest API. The frontend engineers were Saketh Boyapally and Sid Wanjara.

# How to Install / Work:

Git clone the following repo: https://github.com/CS222-UIUC/course-project-group-107.git




**This project requires python installed. To check for your version, run**

```
python –-version
```


On the terminal, inside of the folder that holds the cloned repo:
```
Pip install react
```

```
Pip install npm
```

```
Npm i react-scripts
```

```
python -m pip install Django
```

```
Pip install conda
```


## Open two separate terminals, running simultaneously. We use one to run the frontend, and one runs the backend.

### On the first terminal run:

```
cd backend
``` 

and then:

```
python manage.py runserver
```

### On the second terminal run:

```
cd frontend
```  

and then:

```
npm start
```

In your browser, visit http://localhost:3000.

For more help with frontend setup:
> https://github.com/CS222-UIUC/course-project-group-107/tree/main/frontend#getting-started-with-create-react-app



