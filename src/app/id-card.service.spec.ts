import { TestBed } from '@angular/core/testing';
import { IdCardService } from './id-card.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // ✅ Add this

describe('IdCardService', () => {
  let service: IdCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // ✅ Provide HttpClient for testing
      providers: [IdCardService]
    });

    service = TestBed.inject(IdCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
