import qs from 'qs'

export class QueryString {

    constructor(){

    }
    
    set(key,obj){
        return this.queryStringToUrl(key,obj)
    }
    get(key){
        return this.getQueryStringParam(key)
    }
    getFilters(keyfilter,name){
        return this.getQueryStringFilterParam(keyfilter,name)
    }
    remove(){
        //Maybe use set
    }
    hasState(){
        if(window.history.replaceState){
            return true
        }
        return false
    }

    /**
     * getQueryStringParam Check if the url have a param with a value
     * @param  {String} name Name of param
     * @return {String} Return The value of or empty string
     * @example
     * this.getQueryStringParam('to') !=""?true:false
     */
    getQueryStringParam(name) {
        var prefix = qs.parse( window.location.search, { ignoreQueryPrefix: true } )

        if (prefix[name]) {
            return prefix[name]?prefix[name]:'';
        }

        return '';
    }

    /**
     * getQueryStringFilterParam Check if the url have a paramFilter key with a value
     * @param  {String} name Name of param
     * @return {String} Return The value of or empty string
     * @example
     * this.getQueryStringFilterParam('accounts','type')
     */
    getQueryStringFilterParam(keyfilter, name) {
        var prefix = qs.parse( window.location.search, { ignoreQueryPrefix: true } )
        if (prefix['filters'] && prefix['filters'][keyfilter]) {
            return prefix['filters'][keyfilter][name]?prefix['filters'][keyfilter][name]:'';
        }

        return '';
    }

    /**
     * queryStringToUrl Add queryString to url without refresh the page
     * @param  {String} key     The param name like to or from 
     * @param  {String} value   The Value of param
     * @return {Void}
     * @example 
     * this.queryStringToUrl('accounts',{type:'TEST'}|'TEST')
     */
    queryStringToUrl(key, value){

        if(this.hasState()){
            var baseUrl = [location.protocol, '//', location.host, location.pathname].join('');
            var params  ='';
            var queryStringObject   = qs.parse( window.location.search, { ignoreQueryPrefix: true } );
            queryStringObject       = Object.assign(queryStringObject,{[key]:value});
            params                  = qs.stringify(queryStringObject  ,{ addQueryPrefix: true });
            window.history.replaceState({}, "", baseUrl + params);
        }
    }
}






