module.exports = {
  "type": "sqlite",
  "database": "./src/database/database.sqlite",
  "entities": [
    "./src/modules/**/models/*.ts"
  ],
  "migrations": [
    "./src/database/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}
