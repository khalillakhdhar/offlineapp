/* eslint-disable prettier/prettier */

import { createConnection } from 'typeorm';

export const datasource = async () => {
  return await createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'votre_utilisateur',
    password: 'votre_mot_de_passe',
    database: 'nom_de_votre_base_de_donnees',
    entities: [__dirname + '/../**/*.entity.ts'],
    synchronize: true,
  });
};
