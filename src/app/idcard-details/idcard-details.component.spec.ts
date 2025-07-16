import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IdcardDetailsComponent } from './idcard-details.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IdCardService } from '../id-card.service'; // update path if needed

describe('IdcardDetailsComponent', () => {
  let component: IdcardDetailsComponent;
  let fixture: ComponentFixture<IdcardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IdcardDetailsComponent],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        IdCardService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '123' }), // mock route parameter
            snapshot: {
              paramMap: {
                get: (key: string) => '123'
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IdcardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
