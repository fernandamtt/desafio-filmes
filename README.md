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
 
## Comando para instalar o Parse Server localmente
subindo o servidor Parse
```
npm install -g parse-server
parse-server --appId APPLICATION_ID --masterKey MASTER_KEY --databaseURI mongodb://localhost/test

```

## Start 
```
 npm start
 ```
