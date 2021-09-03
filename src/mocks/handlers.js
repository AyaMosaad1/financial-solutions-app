import { rest } from 'msw'

export const handlers = [
  rest.post('/submited', (req, res, ctx) => {
    const { data } = req.body
    return res(
      ctx.json({
      message: "your answers are submitted successfully"
      })
    )
  }),
];

