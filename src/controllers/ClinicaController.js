const Database = require('../db/config')

module.exports = {
  async create(req, res) {
    console.log(req.body)

    const db = await Database()

    const endereco = {
      cidade: req.body.city,
      bairro: req.body.district,
      logradouro: req.body.street,
      numero: req.body.number,
      uf: req.body.state,
      cep: req.body.cep,
      telefone: req.body.phone,
      email: req.body.email
    }

    await db.run(
      `insert into endereco(cidade,bairro,logradouro,numero,uf,cep,telefone,email) values("${endereco.cidade}", "${endereco.bairro}", "${endereco.logradouro}", "${endereco.numero}", "${endereco.uf}","${endereco.cep}", "${endereco.telefone}", "${endereco.email}")`
    )

    id_endereco = await db.get(`select max(id_endereco) from endereco`)

    await db.run(
      `
        insert into clinica(telefone, fk_endereco) values("${endereco.telefone}", ${id_endereco['max(id_endereco)']})
      `
    )
    console.log('Deve ter cadastrado')
    db.close()

    res.redirect('/')
  }
}
