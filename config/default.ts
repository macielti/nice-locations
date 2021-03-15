import { resolve } from 'path';

const SOURCE_PATH = resolve(__dirname, '..', 'src');

export default {
  database: {
    url:
      'postgres://NICE_LOCATIONS_NODE_USER:NICE_LOCATIONS_NODE_PASSWORD@localhost:6304/NICE_LOCATIONS_NODE_DATABASE',
  },
  orm: {
    entities: [`${SOURCE_PATH}/**/*.entity.ts`],
    synchronize: false,
  },
  public: {
    path: resolve(__dirname, '..', 'public'),
  },
  templates: {
    path: resolve(__dirname, '..', 'views'),
  },
};
