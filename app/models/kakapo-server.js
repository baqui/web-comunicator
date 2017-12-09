import {Server, Router, Database} from 'kakapo';

const router = new Router({
  host: API_URL,
  requestDelay: 1000,
});

const database = new Database();
const server = new Server();

///////////////////////////////////////////////////////////
const statuses = ['available', 'unavailable', 'busy']
database.register('contact', faker => {
  const rand = ~~(Math.random() * 2);
  const status = statuses[rand];
  return {
    email: faker.internet.email,
    name: faker.internet.userName,
    avatar: faker.internet.avatar,
    status
  }
})

router.get('/contacts', (request, db) => {
  return db.all('contact');
});

const userIds = [ 1, 999 ];
database.register('message', faker => {
  const rand = ~~(Math.random() * 2);
  return {
    message: faker.lorem.sentence,
    type: 'text',
    userID: userIds[rand]
  }
})

router.get('/messages/:user_id', (request, db) => {
  const rand = ~~(Math.random() * 15);
  return db.all('message').splice(0, rand);
});

database.create('contact', 4);
database.create('message', 15);

server.use(database);
server.use(router);
