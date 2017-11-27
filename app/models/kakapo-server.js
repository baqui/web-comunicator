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

database.register('offer', faker => ({
  point: {
    lat: faker.address.latitude,
    lng: faker.address.longitude,
  },
  city: faker.address.city,
  company: faker.company.companyName,
  amount: faker.finance.amount
}));

//OFFER ROUTES
//

router.get('/offers', (request, db) => {
  return db.all('offer');
});

router.get('/offers/:offer_id', (request, db) => {
  const id = request.params.offer_id;
  return db.findOne('offer', offer => offer.id === id);
});

//

const points = [ [54.3572596,18.6432498],[54.4345831,18.5601003],[54.5273161,18.4869413],[54.3400551,18.6646113],[54.2488551,18.6418654],[54.2118331,18.3250213],[54.1528244,19.4090124],[54.6868815,18.6501182],[54.5376455,17.7418498],[53.7812301,20.4904696] ];
database.register('request', faker => {
  const rand = ~~(Math.random() * 9);
  return {
    point: {
      lat: points[rand][0],
      lng: points[rand][1],
    },
    thumbnail: faker.image.city,
    link: 'http://google.com',
  }
})

router.get('/requests', (request, db) => {
  return db.all('request');
});

database.create('request', 10);
database.create('offer', 10);
database.create('user', 10);

server.use(database);
server.use(router);
