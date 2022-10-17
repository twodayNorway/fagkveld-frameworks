import { Component } from '@angular/core';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css'],
})
export class DogComponent {

  showDog: boolean = true;
  buttonPropText: String = "katt"

  toggleDogHandler() {
    this.showDog = !this.showDog;
    this.buttonPropText = this.showDog ? "katt" : "hund"
  }

}
