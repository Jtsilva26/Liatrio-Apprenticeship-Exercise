# Liatrio-Apprenticeship-Exercise
#### Overview

Welcome! The goal of this interview is to get an idea of how well you will fit into our practice, and
if the way that we work is the right fit for you.
First, let’s be clear - a successful interview does NOT mean that you finish the exercise without
help, or even necessarily finish it. We are going to see how you identify and solve problems,
how you communicate, how and where you ask for help, and finally how you demonstrate what
you did.
Some of the items of the interview are going to be purposely vague for 2 reasons:
1. To see how well you can figure things out on your own

2. How you search, find, and ask for help A perfect way to ask for help would be something like: “I am struggling with doing XXX. I found
this issue (YYY), and researched a bit about ZZZ. Can you point me in the right direction?”
Whenever possible include error messages or screen shots to give context to what you are
asking about.

You are free to use any information needed to work this out. We all use Google, Stack Overflow,
and our friend sitting right next to us every day. We will expect to hear about how you
accomplished these tasks and what resources you needed at demonstration time.

If you are stuck, or if something is unclear, communicate this in the Slack channel.
Remember, at Liatrio, communication, collaboration,transparency and sharingare key
pillars of our work culture.

Interview Exercise

For this interview, we are going to ask you to create a simple web application which exposes a
HTTP API endpoint and use a CI/CD pipeline to containerize it and deploy it to a cloud platform.
We have this exercise broken down into general sections, and while there are many ways to
accomplish each, we note some tools you should use. It is possible that you may have
experience using other tools, but you should stick to our suggestions when and where possible.
As noted, communication is key, so please ask questions and provide updates as you make
progress.

GitHub Repository

● Create a public GitHub repository to store the code and files for your application. You’ll
also be using this repository to host a GitHub Actions workflow later.

● Share this repository in Slack and push up changes frequently so we can keep track of
your progress.

Node.js Application

● Install Node.js and use Express.js to build a simple single endpoint web application that
returns the following JSON object. The blank space should be your name, and the
timestamp should be dynamically generated.
```
{

“message”: “My name is ___”,

“timestamp”: 12312344

}
```

Docker Containerization

● Write a Dockerfile that will build and run of your application

● Make sure the Dockerfile is hosted in your repository

GitHub Actions

● Create a GitHub Actions Workflow that:

○ Builds your application’s Docker image

○ Verifies the application functionality using Liatrio’s GitHub apprentice-action

○ Pushes your image to Docker Hub

Cloud Deployment

● Deploy your app to a cloud platform of your choice (Google Cloud Platform, Heroku,
Azure) using the image from Docker Hub.

○ Note: Many cloud platforms have student credits for educational purposes. Use
the free credits so that you aren’t paying to deploy your application. Also, you
only have to run your application when testing or demoing.

Deployment Workflow (extra credit)

If you have extra time and want to take the exercise a bit further:

● Add a GitHub Workflow which automatically deploys your application to the cloud
platform when changes are made to the main branch of your repository

● Add a field to the JSON output of your application and verify the change is deployed
