import { Express, Router } from 'express'
import fg from 'fast-glob'

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  // varre todos os arquivos e realiza o import das rotas de forma automática
  fg.sync('**/src/main/routes/**routes.ts').map(async file => (await import(`../../../${file}`)).default(router))

  // fg.sync('**/src/main/routes/**routes.ts').map(async file => {
  //   const route = (await import(`../../../${file}`)).default
  //   route(router)
  // })
}
