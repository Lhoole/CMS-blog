# CMS-blog

## Description 
This simple blog page was made to demonstrate MVC file structure and utilisation of RESTful principles. The user may create and account to post blog articles, comment on their own and others articles, and edit posts they have previously written.

---
## Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Screenshots](#screenshots)

---
## Installation
THis project can be accessed with the 
1. Clone github repository onto local environment
2. Install MySQL and Node.js if not already installed
3. Input "npm i" into the command terminal to download all npm packages
4. Add local data to .env file 
5. Run "mysql -u root -p" in the command terminal to initialise your database
6. Type "npm run seed" in command line to input seeds into database
7. Type "npm start" in command line to initialise server

Alternativly the project can be accessed via its webpage:
---
## Usage
Once server is run or webpage is accessed, users will be prompted to enter the login screen. Once the login screen is opened, for existing users, they will need to login with their existing credentials, however for new users they are prompted to enter new login details to access the webapp. 

Once logged in, users can post, edit and delete their own posts, or view and comment on others.

## Credits

dotenv, mySQL2, sequelize, express.js, handlebars and bcrypt packages.

## Contributing
- Luke Hoole - https://github.com/Lhoole 
---
## License
No License

---
## Screenshots

![Screemshot of running app](./public/images/)

## Deployed Application

https://.herokuapp.com/

