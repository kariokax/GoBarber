module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,//garante uma colunas created at e updated at dentro de cada tabela do banco(armazena data criação e edição de cada registro)
    underscored: true,//
    underscoredAll: true
  }
}