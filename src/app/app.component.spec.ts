import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-app-june2025'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-app-june2025');
  });

 it('should render title correctly', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // 👈 required to trigger data binding

    const compiled = fixture.nativeElement as HTMLElement;

    console.log('Rendered HTML:', compiled.innerHTML); // ✅ Debug

    const text = compiled.textContent?.trim(); // 👈 get visible text
    expect(text).toContain('my-app-june2025 app is running!');
  });
});
