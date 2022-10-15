const date = new Date();

const renderCalander = () => {
  monthDays= document.querySelector('.days')
const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];
const lastDate = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();

const prevLastDate = new Date(date.getFullYear(),date.getMonth(),0).getDate();

date.setDate(1);

document.querySelector('.date h1').textContent = months[date.getMonth()] ; 
//const month = date.getMonth();

let days = " " ;


const firstDayIndex = date.getDate();
for (let j=firstDayIndex  ; j > 0 ; j--){
     days += '<div class="prev-date">' +( prevLastDate -j + 1  )+'</div>';
}




for(let i=1 ; i<= lastDate ; i++){
  

  if(i == new Date().getDate() && date.getMonth() === new Date().getMonth()){
    
    days += '<div class="today">' + i +'</div>';
}
 else{
   days += '<div>' + i +'</div>';
 }
}


const lastDayIndex = new Date(date.getFullYear(),date.getMonth()+1,0).getDay();

const  nextDays = 7-lastDayIndex-1; 

for(let k=1 ; k<= nextDays ; k++){
 days += '<div class="next-date">' + k +'</div>';
   monthDays.innerHTML= days ;
};

document.querySelector('.date p').textContent = document.querySelector('.date p').textContent =  document.querySelector('.date h1').textContent + ' ' + date.getDate() + ','  + (date.getYear()- 100 + 2000 );
var jour = document.querySelector('.days').childNodes;

for(let d= 0 ; d< jour.length ; d++){
  jour[d].addEventListener("click",function(){
    if(jour[d].className !== 'next-date' && jour[d].className !== 'prev-date') {
      console.log( this.textContent);
      document.querySelector('.date p').textContent=    document.querySelector('.date h1').textContent + ' ' + this.textContent + ','  + (date.getYear()- 100 + 2000 );
    }
  })}

}


document.querySelector('.next').addEventListener('click' ,function(){
  console.log('next');
  date.setMonth(date.getMonth() + 1 );
  renderCalander();
})

document.querySelector('.prev').addEventListener('click' ,function(){
  console.log('prev');
  date.setMonth(date.getMonth() - 1 );
    renderCalander();

})
  renderCalander();





/* changement des slides */


var prev= document.getElementById('prev');
var next= document.getElementById('next');
var page1= document.getElementById('page1');
var page2= document.getElementById('page2');
var nbrpage= document.getElementById('nbrpage');


next.addEventListener('click' , function(){
  if (page1.className ==='page page1 active'){
    page2.style.display = 'flex';
    page1.style.display = 'none';
    page1.classList.remove('active');
    prev.innerHTML = "السابق";
    next.innerHTML = "تأكيـد";
    page2.classList.add('active');
    nbrpage.innerHTML= '2/2' ;
    console.log('okey next');

}});
prev.addEventListener('click' , function(){
  if (page2.className ==='page page2 active'){
    page1.style.display = 'flex';
    page2.style.display = 'none';
    page2.classList.remove('active');
    prev.innerHTML = "<a href='/updatebrief.html'>السابق</a>";
    next.innerHTML = "التــالـــي";
    page1.classList.add('active');
    nbrpage.innerHTML= '1/2' ;
    console.log('okey prev');
}});  
