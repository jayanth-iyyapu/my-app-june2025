import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateIdcardComponent } from './create-idcard.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IdCardService } from '../id-card.service'; // Adjust path as needed
import { ReactiveFormsModule } from '@angular/forms'; // if you're using forms

describe('CreateIdcardComponent', () => {
  let component: CreateIdcardComponent;
  let fixture: ComponentFixture<CreateIdcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateIdcardComponent],
      imports: [
        HttpClientTestingModule,   // ✅ Required to mock HttpClient
        ReactiveFormsModule        // ✅ Required if using reactive forms
      ],
      providers: [
        IdCardService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '456' }), // ✅ mock the route param observable
            snapshot: {
              paramMap: {
                get: (key: string) => '456' // optional mock snapshot access
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateIdcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
