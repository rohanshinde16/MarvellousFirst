import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div ng-app>
  <h1>Inline Format</h1>
             <p>Marvellous Infosystems : <input type="text" name="First"></p>
              </div>
              `,
  styles: ['p{color:blue}']
})
export class AppComponent {
  title = 'MarvellousFirst';
}
