import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.css']
})
export class NavDrawerComponent implements OnInit {

  @Input()
  @HostBinding('class.drawer-open')
  isDrawerOpen: boolean | undefined;

  @Output()
  drawerToggleEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  onNavLinkClicked($event: MouseEvent) {
    (function smoothscroll() {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
    this.isDrawerOpen = false;
    this.drawerToggleEmitter.emit(this.isDrawerOpen);
  }

  onSignOutClicked($event: MouseEvent) {
    (function smoothscroll() {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
    this.isDrawerOpen = false;
    this.drawerToggleEmitter.emit(this.isDrawerOpen);
    this.authService.SignOut().then(r => r);
  }
}
