
# TMDB

CLI program implementing the commands and the options which allows to make network requests.

Objectives in this projects
- Learn how to connect to a third party API using node.js
- Learn how to implement a CLI program using node.js
- Learn how to work with the filesystem apis of node.js
- Learn how to interact with a CLI program and develop a menu that users can
  use to know how to execute the program


## Acknowledgements

- Oficial web page: https://nodejs.org/en/docs/

#### List of Dependencies:  
- chalk: https://www.npmjs.com/package/chalk
- commander: https://www.npmjs.com/package/commander
- dotenv: https://www.npmjs.com/package/dotenv
- node-notifier: https://www.npmjs.com/package/node-notifier
- ora: https://www.npmjs.com/package/ora/v/0.3.0
 

## API Reference


https://api.themoviedb.org/3/movie

### COMMANDS
#### getMovie
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| -i, --id <n> | `number` | **Required**|
| -r, --reviews| `boolean` | **Optionial**|

Example: \
node moviedb.js get-movie -i 100 true

---

#### getMovies
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| -p, --now-playing| `boolean` | **Optionial**|
| -p, --popular| `boolean` | **Optionial**|

Example: \
node moviedb.js get-persons --page 1 -p \
node moviedb.js get-movies -p --page 1

---

#### getPerson
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| --page    | `number` | **Required**|
| -p, --popular    | `` | **Required**|

Example: \
node moviedb.js get-persons --page 1 -p

---


## Authors

- [@WalberMelo](https://github.com/WalberMelo)


## Installation

Install npm dependencies

```bash
  npm install
```
    
