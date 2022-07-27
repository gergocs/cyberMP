import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {DatabaseHandlerService} from "../../services/database-handler.service";
import {Server} from "../../models/server";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthService} from "../../services/auth.service";
import {faDeleteLeft, faFileCirclePlus, faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  server$: Observable<Array<Server>> = this.databaseHandler.server$;
  servers: Server[] = [];
  admins: String[] = [];
  length = 4;
  pageSize = 4;
  name = '';
  ip = '';
  image = '';

  faDelete = faDeleteLeft;
  faCreate = faFileCirclePlus;
  faTrash = faTrashCan;

  ipReg = new RegExp("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]):[0-9]+$");

  constructor(private databaseHandler: DatabaseHandlerService, private router: Router, private snackBar: MatSnackBar, public authService: AuthService) {
    this.databaseHandler.admin$.subscribe(
      data => {
        this.admins = data[0].uid;
      }
    )
    this.server$.subscribe(
      data => {
        this.servers = data;
        this.length = this.servers.length;
        for (let i = 0; i < this.length; i++) {
          if (this.servers[i].image == "") {
            this.servers[i].image = "https://gifer.com/embed/2RNE";
            console.log(this.servers[i]);
          }
        }
        //TODO
        /*for (let i = 0; i < data.length; i++) {
          (async () => {
            const controller = new AbortController();
            const signal = controller.signal;
            fetch(data[i].ip, {
              mode: 'no-cors',
              signal
            }).then(response => {
              if (response.ok){
                this.servers.push(data[i]);
              }
            }).catch(() =>{
            });
            setTimeout(() => {
              controller.abort()
            }, 3000)
          })()
        }*/
      }
    );
  }

  ngOnInit(): void {
  }

  openSnackBar() {
    this.snackBar.open("IP copied to clipboard", "OK", {
      duration: 5000,
      panelClass: ['snackbar'],
    });
  }

  submitServer() {
    if (this.name == "" || this.ip == "" || !this.ip.match(this.ipReg)) {
      this.snackBar.open("Invalid Name or IP", "OK", {
        duration: 5000,
        panelClass: ['snackbar'],
      });
      return;
    }

    const notFound = [
      "https://i.gifer.com/2RNE.gif",
      "https://c.tenor.com/IHdlTRsmcS4AAAAC/404.gif"
    ]
    if (this.image == "") {
      this.image = notFound[Math.floor(Math.random() * notFound.length)];
    }

    this.databaseHandler.addServer({
      name: this.name,
      ip: this.ip,
      image: this.image,
    }).then(r => {
    });
  }

  deleteServer(ip: string) {
    this.databaseHandler.deleteServer(ip).then(r => {
    }).catch(e => {
      console.log(e);
    });
  }

}//mat-simple-snackbar ng-star-inserted
