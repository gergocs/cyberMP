import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {DragScrollComponent} from "ngx-drag-scroll";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private counter = 0;
  private left = false;
  width: number = 400;

  constructor() { }

  ngOnInit(): void {
  }
  // @ts-ignore
  @ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent;

  @HostListener('window:resize', ['$event'])
  onResize(_ : any) {
    if (window.innerWidth < 1100){
      this.width = window.innerWidth - 400;
    } else {
      this.width = 600;
    }
  }

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
    window.setInterval(() => {
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

  download(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'abc.net/files/test.ino');
    link.setAttribute('download', `products.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
