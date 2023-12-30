import { Database as DB } from './types/database.types';

export type User = DB['public']['Tables']['users']['Row'];
export type Docuemnt = DB['public']['Tables']['docs']['Row'];

declare global {
  type Database = DB;
}
