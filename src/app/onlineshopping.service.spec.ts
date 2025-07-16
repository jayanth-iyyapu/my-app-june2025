import { TestBed } from '@angular/core/testing';
import { OnlineshoppingService } from './onlineshopping.service'; // Adjust path if needed
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('OnlineshoppingService', () => {
  let service: OnlineshoppingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // ✅ IMPORTANT FIX
      providers: [OnlineshoppingService]
    });
    service = TestBed.inject(OnlineshoppingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
