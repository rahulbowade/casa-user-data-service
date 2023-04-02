[Postman Collection](https://api.postman.com/collections/17248210-81d16297-21ec-4100-96c2-a8375d30230f?access_key=PMAT-01GR22Q4K663YDVJ19N84NY2QA)

# IMPORTANT

This is meant to be an internal service that fetches data from CASA database and has no authentication enabled. Make sure the service is never expose to internet. 

It fetches data from CASA DB and provides endpoints for `CASA` keycloak and `lr-service` to fetch data. 

# Steps to Run

1. `npm i`
2. `cp sample.env .env` - Edit `.env` accordingly
3. `npm i -g pm2`
4. `pm2 start npm --name "casa-user-data-service" -- start`

