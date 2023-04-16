### Import cockroach DB:
cd config
cat dbinit.sql | cockroach sql --url $DATABASE_URL