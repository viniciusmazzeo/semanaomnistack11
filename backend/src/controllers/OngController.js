const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

  async index (req, res){
    const ongs = await connection('ongs').select('*');
    return res.json(ongs);
  },

  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    // Gera 4 bytes de caracteres hexadecimal para o id
    const id = crypto.randomBytes(4).toString('HEX');

    // connection recebe a tabela como parametro e chamo o metodo insert
    // await faz com que ele aguarde 
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })

  return res.json({ id });
  }
}
