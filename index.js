const unleash = require('unleash-server');
const { database } = require('./config');

unleash
  .start({
    db: {
      ssl: false,
      host: database.host,
      port: 5432,
      database: database.name ,
      user: database.user,
      password: database.password,
    },
    server: {
      port: 4242,
    },
  })
  .then(unleash => {
    console.log(
      `Unleash started on http://localhost:${unleash.app.get('port')}`,
    );
  });