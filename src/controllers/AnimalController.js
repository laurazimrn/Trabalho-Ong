const Database = require('../db/config')

module.exports = {
  async create(req, res) {
    console.log(req.body)

    const db = await Database()

    await db.run(
      `
      insert into animal(especie, sexo, idade, estado_adocao, observacoes, castrado,vacinado, condicao, fk_ong_responsavel) 
      values("${req.body.name}", "${req.body.sexo}", "${req.body.number}", "${req.body['est_adocao']}", "${req.body['descricao_animal']}", "${req.body.castrado}", "${req.body.vacinado}", "${req.body['descricao_medica']}", 1)
      `
    )
    db.close()

    res.redirect('/')
  },

  async lista(req, res) {
    const db = await Database()

    const animais = await db.all(`
      select * from animal
    `)

    res.render('tabelaanimais', { animais: animais })
  },

  async delete(req, res) {
    const db = await Database()

    AnimalId = req.params.id

    await db.run(`delete from animal where id_animal = ${AnimalId}`)

    res.redirect('/lista-animais')
  }
}
