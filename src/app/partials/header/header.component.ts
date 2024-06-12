import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  // @Input() public item : string
  public count : number = 0
  public links : Array<string> = ['Home', 'Blog', 'Api', 'Contact', 'Admin']
  // constructor() {
    
  // }

  inc() {
    this.count++
  }
}
