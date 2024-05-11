import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jzoaddzxyttwdijycvot.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6b2FkZHp4eXR0d2Rpanljdm90Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUzNTgwNTUsImV4cCI6MjAzMDkzNDA1NX0.rT7swXRmM4OrW43mlsAz2WjJ12hMy7JiU4MEyLGmvN0';
export const supabase = createClient(supabaseUrl, supabaseKey);