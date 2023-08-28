import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ilgqxorbrnkeexubdppj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsZ3F4b3Jicm5rZWV4dWJkcHBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyMDkzMDcsImV4cCI6MjAwODc4NTMwN30.eRe-Avwe1vQPLuBISuJxQk-ER4QwfdLgovUrOZ420j8';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
