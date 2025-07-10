import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent {
@Input() maxLength: number = 100; 
  text: string = '';
    get wordCount(): number {
    if (!this.text.trim()) return 0;
    return this.text.trim().split(/\s+/).length;
  }
}
