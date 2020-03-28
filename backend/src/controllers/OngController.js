const crypto = require('crypto');
const connection = require('../database/connection');


module.exports = {
    async index (requeset, response) {
        const ongs = await connection ('ongs').select('*');
    
        return response.json(ongs);
    },

async create(request, response){
    const {name, email, whatsapp, city,uf } = request.body;

        //gera 4 bytes de caracteres hex
        const id = crypto.randomBytes(4).toString('HEX');        

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
}
};