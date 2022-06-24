import {Component, OnInit, ViewChild} from '@angular/core';
import {DragScrollComponent} from "ngx-drag-scroll";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private counter = 0;
  private left = false;

  faLeft = faArrowLeft;
  faRight = faArrowRight;

  constructor() { }

  ngOnInit(): void {
  }
  // @ts-ignore
  @ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent;

  moveLeft() {
    this.ds.moveLeft();
    this.counter--;
  }

  moveRight() {
    this.ds.moveRight();
    this.counter++;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.ds.moveTo(0);
    }, 0);
    const intervalId = window.setInterval(() => {
      if (this.counter <= 0) {
        this.counter = 0;
        this.left = false;
      }
      if (this.counter >= 3) {
        this.counter = 3;
        this.left = true;
      }

      if (this.left) {
        this.counter--;
        this.ds.moveLeft();
      } else {
        this.ds.moveRight();
        this.counter++;
      }
    }, 5000);
  }

}
