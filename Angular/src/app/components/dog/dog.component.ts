import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dogState: boolean = true

  toggleDogHandler() {
    this.dogState = !this.dogState
  }

}
