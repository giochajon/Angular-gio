import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorServiceService {

  getAuthors() {
    return ["auth1","auth2","auth3","auth4"];
}

  constructor() { }
}
