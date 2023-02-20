import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lzhrosfnmhexkdyajqag.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6aHJvc2ZubWhleGtkeWFqcWFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY4NjUyODQsImV4cCI6MTk5MjQ0MTI4NH0.LIuanTT39npy3RdgLibx0x9qp26KpF-izc2tpFS5mlY'
export const supabase = createClient(supabaseUrl, supabaseKey)