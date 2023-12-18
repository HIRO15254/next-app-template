import { supabase } from '../lib/supabase';

export const uploadFile = async (file: File, storageName: string, fileName: string) => {
  const storage = supabase.storage.from(storageName);
  await storage.upload(fileName, file, { upsert: true });
  return storage.getPublicUrl(fileName).data.publicUrl;
};

export const deleteFile = async (storageName: string, fileName: string) => {
  const storage = supabase.storage.from(storageName);
  return storage.remove([fileName]);
};
