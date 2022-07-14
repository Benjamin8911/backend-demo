const koa = require('koa')
const app = new koa()
const session = require('koa-session')
const redisStore = require('koa-redis')
const bodyparser = require('koa-bodyparser')
const static = require('koa-static')
const redis = require('redis')

const userRouter = require('./routes/users')
const apiRouter = require('./routes/api')
const fruitsRouter =require('./routes/fruits')


// const redisClient = redis.createClient(6379, 'localhost')
// redisClient.set('hello', 'aaa')
// redisClient.get('hello', (err,v) => {
//   console.log(v)
// })
// session
app.keys = ['abcdefg']

const SESSION_CONFIG = {
  key: 'u:session',
  maxAge: 8640000,
  httpOnly: true,
  signed: true
}

app.use(session(SESSION_CONFIG, app))
app.use(bodyparser())

app.use(apiRouter.routes())
app.use(userRouter.routes())
app.use(fruitsRouter.routes())

app.use(static(__dirname + '/public'))


app.listen(8088, () => {
  console.log('server is running on 8088')
})