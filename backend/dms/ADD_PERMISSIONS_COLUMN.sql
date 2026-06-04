-- Add permissions column to Staff table
-- Run this SQL in your database (Supabase SQL Editor)

ALTER TABLE "Staff" 
ADD COLUMN IF NOT EXISTS "permissions" TEXT[] DEFAULT '{}';

-- Verify the column was added
SELECT column_name, data_type, column_default 
FROM information_schema.columns 
WHERE table_name = 'Staff' AND column_name = 'permissions';
