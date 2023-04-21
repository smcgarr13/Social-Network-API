# Social-Network-API
An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

[![OpenFaaS](https://img.shields.io/badge/License-MIT-blue.svg)](https://www.openfaas.com)

# Table of Contents

-[Title](#title)
-[Description](#description)
-[Table of Contents](#table-of-contents)
-[Installation](#installation)
-[Usage](#usage)
-[Credits](#credits)
-[Technologies](#technologies)
-[License](#license)
-[Contributing](#contributing)
-[Tests](#tests)
-[Questions](#questions)

## Description
This Social Network API is a RESTful API built using Node.js, Express, and MongoDB. This API allows users to interact with a social media platform, including creating, updating, and deleting users, thoughts, and reactions, as well as adding and removing friends. YAY!! :)



## Installation
Clone repo: https://github.com/smcgarr13/Social-Network-API

## Usage
To interact with the API, you can use a tool such as Insomnia. You can make requests to the different endpoints provided to create, retrieve, update, or delete data.

## API Endpoints
The API consists of the following endpoints:

### Users
GET /api/users: Retrieve all users
GET /api/users/:userId: Retrieve a specific user by their ID
POST /api/users: Create a new user
PUT /api/users/:userId: Update a user by their ID
DELETE /api/users/:userId: Delete a user by their ID

### Thoughts
GET /api/thoughts: Retrieve all thoughts
GET /api/thoughts/:thoughtId: Retrieve a specific thought by its ID
POST /api/thoughts: Create a new thought
PUT /api/thoughts/:thoughtId: Update a thought by its ID
DELETE /api/thoughts/:thoughtId: Delete a thought by its ID

### Friends
POST /api/users/:userId/friends/:friendId: Add a friend to a user's friend list
DELETE /api/users/:userId/friends/:friendId: Remove a friend from a user's friend list

### Reactions
POST /api/thoughts/:thoughtId/reactions: Add a reaction to a thought
DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Remove a reaction from a thought

## Credits
N/A

## Technologies
Express.js;
Mongoose;
Node.js;
Nodemon;
Dotenv

## License
MIT

## Contributing
We are not accepting contributions at this time as we are working hard to complete the initial release of this project. We plan to start accepting contributions in the future. Thank you for your patience, understanding, and interest! :)

## Tests
N/A


## Questions

You can find me on GitHub at [smcgarr13](https://github.com/smcgarr13)

Please email me directly if you have any additional questions.

Email: unicorn@magical.com

## Link to Demonstration Video:
https://drive.google.com/file/d/1RDniQFtBojVOxxceuAoa24Hqsx09ymMC/view

## GitHub Repo:
https://github.com/smcgarr13/Social-Network-API
