const getDiff = (d1,d2) => {
    const firstDate = d1 && new Date(d1);
    const secondDate = d1 && new Date(d2);
    var t1 = firstDate.getTime();// long number 
    var t2 = secondDate.getTime(); // long number
    let str='';
    let days = parseInt((t2-t1)/(24*3600*1000)); 
    let numberOfMonth =0;
    let numberYr = 0;
    if(days >= 365){
        while(days >= 365){
            numberYr ++;
            days = days-365;
        }
    }
    if(days >=30){
        while(days >= 30){
            numberOfMonth ++;
            days = days - 30
        }
    }
    if(days<30)
     str =days + ' days ' + str
     
    if(numberOfMonth !==0)
      str = numberOfMonth + ' month ' + str;

    if(numberYr !==0)
      str = numberYr + ' year ' + str;


      return str;
}

export default getDiff;