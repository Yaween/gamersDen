function validateForm() {
    var radios = document.getElementsByName("Rating");
    var formvalid = false;

    var i = 0;
    while (!formvalid && i < radios.length){
        if(radios[i].checked) formvalid = true;
        i++;
    }

    if(!formvalid) alert("Please select a rating");
    return formvalid;
}

const form = document.getElementById('myform');

form.addEventListener('submit', function(event){
    
    alert("Thank You for giving us your feedback!")

});


const menuBtn = document.querySelector('.menu-button')
const navlinks = document.querySelector('.navlinks')

menuBtn.addEventListener('click', ()=>{
	navlinks.classList.toggle('mobile-menu')
})
