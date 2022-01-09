import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://wzbmsvybxccynyffvomh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDE3NDU0NiwiZXhwIjoxOTU1NzUwNTQ2fQ.J8-YpBqtLmlIg279MLf_DuN39seRCoa_BTZ4XHIz6uk';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase
