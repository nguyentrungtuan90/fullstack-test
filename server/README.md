1) import DB:
cd config/
cat dbinit.sql | cockroach sql --url $DATABASE_URL