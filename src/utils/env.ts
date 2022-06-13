import 'dotenv/config';
const config = process.env;

export interface Env {
  db  : string;
  port: number;
};

export const env: Env = {
  db  : config.DB           || '',
  port: Number(config.PORT) || 8080,
};
