import { createClient } from '@supabase/supabase-js';
import { Action } from './interface';

export const supabase = createClient(
  'https://pfwrdyygogowjxyqcene.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmd3JkeXlnb2dvd2p4eXFjZW5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI0ODUwNDQsImV4cCI6MjA0ODA2MTA0NH0.gAsMmRrQCjnj25m4VJcYaRmwFDu_cjfiTaFv1_YMvFY',
);
