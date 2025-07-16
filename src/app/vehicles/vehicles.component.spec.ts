import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiclesComponent } from './vehicles.component';
import { VehiclesService } from '../vehicles.service'; // Adjust the path as needed
import { HttpClientTestingModule } from '@angular/common/http/testing'; // ✅ import this
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // If your component uses forms

describe('VehiclesComponent', () => {
  let component: VehiclesComponent;
  let fixture: ComponentFixture<VehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehiclesComponent],
      imports: [
        HttpClientTestingModule, // ✅ provides HttpClient
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [VehiclesService] // Optional if Injectable already providedIn: 'root'
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
