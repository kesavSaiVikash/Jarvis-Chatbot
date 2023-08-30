# Chat API UI

## Introductiton

This a React based UI to utilize the gpt-2 model for a chat bot as an AI assistance. It uses hugging face inference API 
to generate responses for user messages. The this messages will be displayed in the UI as in an ordinary chat window.
Furthermore these chat messages and response will be stored in a vector db for caching the resposnes. 


## How to initialize

1. Run 'npm install' to install all the required packages


## How to start the server

1. Run 'npm start'
2. Open your bowser and and navigate to 'localhost:3000'


## How to use the chat bot

1. Enter the message into the input at the bottom of the chat window.
2. Click 'send'



## Deplopyment

The to improve the functionality and add more features such as security and authentication, we can create a seperate backend.
Then both the back and the front-end serving models should be contaiarize in seperate containers. Docker will be the most suitable 
since it has a large community support and easy to setup in any  enviroment. Furthermore it is free. For that first we need to create 
docker files aand docker images for each application. Secondly this images can be used to create docker containers. If want to scale
the system to support thousand of users at the same time we should use container orchestrator system such as kubernets. It allows 
us to do things such as multipla instances of an application with load balancinng and use distributed resources. To use kubernetes
we have to first write deployment files.

