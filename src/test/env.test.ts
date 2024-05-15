// eslint-disable-next-line node/no-unpublished-import
import {describe} from '@jest/globals';

describe('environment variables', () => {
  test('NODE_ENV', () => {
    expect(process.env.NODE_ENV).toBeDefined();
  });
  test('NEXT_PUBLIC_SUPABASE_URL', () => {
    expect(process.env.NEXT_PUBLIC_SUPABASE_URL).toBeDefined();
  });
  test('NEXT_PUBLIC_SUPABASE_ANON_KEY', () => {
    expect(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY).toBeDefined();
  });
});
