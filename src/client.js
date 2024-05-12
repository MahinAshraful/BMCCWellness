import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dcudcacedpvcnkjqjiyy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjdWRjYWNlZHB2Y25ranFqaXl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU0MDIzNzcsImV4cCI6MjAzMDk3ODM3N30.D57WF8RTRC5YGnEVAXFQOjdYaeMt5dRQ_Q1-rfCCG9s';
export const supabase = createClient(supabaseUrl, supabaseKey);