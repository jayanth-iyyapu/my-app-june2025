import { TestBed } from '@angular/core/testing';
import { OnlineshoppingService } from '../onlineshopping.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // ✅ Import this

describe('OnlineshoppingService', () => {
  let service: OnlineshoppingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // ✅ Add this
      providers: [OnlineshoppingService]
    });
    service = TestBed.inject(OnlineshoppingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
