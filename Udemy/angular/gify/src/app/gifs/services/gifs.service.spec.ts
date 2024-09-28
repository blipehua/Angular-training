import { GifsService } from './gifs.service';

describe('GifsService', () => {
  const service: GifsService = new GifsService();

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
