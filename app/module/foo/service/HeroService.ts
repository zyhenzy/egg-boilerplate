import { EggLogger } from 'egg';
import { SingletonProto, AccessLevel, Inject } from '@eggjs/tegg';
import { heroList } from '../../../db/hero';

@SingletonProto({
  // 如果需要在上层使用，需要把 accessLevel 显示声明为 public
  accessLevel: AccessLevel.PUBLIC,
})
export class HeroService {
  // 注入一个 logger
  @Inject()
  logger: EggLogger;

  // 查询所有英雄
  async index(): Promise<any> {
    const result = heroList;
    this.logger.info('[hello] get result: %j', result);
    return result;
  }
}
