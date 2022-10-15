
 // changement des slides

 var ladate = document.querySelector('.content .date') ; 
 
 var info = document.querySelector('.content .info') ; 
 
 var paye = document.querySelector('.content .paye') ; 

var page1= document.querySelector('.content aside ul li .page1') ;
var page2= document.querySelector('.content aside ul li .page2') ;
var page3= document.querySelector('.content aside ul li .page3') ;

 var next = document.querySelector('.btn .next') ;
 var previous = document.querySelector('.btn .previous') ;

 next.addEventListener('click' , function(){
   // console.log(date.className);
    //console.log(date.nextElementSibling)
    if (ladate.className ==='date active'){
        info.style.display = 'flex';
        ladate.style.display = 'none';
        paye.style.display = 'none';
        page1.classList.remove('active');
        page1.innerHTML = '&#10003;';
        previous.innerHTML = "السـابـــــقــــــــ";
        page2.classList.add('active');
        ladate.classList.remove('active');
        info.classList.add('active');
    }
    else
    if (info.className =='info active'){
        info.style.display = 'none';
        ladate.style.display = 'none';
        paye.style.display = 'flex';
        page2.classList.remove('active');
        page2.innerHTML = '&#10003;';
        page3.classList.add('active');
        next.textContent = 'تـــأكيـــــــــــــــد';
        previous.innerHTML = "السـابـــــقــــــــ";
        info.classList.remove('active');
        paye.classList.add('active');
    }
    

 })
 previous.addEventListener('click' , function(){
    if (info.className ==='info active'){
        info.style.display = 'none';
        ladate.style.display = 'flex';
        paye.style.display = 'none';
        page2.classList.remove('active');
        page1.classList.add('active');
        previous.innerHTML = "<a href='/brief.html'>السـابـــــقــــــــ</a>";
        page1.innerHTML = '1';
        info.classList.remove('active');
        ladate.classList.add('active');
    }
    else
    if (paye.className =='paye active'){
        info.style.display = 'flex';
        ladate.style.display = 'none';
        paye.style.display = 'none';
        page3.classList.remove('active');
        page2.classList.add('active');
        page2.innerHTML = '2';
        next.textContent = 'التــــــــــالــــــي';
        previous.innerHTML = "السـابـــــقــــــــ";
        paye.classList.remove('active');
        info.classList.add('active');
    }

 });



// calander 

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


  
//change slide with aside click : 

var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');




first.addEventListener('click', function(){
  info.style.display = 'none';
  ladate.style.display = 'flex';
  paye.style.display = 'none';
  page2.classList.remove('active');
  page3.classList.remove('active');
  page1.classList.add('active');
  previous.innerHTML = "<a href='/brief.html'>السـابـــــقــــــــ</a>";
  page1.innerHTML = '1';
  info.classList.remove('active');
  ladate.classList.add('active');
  paye.classList.remove('active');
  page2.innerHTML = '2';
})
second.addEventListener('click', function(){
  info.style.display = 'flex';
        ladate.style.display = 'none';
        paye.style.display = 'none';
        page3.classList.remove('active');
        page1.classList.remove('active');
        page2.classList.add('active');
        page2.innerHTML = '2';
        page1.innerHTML = '&#10003;';
        next.textContent = 'التــــــــــالــــــي';
        previous.innerHTML = "السـابـــــقــــــــ";
        paye.classList.remove('active');
        info.classList.add('active');
        ladate.classList.remove('active');
})
third.addEventListener('click', function(){
  info.style.display = 'none';
        ladate.style.display = 'none';
        paye.style.display = 'flex';
        page2.classList.remove('active');
        page1.classList.remove('active');
        page2.innerHTML = '&#10003;';
        page1.innerHTML = '&#10003;';
        page3.classList.add('active');
        next.textContent = 'تـــأكيـــــــــــــــد';
        previous.innerHTML = "السـابـــــقــــــــ";
        info.classList.remove('active');
        ladate.classList.remove('active');
        paye.classList.add('active');
})



// hour events 

heurdebut = document.getElementById('debut') ;
heurfin = document.getElementById('fin') ;
nbrhour = heurfin.textContent - heurdebut.textContent;
plus = document.getElementById('plus') ;
moins = document.getElementById('moins') ;
hour=document.getElementById('hour');


plus.addEventListener('click',function(){

  
 if(parseInt(hour.value) < nbrhour){
    hour.value = parseInt(hour.value) + 1 ; 
  }
  else {
    hour.value = 0 ; 
  }
});
moins.addEventListener('click',function(){

  
  if(parseInt(hour.value) > 0 ){
     hour.value = parseInt(hour.value) - 1 ; 
   }
   else {
     hour.value = nbrhour ; 
   }
 })
 hour.addEventListener('change',function(){

  
  if(parseInt(hour.value) > nbrhour){
     hour.value = nbrhour ; 
   }
   else if (parseInt(hour.value) < 0){
     hour.value = 0 ; 
   }
 })

 //methode de paiement 
 bna = document.getElementById('bna');
 cpa = document.getElementById('cpa');
 bnainfo = document.getElementById('bnainfo');
 cpainfo = document.getElementById('cpainfo');

bna.parentNode.addEventListener('click' , function(){
  bnainfo.style.display = 'flex'; 
})
bnainfo.addEventListener('click' , function(){
  bnainfo.style.display = 'none'; 
})

cpa.parentNode.addEventListener('click' , function(){
  cpainfo.style.display = 'flex'; 
})
cpainfo.addEventListener('click' , function(){
  cpainfo.style.display = 'none'; 
})