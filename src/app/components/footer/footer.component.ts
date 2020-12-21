
import { Component, OnInit, Input,Output ,EventEmitter, NgZone} from '@angular/core';
import { AuthService } from "../../core/service/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }
  ngOnInit() {
  }

}


  