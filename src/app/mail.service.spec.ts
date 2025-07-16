import { TestBed } from '@angular/core/testing';
import { MailService } from './mail.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // ✅ Add this

describe('MailService', () => {
  let service: MailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule] // ✅ Provide HttpClient
    });
    service = TestBed.inject(MailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
