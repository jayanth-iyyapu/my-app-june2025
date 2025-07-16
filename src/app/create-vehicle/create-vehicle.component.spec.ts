import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateVehicleComponent } from './create-vehicle.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VehiclesService } from '../vehicles.service'; // Adjust path as needed
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('CreateVehicleComponent', () => {
  let component: CreateVehicleComponent;
  let fixture: ComponentFixture<CreateVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateVehicleComponent],
      imports: [
        HttpClientTestingModule, // ✅ for HttpClient inside VehiclesService
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [
        VehiclesService,
        {
          provide: ActivatedRoute,
          useValue: {
          params: of({ id: 123 })
        }
          }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
