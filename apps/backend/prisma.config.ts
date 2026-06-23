import 'dotenv/config';
// import dotenv from 'dotenv';
import { defineConfig, env } from 'prisma/config';

// dotenv.config({
//   path:
//     process.env.NODE_ENV === 'production'
//       ? '.env.production'
//       : '.env.development',
// });

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
    seed: 'tsx prisma/seed.ts',
  },
  datasource: {
    url: env('DIRECT_URL'),
  },
});
