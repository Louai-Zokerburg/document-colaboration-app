import { Database as DB } from "./types/supabase";

declare global {
    type Database = DB
    // type Profile = DB[]
}