

export class Storage {
    txt = {
        local:"This broswer dont support the localStorage",
        session:"This broswer dont support the sessionStorage"
    }
    constructor(){
    }
    local(){
        return{
            set:(key,values)=>{
                if(this.hasLocalStorage()){
                    window.localStorage.setItem(key,JSON.stringify(values))
                }else{
                    this.log(this.txt.local)
                }
                
            },
            get:(key)=>{
                if(this.hasLocalStorage()){
                    return JSON.parse(window.localStorage.getItem(key))
                }else{
                    this.log(this.txt.local)
                }
            },
            delete:(key)=>{
                if(this.hasLocalStorage()){
                    window.localStorage.removeItem(key)
                }else{
                    this.log(this.txt.local)
                }
            },
            clear:()=>{
                if(this.hasLocalStorage()){
                    window.localStorage.clear()
                }else{
                    this.log(this.txt.local)
                }
            }
        }
    }
    session(){
        return{
            set:(key,values)=>{
                if(this.hasSessionStorage()){
                    window.sessionStorage.setItem(key,JSON.stringify(values))
                }else{
                    this.log(this.txt.local)
                }
                
            },
            get:(key)=>{
                if(this.hasSessionStorage()){
                    return JSON.parse(window.sessionStorage.getItem(key))
                }else{
                    this.log(this.txt.local)
                }
            },
            delete:(key)=>{
                if(this.hasSessionStorage()){
                    window.sessionStorage.removeItem(key)
                }else{
                    this.log(this.txt.local)
                }
            },
            clear:()=>{
                if(this.hasSessionStorage()){
                    window.sessionStorage.clear()
                }else{
                    this.log(this.txt.local)
                }
            }
        }
    }
    hasLocalStorage(){
        if(window.localStorage){
            return true
        }
        return false
    }
    hasSessionStorage(){
        if(window.sessionStorage){
            return true
        }
        return false
    }
    log(txt){
        console.log(txt);
    }
} 