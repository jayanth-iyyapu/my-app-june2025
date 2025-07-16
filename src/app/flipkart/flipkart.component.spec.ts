import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // <-- Import this
import { FlipkartComponent } from './flipkart.component';
import { RatingComponent } from '../rating/rating.component';

describe('FlipkartComponent', () => {
  let component: FlipkartComponent;
  let fixture: ComponentFixture<FlipkartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
       declarations: [FlipkartComponent, RatingComponent],
      imports: [ FormsModule ] 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipkartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
