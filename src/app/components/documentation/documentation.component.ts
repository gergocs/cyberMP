import { Component, OnInit } from '@angular/core';
import {DatabaseHandlerService} from "../../services/database-handler.service";
import {Observable} from "rxjs";
import {Document} from "../../models/document";

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  documentation$: Observable<Array<Document>> = this.databaseHandler.documentation$;

  documentation: Document[] = [];

  constructor(private databaseHandler: DatabaseHandlerService) {
    this.documentation$.subscribe(
      data => this.documentation = data
    );
  }

  ngOnInit(): void {
  }

}
