const Router = require('koa-router')
const router = new Router({prefix: '/api/fruits'})
const model = require('../model/fruits')

router.get('/', async ctx => {
  const result = await model.find({})
  ctx.body = {
    ok: 1,
    message: 'get',
    data: result
  }
})

router.post('/', async ctx => {
  model.create(ctx.request.body)
  ctx.body = {
    ok: 1,
    message: 'create'
  }
})

router.put('/', async ctx => {
  await model.updateOne({_id: ctx.request.body._id}, { $set: {name: ctx.request.body.name}})
  ctx.body = {
    ok: 1,
    message: 'update'
  }
})

router.delete('/:id', async ctx => {
  await model.deleteOne({_id: ctx.params.id})
  ctx.body = {
    ok: 1,
    message: 'delete'
  }
})

module.exports = router