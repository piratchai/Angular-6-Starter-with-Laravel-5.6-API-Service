export interface Auth {
    errors:{
        username:"",
        password:""
    },
    results:{
        data:{
            id          : number,
            name        : string,
            subname     : string,
            email       : string,
            username    : string,
            token       : string,
            role_id     : string,
            avatar_url  : string,
            active      : boolean,
            created_at  : Date,
            updated_at  : Date
        },
        token:''
    },
    messages:{},
    status:null
}

export interface User {
    id          : number,
    name        : string,
    subname     : string,
    email       : string,
    username    : string,
    token       : string,
    role_id     : string,
    avatar_url  : string,
    active      : boolean,
    created_at  : Date,
    updated_at  : Date    
}

export interface Profile {
    errors:{},
    results:{
        data:{
            id          : number,
            name        : string,
            subname     : string,
            email       : string,
            username    : string,
            token       : string,
            role_id     : string,
            avatar_url  : string,
            active      : boolean,
            created_at  : Date,
            updated_at  : Date
        },
        token:''
    },
    messages:{},
    status:null
}

export interface ProfileDelete {
    errors:{},
    results:{
        deleted:boolean
    },
    messages:{},
    status:null
}

export interface ActiveAccount {
    errors:{},
    results:{
        redirect_url:string
    },
    messages:{},
    status:null
}


export interface UserProfile {
    id          : number,
    name        : string,
    subname     : string,
    email       : string,
    username    : string,
    password    : string,
    password_confirmation:string,
    token       : string,
    role_id     : string,
    avatar_url  : string,
    active      : boolean,
    created_at  : Date,
    updated_at  : Date,
    avatar      : any    
}
