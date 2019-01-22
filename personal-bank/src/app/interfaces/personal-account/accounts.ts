export interface Accounts {
    errors:{},
    results:{
        data:{
            id         :   number,         
            user_id    :   number,    
            type       :   string,       
            iban       :   string,       
            balance    :   string,    
            active     :   number,     
            created_at :   Date, 
            updated_at :   Date,
        },
        total           :  number
        current_page    :  number,
        last_page_url   :  string,
        next_page_url   :  string,
        prev_page_url   :  string,
        per_page        :  number,
        path            :  string
    }
    messages:{},
    status:null 
}
