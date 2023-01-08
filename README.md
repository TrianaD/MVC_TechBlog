# Challenge 14 MVC_TechBlog

## Description 

Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

Your task this week is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. You’ll build this site completely from scratch and deploy it to Heroku. Your app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## User Story


AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions


## Acceptance Criteria


GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments


## INSTALLATION 


User will need to install dotenv, express, mysql2, and sequelize. To install go to terminal and do npm i to run all needed applications. 


### Required Modules / Packages:

* Node.js
* mysql2 Package
* dotenv Package


## USAGE 


The following screenshots show examples of the interaction and options presented to the user when application is initiated. 

## STEPS for USAGE


Database creation in Workbench:

![showing database creation with tables](./assests/db_created_tables.png)

Tables created by using following command in terminal: ![showing run seed](./assests/run_seed.png)

After running all seed files, run the following command: ![showing node command](./assests/node_server.png)

The images below shows some examples of the various commands and outputs using insomnia:

Category - All

![showing categories output](./assests/get_categories.png)

Product - All

![showing products output](./assests/get_products.png)

Tag - All

![showing tags output](./assests/get_tags.png)


Category - By Id

![showing categories by id output](./assests/get_categories_byID.png)

Product - By Id

![showing products by id output](./assests/get_products_byID.png)

Tag - By Id

![showing tags by id output](./assests/get_tags_byID.png)


Using Insomina a folder structure was created to run through all the different commands as needed for creating, updated, and deleting as well as seeing updates through each stage. 

![showing folder structure within Insomnia](./assests/various_requests_layout.png)

A video recording goes through all the steps to show how to obtain all the various table information. 

Link found below in the link section. 



## LINKS 


Link to GitHub:

[GitHub Documentation](https://github.com/TrianaD/ecommerce_backend)



Link to video example: 

[Video Example](https://drive.google.com/file/d/12mhHXm0fhslU-ZczGuAo5Gfqhbd-aJcJ/view)
