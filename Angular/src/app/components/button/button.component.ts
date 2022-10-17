import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() buttonText: String
  @Output() newItemEvent = new EventEmitter<string>();

  buttonFunction() {
    this.newItemEvent.emit("Clicked");
  }

}
