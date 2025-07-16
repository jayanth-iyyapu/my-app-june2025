import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleDetailsComponent } from './vehicle-details.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs'; // for mocking observables
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VehiclesService } from '../vehicles.service';

describe('VehicleDetailsComponent', () => {
  let component: VehicleDetailsComponent;
  let fixture: ComponentFixture<VehicleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleDetailsComponent],
      imports: [HttpClientTestingModule],
      providers: [
        VehiclesService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '123' }), // ✅ Mocked route parameter
            snapshot: {
              paramMap: {
                get: (key: string) => '123' // Optional depending on how you use ActivatedRoute
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(VehicleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
