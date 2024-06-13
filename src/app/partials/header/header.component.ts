import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }
}
