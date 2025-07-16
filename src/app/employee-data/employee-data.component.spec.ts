import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeDataComponent } from './employee-data.component';
import { TextareaComponent } from '../textarea/textarea.component'; // Update path
import { FormsModule } from '@angular/forms';

describe('EmployeeDataComponent', () => {
  let component: EmployeeDataComponent;
  let fixture: ComponentFixture<EmployeeDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        EmployeeDataComponent,
        TextareaComponent 
      ],
       imports: [FormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
