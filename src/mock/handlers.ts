import { rest } from 'msw'

const data = {
  id: 1,
  name: test
}
export const handlers = [
  rest.get('http://localhost:8080/', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(data))
  })
]
