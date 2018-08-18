import { TestBed, inject } from '@angular/core/testing';

import { AlbumsServiceService } from './albums-service.service';

describe('AlbumsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumsServiceService]
    });
  });

  it('should be created', inject([AlbumsServiceService], (service: AlbumsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
