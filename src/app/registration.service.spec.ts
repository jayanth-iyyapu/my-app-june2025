import { TestBed } from '@angular/core/testing';
import { RegistrationService } from './registration.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // ✅ Required

describe('RegistrationService', () => {
  let service: RegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // ✅ Add this to fix the issue
      providers: [RegistrationService]
    });

    service = TestBed.inject(RegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
