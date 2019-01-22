export interface Activities {
    errors:{},
    results:{
        data:{
            id         :   number,         
            user_id    :   number,
            owner_id   :   number,
            type       :   string,       
            title      :   string,       
            state      :   number,     
            created_at :   Date, 
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

export interface Activity{
    id         :   number,         
    user_id    :   number,
    owner_id   :   number,
    type       :   string,       
    title      :   string,       
    state      :   number,     
    created_at :   Date, 
}