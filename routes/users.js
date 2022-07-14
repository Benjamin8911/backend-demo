const jwt = require('jsonwebtoken')
const jwtAuth = require('koa-jwt')
const Router = require('koa-router')
const auth = require('../middleware/auth')

const router = new Router({prefix: '/users'})

// token
const secret = 'it is a secret'

router.post('/login-token', async ctx => {
  const {body} = ctx.request
  const userinfo = body.username
  ctx.body = {
    ok: 1,
    message: 'login token',
    user: userinfo,
    token: jwt.sign({
      data: userinfo,
      exp: Math.floor(Date.now() / 1000) + 60 * 60
    }, secret)
  }
})

router.post('/login', async ctx => {
  const {body} = ctx.request
  ctx.session.userinfo = body.username
  ctx.body = {
    ok: 1,
    message: 'login'
  }
})

router.get('/getUser-token', jwtAuth({secret}), async ctx => {
  ctx.body = {
    ok: 1,
    message: 'getUsers Token',
    userinfo: ctx.state.user.data
  }
})

router.get('/getUser', auth, async ctx => {
  ctx.body = {
    ok: 1,
    message: 'getUsers',
    userinfo: ctx.session.userinfo
  }
})

router.post('/logout-token', async ctx => {
  ctx.body = {
    ok: 1,
    message: 'logout token'
  }
})

router.post('/logout', async ctx => {
  delete ctx.session.userinfo
  ctx.body = {
    ok: 1,
    message: 'logout'
  }
})

module.exports = router