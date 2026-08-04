import { AuthorServiceService } from './../author-service.service';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-authors',
    //templateUrl: './authors.component.html',
    styleUrls: ['./authors.component.css'],
    template: `
  <ul>
    @for (author of authors; track author) {
      <li>
        {{ author }}
      </li>
    }
  </ul>
  `,
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AuthorsComponent  {
  authors; //= ['auth1','auth2','auth3','auth4']
  constructor(service:AuthorServiceService) { 
  this.authors = service.getAuthors(); 
  }

}
