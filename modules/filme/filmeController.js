const filmeService = require('./filmeService');

async function create(req,res) {
    const {nome,duracao,dtLancamento} = req.body;
    const movie = {
        nome:nome,
        duracao:Number.parseInt(duracao),
        dtLancamento:dtLancamento,
        poster:req.files.poster.path
    }
    console.log(req.files);
    const save = await filmeService.create(movie);
    return res.status(200).json(save);

};


async function find(req,res){
    const list = await filmeService.findAll();
    return res.status(200).json(list);

};

async function findFilter(req,res) {

    const{nome, dtLancamento} = req.body;
    if (nome){
        const movie = await filmeService.findName(nome);
        return res.status(200).json(movie);
    }else{
        const movie = await filmeService.findDate(dtLancamento);
        return res.status(200).json(movie);

    }
   
};

module.exports = {
    create,
    find,
    findFilter    
};