-- Create the users table with roles
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    role VARCHAR(50) NOT NULL DEFAULT 'bidder' CHECK (role IN ('admin', 'bidder', 'seller'))
);

-- Create the items table with a reference to users
CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id) ON DELETE SET NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    starting_price DECIMAL(10, 2) NOT NULL,
    current_price DECIMAL(10, 2),
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create the bids table with references to users and items
CREATE TABLE bids (
    bid_id SERIAL PRIMARY KEY,
    item_id INT REFERENCES items(item_id) ON DELETE CASCADE,
    user_id INT REFERENCES users(user_id) ON DELETE SET NULL,
    amount DECIMAL(10, 2) NOT NULL,
    bid_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create the messages table with references to users
CREATE TABLE messages (
    message_id SERIAL PRIMARY KEY,
    sender_id INT REFERENCES users(user_id) ON DELETE SET NULL,
    receiver_id INT REFERENCES users(user_id) ON DELETE SET NULL,
    content TEXT NOT NULL,
    sent_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for performance optimization
CREATE INDEX idx_items_user_id ON items(user_id);
CREATE INDEX idx_bids_item_id ON bids(item_id);
CREATE INDEX idx_bids_user_id ON bids(user_id);
CREATE INDEX idx_messages_sender_id ON messages(sender_id);
CREATE INDEX idx_messages_receiver_id ON messages(receiver_id);

-- Ensure unique titles for items
ALTER TABLE items ADD CONSTRAINT unique_item_title UNIQUE (title);

-- Create roles table (if needed for other purposes)
CREATE TABLE roles (
    role_id SERIAL PRIMARY KEY,
    role_name VARCHAR(50) UNIQUE NOT NULL
);
