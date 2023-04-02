# IMPORTANT

This is meant to be an internal service that fetches data from CASA database and has no authentication enabled. Make sure the service is never expose to internet. 

It fetches data from CASA DB and provides endpoints for `CASA` keycloak and `lr-service` to fetch data. 

# Steps to Run

1. `npm i`
2. `cp sample.env .env` - Edit `.env` accordingly
3. `npm i -g pm2`
4. `pm2 start npm --name "casa-user-data-service" -- start`

