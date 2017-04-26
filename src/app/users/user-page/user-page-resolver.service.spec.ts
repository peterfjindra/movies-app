import { TestBed, inject } from '@angular/core/testing';

import { UserPageResolverService } from './user-page-resolver.service';

describe('UserPageResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserPageResolverService]
    });
  });

  it('should ...', inject([UserPageResolverService], (service: UserPageResolverService) => {
    expect(service).toBeTruthy();
  }));
});
