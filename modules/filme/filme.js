
function Movie() {

    return Parse.Object.extend('Movie');
};
function Query(){

   return new Parse.Query(new Movie());
};


module.exports = { 
    Movie,
    Query
};