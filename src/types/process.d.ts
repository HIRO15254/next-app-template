declare module 'process' {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: 'development' | 'staging' | 'production';
        DATABASE_URL: string;
      }
    }
  }
}
