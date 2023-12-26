import { Database as DB } from './types/supabase';

declare global {
  type Database = DB;
  type Profile = DB['public']['Tables']['profiles']['Row'];
  type document = DB['public']['Tables']['docs']['Row'];
}
