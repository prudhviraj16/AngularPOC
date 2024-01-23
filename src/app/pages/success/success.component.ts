import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {
  @Input() name: string = ''
  @Output() close = new EventEmitter<boolean>();

  // On clicking on the screen, we would be navigating again to the contact form 
  public onSuccessView() {
    this.close.emit(false)
  }
}
