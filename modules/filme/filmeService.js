const {Movie,Query} = require('./filme');


async function create(movie){
    const Parse = Movie();
    const newMovie = new Parse();
    newMovie.set('nome',movie.nome);
    newMovie.set('duracao',movie.duracao);
    newMovie.set('dtLancamento',movie.dtLancamento);
    newMovie.set('poster',movie.poster);
    return await newMovie.save();
};

async function findAll() {
    const movie = Query();
    return await movie.find();
};

async function findName(nome){
    const movie = Query();
    movie.equalTo('nome', nome);
    return await movie.find();
};

async function findDate(dtLancamento) {
    const movie = Query();
    movie.equalTo('dtLancamento', dtLancamento);
    return await movie.find();

};

module.exports = {
    create,
    findAll,
    findName,
    findDate
};