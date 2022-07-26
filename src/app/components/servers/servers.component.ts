import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {DatabaseHandlerService} from "../../services/database-handler.service";
import {Server} from "../../models/server";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  server$: Observable<Array<Server>> = this.databaseHandler.server$;
  servers: Server[] = [];
  length = 4;
  pageSize = 4;
  constructor(private databaseHandler: DatabaseHandlerService, private snackBar: MatSnackBar) {
    this.server$.subscribe(
      data => {
        this.servers = data;
        this.length = this.servers.length;
        for (let i = 0; i < this.length; i++){
          if (this.servers[i].image == ""){
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

}//mat-simple-snackbar ng-star-inserted
