-- Initialize database with sample products
-- First, ensure the table exists (in case it doesn't)
CREATE TABLE IF NOT EXISTS products (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Clear existing data and insert fresh sample products
TRUNCATE TABLE products RESTART IDENTITY CASCADE;

INSERT INTO products (name, created_at) VALUES 
    ('Laptop Computer', NOW()),
    ('Wireless Mouse', NOW()),
    ('USB Keyboard', NOW());
