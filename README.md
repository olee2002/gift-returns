# Gift Return Registry

There are gift registry apps everywhere, but why are there no apps to help us return our gifts after the holidays?

We're going to build our own using MongoDB, Express, and Node.js!

(It will look something like this: https://regifterapp.herokuapp.com/)

### The Assignment

**This repo includes a completed version of the app, but you are going to create your own from scratch.**

We are going to build a Gift Return Registry app. This application will allow Users to manage their profile, 
create a list of stores that they need to visit, and track which gifts they need to return at each store. The 
database will include at least three types of Models, and we should make it look nice, too.

#### A few things to remember to get you started:
- Always start with a plan! We have created a [Trello Board](https://trello.com/b/xO8XsoU7/gift-return-sample-app) for you. 
Be sure to **COPY** this Trello board before you update any of it.
- Be sure to add Wireframes to help you visualize the pages as you build them.
- Draw out a rough ERD to help you visualize your data before you start building the database
- As you add new data to the app, start by building your ERD models into your Schema, and then create
Mongoose models from that Schema.
- Create a `seeds.js` file from the very beginning. This file will be very helpful when you want to refresh 
your database quickly to have clean test data. (There is an example `seeds.js` file in this solution repo.)
- When you add CSS to the application, remember to require the files in your `layout.hbs`.

### Setting up the solution code
Once you have cloned this repo:
- Install dependencies with `npm install`
- Seed the database with `node db/seeds.js`
- Start the dev server with `npm run dev`
