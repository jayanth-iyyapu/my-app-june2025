import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";

it('should render title correctly', () => {
  const fixture = TestBed.createComponent(AppComponent);
  fixture.detectChanges();

  const compiled = fixture.nativeElement as HTMLElement;

  // Log what's actually rendered
  console.log('Rendered HTML:', compiled.innerHTML);

  // Try different selectors to match your actual HTML
  const contentText = compiled.querySelector('.content span')?.textContent 
                   || compiled.querySelector('h1')?.textContent 
                   || '';

  expect(contentText).toContain('my-app-june2025 app is running!');
});
