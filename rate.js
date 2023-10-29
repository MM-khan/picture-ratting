const stars = document.querySelectorAll('.star');
const ratting = document.querySelector('.rating');

for(x=0; x<stars.length; x++){
    stars[x].starValue = (x+1);
    // stars[x].addEventListener('click', function(){
    //     console.log('stars clicked');
    // })
    ['click', 'mouseout', 'mouseover'].forEach(function(e ){
        stars[x].addEventListener(e,showRating);
        
    });
}
function showRating(e){
     let type = e.type;
    let starVal = this.starValue

    console.log(starVal);

    stars.forEach(function(elem,index){
        if(type==='click'){
            if(index< starVal){
                elem.classList.add('orange');
            }else{
                elem.classList.remove('orange');
            }
        }
        if(type==='mouseover'){
            if(index< starVal){
                elem.classList.add('yellow');
            }else{
                elem.classList.remove('yellow');
            }
        }
        if(type === 'mouseout'){
            elem.classList.remove('yellow');
        }
        if(type === 'click'){
           if(starVal > 1){
            ratting.innerHTML="You Rated This "+ starVal +' Stars';
           } 
        }
    })
}
function nextImg(){
    window.location.reload();
}