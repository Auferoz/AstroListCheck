import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://cklwmkgdqjvapsgksmfn.supabase.co'
// p process.env.SUPABASE_KEY
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrbHdta2dkcWp2YXBzZ2tzbWZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA1MDE5MTksImV4cCI6MjAyNjA3NzkxOX0.IY8tzCpKfCXsUu9zYVePaGt_TztNjei3uWpnBGe7SgU' 
export const supabase = createClient(supabaseUrl, supabaseKey)