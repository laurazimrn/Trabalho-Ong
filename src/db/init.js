const Database = require('./config')

const initDb = {
  async init() {
    const db = await Database()

    await db.exec(`create table endereco(
      id_endereco integer PRIMARY key AUTOINCREMENT NOT NULL,
        cidade varchar(60) not NULL,
      bairro varchar(60) not null,
        logradouro varchar(100) not null,
        numero varchar(5) not null,
        uf varchar(2) not null,
        cep varchar(8),
        telefone varchar(8) NOT NULL,
        email varchar(45) not null
    );
    
    create table ong(
      id_ong integer PRIMARY key AUTOINCREMENT NOT NULL,
        cnpj varchar(14) not NULL,
        nome varchar(60) not NULL,
        descricao  varchar(160) not NULL,
        fk_id_endereco integer NOT NULL,
        FOREIGN KEY (fk_id_endereco) REFERENCES endereco(id_endereco) 	
    );
    
    create table clinica(
      id_clinica integer PRIMARY key AUTOINCREMENT NOT NULL,
        telefone varchar(13),
        fk_endereco integer NOT NULL,
        FOREIGN KEY (fk_endereco) REFERENCES endereco(id_endereco)
    );
    
    create table doacao(
      id_doacao integer PRIMARY key AUTOINCREMENT NOT NULL,
        nome_doador varchar(60) not NULL,
        cpf_cnpj_doador varchar(14) not NULL,
        valor integer not NULL,
        fk_ong_destinada integer NOT NULL,
        FOREIGN KEY (fk_ong_destinada) REFERENCES ong(id_ong)
    );
    
    create table animal(
      id_animal integer PRIMARY key AUTOINCREMENT NOT NULL,
        especie varchar(40) not null,
        sexo char(1) not null,
        dt_nasc_aprox date not null,
        estado_adocao varchar(20) not null,
        observacoes varchar(100),
        castrado bool,
        condicao varchar(30),
        fk_ong_responsavel integer not null,
        FOREIGN KEY (fk_ong_responsavel) REFERENCES ong(id_ong)
    );`)

    await db.close()
  }
}

initDb.init()
