

// const logo_btn = document.querySelector(".logo");
// const main_nav = document.querySelector(".main-nav");
// logo_btn.addEventListener('click',function(){
//     main_nav;
//     console.log(main_nav.getElementsByTagName("UL"));
// });


//*************TYPEING EFFECTS************ */
//CUSTOM TYPING
// const arr = [' ','K','A','R','I','M','U','L'];
// var count = 0;
// let clear;
// clear = setInterval(func,500);
// function func(){
//     if(count>arr.length-1)
//     {
//         count = 0;
//         document.querySelector(".dynamic_text").textContent = '';
//     }
// document.querySelector(".dynamic_text").textContent += arr[count]; 
// count++;
// }
var typed = new Typed('.dynamic_text',{
    strings:[' Full Stack Developer',' Software Engineer',' Problem solver'],
    typeSpeed:100,
    backSpeed:25,
    loop:true
})






