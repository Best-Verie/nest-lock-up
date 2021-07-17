import { Test, TestingModule } from '@nestjs/testing';
import { EventCategoriessController } from './event-categoriess.controller';

describe('EventCategoriessController', () => {
  let controller: EventCategoriessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventCategoriessController],
    }).compile();

    controller = module.get<EventCategoriessController>(EventCategoriessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
