import { Test, TestingModule } from '@nestjs/testing';
import { CoffieeService } from './coffiee.service';

describe('CoffieeService', () => {
  let service: CoffieeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoffieeService],
    }).compile();

    service = module.get<CoffieeService>(CoffieeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
