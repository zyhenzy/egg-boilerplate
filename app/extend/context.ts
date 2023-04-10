import { Context } from 'egg';

export default {
  success(ctx:Context, data:any) {
    ctx.body = {
      code: 200,
      result: data,
      msg: 'success',
    };
    ctx.status = 200;
  },
};

