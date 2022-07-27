import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cyberMP';

  name = 'NavigationBarProject';

  @HostBinding("class.drawer-open")
  isDrawerOpen: boolean = false;
  private cookieMessage: string = "The website uses cookies";
  private cookieDismiss: string = "Accept";
  private cookieLinkText: string = "More information";

  toggleDrawer(isDrawerOpen: boolean) {
    this.isDrawerOpen = isDrawerOpen;
  }

  ngOnInit(): void {
    let cc = window as any;
    cc.cookieconsent.initialise({
      palette: {
        popup: {
          background: "#164969"
        },
        button: {
          background: "#ffe000",
          text: "#164969"
        }
      },
      theme: "classic",
      content: {
        message: this.cookieMessage,
        dismiss: this.cookieDismiss,
        link: this.cookieLinkText,
        href: "/dataprivacy"
      }
    });
  }
}
