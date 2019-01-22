import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-loading-btn',
  templateUrl: './loading-btn.component.html',
  styleUrls: ['./loading-btn.component.scss']
})

export class LoadingBtnComponent implements OnInit {
    @Input() load : boolean = true
    @Input('btnText') btnText : string = "Save Me"
    @Input('btnIcon') btnIcon : string = "fa-file-o"

    constructor() { }

    ngOnInit() {
    }

}
