import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParentComponent } from './parent.component';
import { ChildComponent } from '../child/child.component'; 
import { FormsModule } from '@angular/forms';
import { IdCardService } from '../id-card.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ParentComponent,
        ChildComponent // ✅ Add this
      ],
         imports: [ HttpClientTestingModule, FormsModule ],
    }).compileComponents();

    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
