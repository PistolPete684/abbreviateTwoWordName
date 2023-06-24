function abbrevName(name){

    // code away
  const strArr = name.split(' ');
  const initials = strArr[0][0].toUpperCase() + "." + strArr[1][0].toUpperCase();
  return initials;
}