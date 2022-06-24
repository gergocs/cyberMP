import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  navElement: HTMLElement | undefined;

  isDrawerOpen: boolean | undefined;

  @Output()
  drawerToggleEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    // @ts-ignore
    this.navElement = null;
    this.isDrawerOpen = false;
  }

  ngAfterViewInit() {
    this.navElement = <HTMLElement> document.getElementById("navbar");
  }

  @HostListener("window:scroll", ["$event"])
  onScroll($event: Event) {
    let scrollFactor = 200;
    let opacity = (window.pageYOffset / scrollFactor);
    opacity = opacity < 1 ? opacity : 1;

    if (opacity <= 1) {
      // @ts-ignore
      this.navElement.style.backgroundColor = "rgba(248, 239, 2, " + opacity + ")";
    }

    if (window.pageYOffset / scrollFactor > 1) {
      // @ts-ignore
      this.navElement.classList.add("navbar-shadow");
    } else {
      // @ts-ignore
      this.navElement.classList.remove("navbar-shadow");
    }
  }

  toggleNavDrawer(isDrawerOpen: boolean) {
    this.isDrawerOpen = isDrawerOpen;
    this.drawerToggleEmitter.emit(this.isDrawerOpen);
  }


  onLogo() {
    (function smoothscroll() {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  }
}
