import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faBox } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'new-request',
  standalone: true,
  imports: [],
  templateUrl: './new-request.component.html',
  styleUrl: './new-request.component.css'
})
export class NewRequestComponent {
    faBox = faBox;

}

//fa - box for Package Name
//fa - user for Application Owner
//fa - user - tie for Application Manager
//fa - user - shield for SCCM SPOC Name
//fa - globe