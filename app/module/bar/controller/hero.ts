import { Inject, HTTPController, HTTPMethod, HTTPMethodEnum, Context } from '@eggjs/tegg';
import { HeroService } from '@/module/foo';

@HTTPController({
  path: '/hero',
})
export class HeroController {
  @Inject()
  heroService: HeroService;

  @HTTPMethod({
    method: HTTPMethodEnum.GET,
    path: 'index',
  })
  async index(@Context() ctx: any) {
    const data = await this.heroService.index();
    ctx.success(ctx, data);
    // ctx.success(data);
  }
}
