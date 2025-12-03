# Rapid API Version 2 Backend

This API version 2 can be integrated with multiple servers, if 1 site has more than 1 IP server, for example PT Vale Indonesia has Dispatch, Provision, Minecare servers.

This API can connect the backend with all servers in one site, but there are several configurations that need to be done on the prism database. For further information, you can communicate with the developer.

Email = mailto:fauzan.mauludy@global.komatsu

## How to Deploy on Local

1. Download this repository from git url
2. Create file env and fill with this database configuration

```bash
DATABASE_URL_SERVER1="sqlserver://ipserver:1433;database=xx;user=xx;password=xx;encrypt=true;trustServerCertificate=true"
DB_SERVER1_USER="xx"
DB_SERVER1_PASSWORD="xx"
DB_SERVER1_NAME="xx"
DB_SERVER1_HOST="ipserver"


DATABASE_URL_SERVER2="sqlserver://ipserver:1433;database=xx;user=xx;password=xx;encrypt=true;trustServerCertificate=true"
DB_SERVER2_USER="xx"
DB_SERVER2_PASSWORD="xx"
DB_SERVER2_NAME="xx"
DB_SERVER2_HOST="ipserver"
```

3. Running these code one by one

```bash
# aftr git was clone, need to install all required modules
npm install

# generate prisma database connection first
npm run generate

# run and see the development result
npm run dev

# build the apps
npm run build

# after build is done, start the apps
npm run start
```
