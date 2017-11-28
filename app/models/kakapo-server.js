import {Server, Router, Database} from 'kakapo';

const router = new Router({
  host: API_URL,
  requestDelay: 1000,
});

const database = new Database();
const server = new Server();

database.register('user', faker => {
  const name = faker.internet.userName();
  return {
    name,
    avatar_url: faker.internet.avatar,
    type: "User",
    location: faker.address.city,
    email: faker.internet.email,
  }
});

//USER ROUTES
//
router.get('/users', (request, db) => {
  return db.all('user');
});

router.get('/users/:user_id', (request, db) => {
  const id = request.params.user_id;
  return db.findOne('user', user => user.id === id);
});

///////////////////////////////////////////////////////////
const statuses = ['available', 'unavailable', 'busy']
database.register('contact', faker => {
  const rand = ~~(Math.random() * 2);
  console.log("RAND", rand);
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

database.create('contact', 4);
database.create('user', 10);

server.use(database);
server.use(router);
