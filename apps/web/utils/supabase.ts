import { createClient } from "@supabase/supabase-js";

const { SUPABASE_PROJECT_URL = "", SUPABASE_PROJECT_KEY = "" } = process.env;
export default createClient(SUPABASE_PROJECT_URL, SUPABASE_PROJECT_KEY);
