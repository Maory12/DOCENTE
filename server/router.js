  // Importando enrutador home
import homeRouter from './domains/home/home.router';
// Importando enrutador user
import userRouter from './domains/user/user.router';

import convoRouter from './domains/convo/convo.router';

import formRouter from './domains/form/form.router';

import estaRouter from './domains/estatus/esta.router';

import listaRouter from './domains/listas/lista.router';

// Función que agrega rutas
const addRoutes = (app) => {
  // Agregando el enrutador de home
  app.use('/', homeRouter);
  // Agregado el enrutado de user
  app.use('/user', userRouter);
  //Agragando las convocatorias
  app.use('/convo', convoRouter);

  app.use('/form', formRouter);

  app.use('/esta', estaRouter);

  app.use('/list', listaRouter);
  
  return app;
};

// Exportando objeto
export default { addRoutes };