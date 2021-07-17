import { Test, TestingModule } from '@nestjs/testing';
import { TicketCategoriesService } from './ticket-categories.service';

describe('TicketCategoriesService', () => {
  let service: TicketCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TicketCategoriesService],
    }).compile();

    service = module.get<TicketCategoriesService>(TicketCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
