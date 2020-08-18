# desafio-filmes

## Pré requisitos

* NodeJS npm
* MongoDB
* Optionally Docker

## Iniciando
```
 npm i
 ```

## MongoDb localmente
```
npm install -g mongodb-runner
mongodb-runner start
```

## MongoDb via Docker
 Dentro da pasta "db" execute o docker-compose:
 
 ``` docker-compose -f stack.yml up ```
 
## Parse Server localmente
subindo o servidor Parse
```
npm install -g parse-server
parse-server --appId filmesEmHd --masterKey secret --databaseURI mongodb://localhost/test

```

## Start 
```
 npm start
 ```
