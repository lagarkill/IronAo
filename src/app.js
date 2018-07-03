//#########Declara variable for slider container and the buttons for move the images

let slider = $('#slider');

let li = $('#slider li')

let next = $('#btn-right');

let previous = $('#btn-left');

//##############################Move last image for the first place

$('#slider li:last').insertBefore('#slider li:first');

//########################## Show the first image whit margin of 100%

slider.css('margin-left','-'+25+'%');

/*function moveR(){
    slider.animate({
        marginLeft:"-=50%"}
        , 700 , function(){
        $('#slider li:first').insertAfter('#slider li:last')
    })next.on('click', function (){
    moveR();
})*/


$(document).ready(function(){
    $('#btn-right').click(function(){
        $('#slider').animate({marginLeft: "-=50%"});
    })
});


// Configartions for slider modal

// Declare varaible

let modal1 , modal2 , modal3 , modal4;
    modal1= document.getElementById('slider1');
    modal2= document.getElementById('slider2');
    modal3= document.getElementById('slider3');
    modal4= document.getElementById('slider4');

const xhr = new XMLHttpRequest();

const Request = (method,url) => {
      let promise = new Promise((resolve,reject) => {
        xhr.open(method,url,true);
        xhr.send();
        xhr.onload = () => {
            if(xhr.readyState == 4 && xhr.status == 200){
              resolve(JSON.parse(xhr.responseText));
            }else{
              reject("Error");
            }
        }
    })
    return promise;
}
    
debugger
const Data = (method,url) => {
    Request(method,url)
      .then((res) => {
        if(res){
          view(res)
          
        }
      })
      .catch((error) =>{
        alert("Error al buscar la informacion");
      })
}

Data("GET","data.json");

const view = (modal)=>{
    modal2 = 
}