import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faCogs } from '@fortawesome/free-solid-svg-icons'
import { faArchive } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, RouterModule, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    faHouse = faHouse;
    faPlusCircle = faPlusCircle;
    faCogs = faCogs;
    faArchive = faArchive;

}
