import { Test, TestingModule } from '@nestjs/testing';
import { EventCategoriessService } from './event-categoriess.service';

describe('EventCategoriessService', () => {
  let service: EventCategoriessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventCategoriessService],
    }).compile();

    service = module.get<EventCategoriessService>(EventCategoriessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
