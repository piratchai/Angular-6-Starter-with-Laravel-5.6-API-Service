import { Component, OnInit,Input ,Injectable} from '@angular/core';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';

/**
 * Interface
 */
import {Pagination} from '../../interfaces/helpers/pagination'


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

@Injectable()

export class PaginationComponent implements OnInit {
    
    page        :0
    next        :false
    preview     :false
    @Input('paginate')          paginate        : Pagination
    @Input('onClickPage')       onClickPage     : Function
    @Input('onClickNext')       onClickNext     : Function
    @Input('onClickPreview')    onClickPreview  : Function
    
    @Input('nextText')          nextText        : string =  "Next"
    @Input('previewText')       previewText     : string =  "Previous"

    constructor() { }

    ngOnInit() {
        this.onClickPage            = this.onClickPage.bind(this)
        this.onClickNext            = this.handlerClickNext.bind(this)
        this.handlerClickPreview    = this.handlerClickPreview.bind(this)
    }
    handlerClickNext(){
        this.onClickPage(this.paginate.next_page_url)
    }
    handlerClickPreview(){
        this.onClickPage(this.paginate.prev_page_url )
    }
    handlerClickPage(page){
        this.onClickPage(this.paginate.path+'?page='+page)
    }
    activePageClass(page){
        return page==this.paginate.current_page ? " active " : ""
    }
    disabledPreviewClass(){
        return this.paginate.current_page == 1 ? " disabled " : ""
    }
    disabledNextClass(){
        return this.paginate.current_page == this.roundPageNumber() ? " disabled " : ""
    }
    linkPageNumber(){
        let links = []
        for(let r=1 ; r <= this.roundPageNumber() ;r++){
            links.push(r)
        }
        return links
    }
    roundPageNumber(){
        return  Math.round( this.paginate.total / this.paginate.per_page )
    }
}
