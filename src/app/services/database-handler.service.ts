import {Injectable} from '@angular/core';
import {from, Observable} from "rxjs";
import {Document} from "../models/document";
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from "@angular/fire/compat/firestore";
import {Server} from "../models/server";

@Injectable({
  providedIn: 'root'
})
export class DatabaseHandlerService {
  private documentAngularFirestoreCollection: AngularFirestoreCollection<Document>;
  private serverAngularFirestoreCollection: AngularFirestoreCollection<Server>;

  documentation$: Observable<Document[]>;
  server$: Observable<Server[]>;

  constructor(private afs: AngularFirestore) {
    this.documentAngularFirestoreCollection = afs.collection<Document>('documentation');
    this.serverAngularFirestoreCollection = afs.collection<Server>('servers');
    this.documentation$ = this.documentAngularFirestoreCollection.valueChanges();
    this.server$ = this.serverAngularFirestoreCollection.valueChanges();
  }

  addUserPost(document: Document): Observable<DocumentReference> {
    // @ts-ignore
    return from(this.userPostsCollection.add(document));
  }
}
