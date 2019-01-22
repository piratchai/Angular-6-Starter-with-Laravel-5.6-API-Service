export class Data {

    constructor(){

    }
    format(date,date_format='yyyy-mm-dd',time_want=false){
        var hour,min,sec,month,fulltime;
        if( typeof date  == "undefined" ){
            date  = new Date()
        }       
        var value_date:any =  new Date(date);
        if(value_date.getDate() < 10 ){
			date = '0' + value_date.getDate();
		}else{
			date = value_date.getDate();
		}
		 month = parseInt(value_date.getMonth()) + 1;
		if(month < 10 ){
			month = '0' + month;
		}else{
			month = value_date.getMonth();
			month = parseInt(month)+1;
		}
		if(time_want){
			if(value_date.getHours() < 10 ){
				hour = '0' + value_date.getHours();
			}else{
				hour = value_date.getHours();
			}

			if(value_date.getMinutes() < 10 ){
				min = '0' + value_date.getMinutes();
			}else{
				min = value_date.getMinutes();
			}

			if(value_date.getSeconds() < 10 ){
				sec = '0' + value_date.getSeconds();
			}else{
				sec = value_date.getSeconds();
			}
			fulltime = hour + ":" + min + ":" + sec;
			if(date_format=='yyyy-mm-dd'){
				value_date = value_date.getFullYear() + "-" + month + "-" + date +  " "  + fulltime;
			}else if(date_format =='yyyy/mm/dd'){
				value_date = value_date.getFullYear() + "/" + month + "/" + date +  " "  + fulltime;
			}else if(date_format =='dd/mm/yyyy'){
				value_date = date+"/"+month+"/"+value_date.getFullYear() + " " + fulltime;
			}
			
			
		}else{
			if(date_format=='yyyy-mm-dd'){
				value_date = value_date.getFullYear() + "-" + month + "-" + date;	
			}else if(date_format=='yyyy/mm/dd'){
				value_date = value_date.getFullYear() + "/" + month + "/" + date;	
			}else if(date_format =='dd/mm/yyyy'){
				value_date = date+"/"+month+"/"+value_date.getFullYear();
			}
			
		}
	    return value_date;
    }
}