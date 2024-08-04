# Project Setup

## Prerequisites

Ensure you have PostgreSQL installed and running. You also need `psql` command-line utility for executing SQL commands.

## Database Setup

### Creating Tables

To set up the database tables, follow these steps:

1. **Connect to PostgreSQL**: Replace `<your_username>` with your PostgreSQL username and `<your_database>` with your database name.

2. **Run the SQL Migration Script**:

    ```bash
    psql -U <your_username> -d <your_database> -f db/001_create_tables.sql
    ```

    For example, if your username is `postgres` and your database name is `youbid_db`, use:

    ```bash
    psql -U postgres -d youbid_db -f db/001_create_tables.sql
    ```

## SQL Migration Script (`db/001_create_tables.sql`)
