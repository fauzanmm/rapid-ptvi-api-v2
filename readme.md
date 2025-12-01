# Example of Backend Connection Multiple Source | SQL Server

## How to Deploy

1. Download repository dari git ini
2. Create file env dan isi dengan ini

```bash
DATABASE_URL_PC04="sqlserver://ipserver:1433;database=xx;user=xx;password=xx;encrypt=true;trustServerCertificate=true"
DB_PC04_USER="xx"
DB_PC04_PASSWORD="xx"
DB_PC04_NAME="xx"
DB_PC04_HOST="ipserver"


DATABASE_URL_PC75="sqlserver://ipserver:1433;database=xx;user=xx;password=xx;encrypt=true;trustServerCertificate=true"
DB_PC75_USER="xx"
DB_PC75_PASSWORD="xx"
DB_PC75_NAME="xx"
DB_PC75_HOST="ipserver"
```

3. Running code berikut

```bash
# generate connection 2 database Prisma
npm run generate

# run and see the result
npm run dev
```
