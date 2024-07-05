function clickMenu(){
   if(mobilelinks.style.display == 'flex'){
      mobilelinks.style.display = 'none'
      headercontent.style.height = '20px'
   } else{
      mobilelinks.style.display = 'flex'
      headercontent.style.height = 'auto'
   }
}
