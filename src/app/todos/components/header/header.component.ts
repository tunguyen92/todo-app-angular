import { Component } from '@angular/core';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todos-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  faBars = faBars;
  faSearch = faSearch;
}
