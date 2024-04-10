# BOOK App Demo

## Description

- This is a simple book app the segregates between male and female books with filters of Hard books etc.

## Installation

- run `npm install` to install all the dependencies
- run `npm run build` to build the app

## Usage

- run `npm run dev` to start the app in development mode

## running the json-server

- very important to run the json-server to get the data from the db.json file

* run `json-server --watch db.json --port 3001` to start the json-server
* run `json-server --watch db.json` to start the json-server with the default port 3000

## Assumptions

- The app is built that we are allowed to use the json-server to get the data from the db.json file
- That the design main filter is for both males and females as evident in the design
- We can filter the books by hardcover, paperback, and all type of books as necessary but as of the moment the app is built to filter by hardcover only
- The design of the app is not pixel perfect but it is responsive base on the design given
- Since I only have experience on functional testing, I only did functional testing on the app and not unit testing so I didn't use jest or any testing library for unit testing
