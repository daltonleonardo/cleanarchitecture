// import app from './config/app'
import { MongoHelper } from './../infra/db/mongodb/helpers/mongo-helper'
import env from './config/env'

MongoHelper.connect(env.monogourl)
  .then(async () => {
    // faremos o import aqui dentro só para garantir que não vai importar nenhum módulo que depende do banco de dados
    const app = (await import('./config/app')).default
    app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
  })
  .catch(console.error)
