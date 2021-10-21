function calculateAge(ano,mes,dia){
  const date = new Date();
  const year = date.getFullYear();
  const day = date.getDate();
  const month  = date.getMonth() + 1;
  let age ; 

  if(month < mes ){
    age = (year - ano) -1 ;
  }else if (month == mes){
    if(day < dia){
      age = (year - ano) -1 ;
    }else {
      age = (year - ano);
    }
  }else {
    age = (year - ano);
  }
  
  return age;
}

module.exports = calculateAge;