import { createClient } from '@supabase/supabase-js';

//const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
//const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
//const supabase = createClient(supabaseUrl, supabaseKey);
const supabase = createClient(
    "https://gadbhrsupsghumaigngg.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdhZGJocnN1cHNnaHVtYWlnbmdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyODIzNjEsImV4cCI6MjAzOTg1ODM2MX0.6jMNgFs_BV-dddLV3ifi5EburlqoA4SpT84ITfwkmMQ"
);
export default supabase;