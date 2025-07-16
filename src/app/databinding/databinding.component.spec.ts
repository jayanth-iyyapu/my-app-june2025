import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // ✅ Add this
import { DatabindingComponent } from './databinding.component';

describe('DatabindingComponent', () => {
  let component: DatabindingComponent;
  let fixture: ComponentFixture<DatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatabindingComponent],
      imports: [FormsModule] // ✅ Required for [(ngModel)]
    }).compileComponents();

    fixture = TestBed.createComponent(DatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
