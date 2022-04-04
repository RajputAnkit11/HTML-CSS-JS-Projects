const panals = document.querySelectorAll('.panal');

// console.log(panals);

// console.log(panals[0]);

panals.forEach((element) => {
   // console.log(element);
   element.addEventListener('click',() =>{

      removeActiveClasses();

      element.classList.add('active');
   });
});



function removeActiveClasses(){
   panals.forEach((element) =>{
      element.classList.remove('active');
   });
};