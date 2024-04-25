// eslint-disable-next-line node/no-unpublished-import
import {describe} from '@jest/globals';

describe('environment variables', () => {
  test('NODE_ENV', () => {
    expect(process.env.NODE_ENV).toBeDefined();
  });
  test('DATABASE_URL', () => {
    expect(process.env.DATABASE_URL).toBeDefined();
  });
  test('AUTH_SECRET', () => {
    expect(process.env.AUTH_SECRET).toBeDefined();
  });
  test('AUTH_GOOGLE_ID', () => {
    expect(process.env.AUTH_GOOGLE_ID).toBeDefined();
  });
  test('AUTH_GOOGLE_SECRET', () => {
    expect(process.env.AUTH_GOOGLE_SECRET).toBeDefined();
  });
});
