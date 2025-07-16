import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // ✅ Important

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // ✅ Add this
      providers: [LoginService]
    });

    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

