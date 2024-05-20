import {createClient} from '~/frontend/lib/supabase/client';

export const uploadFile = async (
  storageName: string,
  path: string,
  file: File
) => {
  const supabase = createClient();
  const {data, error} = await supabase.storage
    .from(storageName)
    .upload(path, file, {upsert: true});
  if (error) {
    throw error;
  }
  const {publicUrl} = supabase.storage
    .from(storageName)
    .getPublicUrl(data?.path || '').data;
  caches.open('v1').then(cache => {
    cache.delete(publicUrl);
  });
  return publicUrl;
};
