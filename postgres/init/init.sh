#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE DATABASE "db_name";
    GRANT ALL PRIVILEGES ON DATABASE db_name TO "$POSTGRES_USER";
EOSQL


# if this script does now work, just connect to the postgres container and create the database from command line:
# $ psql -U postgres -c "CREATE DATABASE db_name"