export interface Account {
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
    }
    messages:{},
    status:null
}

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
    }
    messages:{},
    status:null
}

export interface Transactions {
    errors:{},
    results:{
        data:{
            id         :   number,         
            account_id :   number,    
            ammount    :   string,       
            title      :   string,    
            state      :   number,     
            created_at :   Date, 
            updated_at :   Date,
        },
    }
    messages:{},
    status:null
}
