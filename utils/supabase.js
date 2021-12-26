import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://uzfatpzzypcvdqozrugf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDE3NDM1MSwiZXhwIjoxOTU1NzUwMzUxfQ.We2I2vo93QxgifmyfM96D72xl7HmwFAYll7g22dqXUY';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase
