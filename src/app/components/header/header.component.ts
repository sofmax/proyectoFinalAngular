
import { Component, OnInit, Input,Output ,EventEmitter, NgZone} from '@angular/core';
import { AuthService } from "../../core/service/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
    ) { }

  ngOnInit() {
  }

}
