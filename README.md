# react_news
Small client that consumes a News API and displays lists of news with searchbar included to look by keyword. Built 100% with React.js

### Instalation and setup

Make an initial

```sh
$ npm i
```
Inside the project folder. Then go to the
> $(PROYECT_FOLDER).../client

and run another
```sh
$ npm i
```

Once you installed all dependencies, you can run the project by:
```sh
$ npm run dev
```
from the root of the project. This will launch all processes needed to run the client concurrently. After this, a client listening on port 3000 should be running.

### Important to know

This client forwards all API calls to a proxy server hosted in: 

> https://immense-refuge-57477.herokuapp.com/

The former as part of a workaround to match NewsAPI requierement for no `Access-Control-Allow-Origin` in its response's headers. In this way, the API may be consumed in a development enviroment. 

### Requirements and extras

This project was built as part of a code challenge that expected a client to consume the News API and be able to search articles by keyword.

In adition to the aforedmentioned behavior this client also displays:
* Login with google
* Top headlines list component
* Landing page
* Paginator component to search through results
* Modal component to output errors to user

### License

## MIT




