npm install
npx sequelize-cli db:migrate:undo:all --config config/dbConfig.js
npx sequelize-cli db:migrate --config config/dbConfig.js
npx sequelize-cli db:seed:all --config config/dbConfig.js
node ./bin/www