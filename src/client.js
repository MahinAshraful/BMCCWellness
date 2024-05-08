import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cccmnqcpqbmxmzbhsfvp.supabase.co"

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjY21ucWNwcWJteG16YmhzZnZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUwODU5OTcsImV4cCI6MjAzMDY2MTk5N30.ZQV8rSbKkuyXDt9Akud8FPKTLK6jgjtyTDSYvqr2Bto"

export const supabase = createClient(supabaseUrl, supabaseKey)