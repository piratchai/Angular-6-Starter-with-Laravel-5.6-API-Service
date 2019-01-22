import { Component,Injectable ,OnInit} from '@angular/core';
import {Router} from '@angular/router'
/**
 * Services
 */
import { AuthService } from '../app/services/personal-account/auth.service'

/**
 * Hepers
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()

export class AppComponent implements OnInit {
  title = 'app';
    constructor(private auth:AuthService,private router:Router){
        if(!this.auth.isLoggedIn){
            //this.router.navigate(['/login'])
        }
    }
    ngOnInit(){

    }
}
