const Router = require('koa-router')

const router = new Router({prefix: '/api/users'})

const users = [{id: '1', name: 'Jack', },{id:'2', name:'Mike'}, {id:'3', name: 'Marry'}]

router.get('/', ctx => {
  ctx.body = {
    ok: 1,
    data: users
  }
})

router.get('/:id', ctx => {
  const id = ctx.params.id
  const data = users.find(user => user.id == id)
  ctx.body = {
    ok: 1,
    data: data
  }
})

router.post('/', ctx => {
  if(ctx.request.body.id) {
    users.push({id: ctx.request.body.id, name: ctx.request.body.user})
  } else {
    users.push({id: users.length + 1, name: ctx.request.body.user})
  }
  ctx.body = {
    ok: 1
  }
})

router.put('/', ctx => {
  const index = users.findIndex(user => user.id == ctx.request.body.id)
  console.log(ctx.request.body, index)
  if(index >= 0) {
    users[index] = ctx.request.body
  }
  ctx.body = {
    ok: 1
  }
})

router.delete('/:id', ctx => {
  const index = users.findIndex(user => user.id == ctx.params.id)
  if(index > 0) {
    users.splice(index, 1)
  }
  ctx.body = {
    ok: 1
  }
})

module.exports = router