import {Injectable} from '@angular/core';
import {from, Observable} from "rxjs";
import {Document} from "../models/document";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  DocumentReference
} from "@angular/fire/compat/firestore";
import {Server} from "../models/server";
import {Admin} from "../models/admin";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class DatabaseHandlerService {
  private documentAngularFirestoreCollection: AngularFirestoreCollection<Document>;
  private serverAngularFirestoreCollection: AngularFirestoreCollection<Server>;
  private adminAngularFirestoreCollection: AngularFirestoreCollection<Admin>;

  documentation$: Observable<Document[]>;
  server$: Observable<Server[]>;
  admin$: Observable<Admin[]>;

  constructor(private afs: AngularFirestore) {
    this.documentAngularFirestoreCollection = afs.collection<Document>('documentation');
    this.serverAngularFirestoreCollection = afs.collection<Server>('servers');
    this.adminAngularFirestoreCollection = afs.collection<Admin>('admins');
    this.documentation$ = this.documentAngularFirestoreCollection.valueChanges();
    this.server$ = this.serverAngularFirestoreCollection.valueChanges();
    this.admin$ = this.adminAngularFirestoreCollection.valueChanges();
  }

  addServer(server: Server){
    return this.afs.collection(`servers`).doc(server.ip).set(server, {
      merge: true,
    });
  }

  deleteServer(ip: string){
    console.log(ip);
    return this.afs.collection(`servers`).doc(ip).delete();
  }

  addUserPost(document: Document): Observable<DocumentReference> {
    // @ts-ignore
    return from(this.userPostsCollection.add(document));
  }
}
