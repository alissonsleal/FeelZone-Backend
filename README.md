<p align="center">
    <a href="https://github.com/Alissonsleal/FeelZone-Backend/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/Alissonsleal/FeelZone-Backend?color=sucess&style=flat-square"></a>
    <a href="https://github.com/Alissonsleal/FeelZone-Backend/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/Alissonsleal/FeelZone-Backend?color=sucess&style=flat-square"></a>
    <a href="https://github.com/Alissonsleal/FeelZone-Backend/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/Alissonsleal/FeelZone-Backend?color=sucess&style=flat-square"></a>
    <a href="https://github.com/Alissonsleal/FeelZone-Backend/blob/master/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/Alissonsleal/FeelZone-Backend?color=sucess&style=flat-square"></a>
    <a href="https://github.com/Alissonsleal/"><img alt="Alisson Leal GitHub Profile" src="https://img.shields.io/badge/made%20by-Alisson%20Leal-sucess?style=flat-square&logo=appveyor"></a>
</p>

# FeelZone: BackEnd with Node.js

<p align="center">
<img src="https://raw.githubusercontent.com/Alissonsleal/FeelZone/master/assets/icon.png" alt="FeelZone Logo">
</p>

## Description

This is the API used in the FeelZone app

### FeelZone App Description:

Vent your frustrations here. All submissions are anonymous and get deleted everyday at midnight. Share your long-standing baggage, happy thoughts or recent trauma, posting here may provide some relief. Or you can just lurk here, and hear other people's stories. Either way, you are always welcome here.

Available only at [Amazon App Store](https://www.amazon.com.br/dp/B08GL4NNXW/)

[Back To The Top](#Description)

#### Tecnologies

- Node.js
- Express
- MongoDB
- Mongoose
- Mongoose-Paginate-v2
- Heroku

## Instalation

Clone/download this repository into your computer:

`git clone https://github.com/alissonsleal/FeelZone-Backend`

Go into the folder where you downloaded and run:

`npm install`

Rename and add the needed information in your .env file

`.env copy` -> `.env`

To open the local server, just run:

`npm start dev`

## API

You can go to `localhost:3333/texts` and see all the FeelZone texts

Example:

```json
{
  "docs": [
    {
      "_id": "RandomIDNumber",
      "title": "Title Goes Here",
      "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor sit amet.",
      "createdAt": "2020-09-03T18:11:03.937Z",
      "updatedAt": "2020-09-03T18:11:03.937Z",
      "__v": 0
    }
  ],
  "totalDocs": 1,
  "limit": 1000,
  "totalPages": 1,
  "page": 1,
  "pagingCounter": 1,
  "hasPrevPage": false,
  "hasNextPage": false,
  "prevPage": null,
  "nextPage": null
}
```

#### Visit Single Document

You can visit `localhost:3333/texts/_id` to see the single request.
(Don't forget to change the `_id` in the url with the `_id` value)

#### Update Single Document

You can update a single text in the database using the `PUT` method in `/texts/:id`

#### Delete Single Document

You can delete a single text in the database using the `DELETE` method in `/texts/:id`

#### Delete All Data

You can delete all of the data inside the database. All you need to do is a single request to /deleteAllData. And you're going to need to add an `user_id` in the header of the request, this `user_id` needs to be the same as the `DELETEPASSWORD` in the `.env` file
The first thing you'll see is the loading page:

[Back To The Top](#Description)

## License

MIT License

Copyright (c) 2020 Alisson Leal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

<p align="center">
<img src="https://raw.githubusercontent.com/Alissonsleal/FeelZone/master/assets/icon.png" alt="FeelZone Logo">
</p>

[Back To The Top](#Description)

---

## Author Info

- Twitter - [@alissonsleal](https://twitter.com/alissonsleal)
- Discord - [Alisson#0629](https://discord.com/)
- StackOverflow - [Alisson Leal](https://stackoverflow.com/users/14122260/alisson-leal)

[Back To The Top](#Description)
