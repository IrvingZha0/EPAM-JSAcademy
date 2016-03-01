
var btn = document.getElementById('next');
var btn2 = document.getElementById('back');
var btn3 = document.getElementById('random')


window.onload=function(){
                var ranNumber = Math.random()*3;
                ranNumber = Math.floor(ranNumber);
                document.querySelectorAll('ul.newList li')[ranNumber].style.display="block";
}


var current=0
var currentImage = document.querySelectorAll('ul.newList li');
function next(){

                var oldImage = currentImage[current];
                oldImage.style.display='none';
                current +=1
                current=current%3
                var newImage = currentImage[current];
                newImage.style.display='block';

}

function back(){

                var oldImage = currentImage[current];
                oldImage.style.display='none';
                current +=2
                current=current%3
                var newImage = currentImage[current];
                newImage.style.display='block';

}

function radomImage(){
                var oldImage = currentImage[current];
                oldImage.style.display='none';
                current=Math.random()*3;
                current=Math.floor(current);
                var oldImage = currentImage[current];
                oldImage.style.display='block';

}
btn3.addEventListener('click',radomImage)
btn2.addEventListener('click',back);
btn.addEventListener('click',next);
