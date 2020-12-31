Overview 

Trilla is a modern day team management tool that allows users to work together collaboratively with great ease.  Trilla has boards 
that users can share with each other and began planning to do a particular activity together.  Team members can create to-do lists
itemizing tasks that need to be done to achieve a set goal.  The items of the todo-list are detailed on Trilla’s cards feature 
and provide info regarding an individual task.  Such info as a card objective (task), Comments and due dates can also be entered regarding 
a particular task to help guide a user or inform other team members of an event or change.  Lists are simply a set or group of cards that 
are listed together and geared to achieve a common goal.  A list header is simply a card itself that is the first task on a list.   All cards 
and list can be given a status of either doing, planned to do or done.  Trilla simply allows users to start doing.  Team members can use our 
tools to plan, record or inspire themselves and each other to get things done.



Technologies

Trilla is implemented using Ruby on Rails on the backend with the rails router for routing and PostgresSql for the database.  The frontend utilizes javascript with DOM manipulation and also React and Redux libraries.  Images are hosted on the web.  Styling is done using mostly css and scss for some features.  


User Authentication

Users are reqired to create an account to fully access all of Trilla's great functionality.  There is a demo button on the sign-up page which allows a potential user to login quickly and see what a board with to-do lists and cards on trilla look like upclose.  However, if you want to fully access the site you will have to sign up.  A user must create a password of at least 6 characters and passwords are not stored in the database.  



![image](https://user-images.githubusercontent.com/67871528/103421280-787c6680-4b69-11eb-84a4-b4b13f6c0725.png)






Using Bcrypt hashing algorithm trilla securely stores only a password hash. By doing this trilla safely authenticates a new user without allowing their password, which may be used on a number of other accounts to ever be exposed.  The password digest is what will be used to verify the authenticity of a user during subsequent login sessions.  




![image](https://user-images.githubusercontent.com/67871528/103421270-67335a00-4b69-11eb-93cb-669661c39b22.png)






Creating Boards

A user can create a board in two different ways.  Once a user logs in they will be taken to the boards index page.  To the left there is a empty tile with header text that reads "Create new board".   If a user clicks on that tile it will open the modal containing the form to create a board.   A user can then give the new board a name and create it.


![image](https://user-images.githubusercontent.com/67871528/103422092-ae234e80-4b6d-11eb-9c69-f0b9d7e6b187.png)




 Inside the modal a user must create a title for the board in order to submit the form.
 
 
 ![image](https://user-images.githubusercontent.com/67871528/103422255-84b6f280-4b6e-11eb-9ac2-001f9086ee39.png)
 
 

  A user can also create a board by clicking the the add menu, which is a drop down menu in the navbar that is displayed in a button using the fontawesome faPlus icon.  



![image](https://user-images.githubusercontent.com/67871528/103421735-e7f35580-4b6b-11eb-991b-a9d10ff9c467.png)





Once a board is created it will show on the boards index page.  A tile similar to the tile to create a board will show with a blue gradient and the trilla symbol right next to the title of the board that was just created.  



![image](https://user-images.githubusercontent.com/67871528/103421800-47516580-4b6c-11eb-9375-a83d08ce0f2f.png)



Creating A to-do List

Once a board is created.  A user can click on that boards tile title or select the boards title from the boards drop down menu under the boards button in the navbar, in order to visit that board's show page.  


![image](https://user-images.githubusercontent.com/67871528/103422616-60f4ac00-4b70-11eb-8bc0-13fcd7681c05.png)



On the boards show page there is a button to click to add a list.  

![image](https://user-images.githubusercontent.com/67871528/103422451-86cd8100-4b6f-11eb-9992-cc7d09397959.png)


After clicking the add a list button a list form will appear and a user must then enter a title for the list to create it.

![image](https://user-images.githubusercontent.com/67871528/103422467-9e0c6e80-4b6f-11eb-899e-47ad57d0bedb.png)



![image](https://user-images.githubusercontent.com/67871528/103422476-b5e3f280-4b6f-11eb-9c66-d98e73bccf84.png)



![image](https://user-images.githubusercontent.com/67871528/103422491-c4caa500-4b6f-11eb-923f-404304373ebb.png)



Creating a card on a list

Once a list is created a user can click a button at the end of the list item and add a card to the list. 

![image](https://user-images.githubusercontent.com/67871528/103422966-1f650080-4b72-11eb-9b34-c5762168674b.png)

Once the add a card button is clicked the card form appears. 

![image](https://user-images.githubusercontent.com/67871528/103422976-2d1a8600-4b72-11eb-8a69-302b14808057.png)

 A user must enter a task title for the card in order to submit the form.

![image](https://user-images.githubusercontent.com/67871528/103422984-386db180-4b72-11eb-9fc0-5c04f2bba7d4.png)

Once form is submitted card is placed as a to-do item on the list.  An updated list will display.

![image](https://user-images.githubusercontent.com/67871528/103422993-44f20a00-4b72-11eb-92ed-9e4803ca8c13.png)

![image](https://user-images.githubusercontent.com/67871528/103423015-589d7080-4b72-11eb-9b1c-f0ecdd1ed81e.png)





Installation and Usage

For code relating to the project simple clone this repository:  
git clone:
https://github.com/indierusky/TrillA.git 


Trilla is also deployed on heroku and you can visit https://trilla.herokuapp.com/  to utilize the app.  

