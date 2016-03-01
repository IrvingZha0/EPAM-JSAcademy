var button = document.getElementById('next');
//ar button2 = document.getElementById('random');
var button3 = document.getElementById('back')

/*window.onload=function(){
                var randomNumber = Math.random()*3;
                randomNumber = Math.floor(randomNumber);
                document.querySelectorAll('ul.newList li')[randomNumber].style.display="block";
}
*/
var current = 0;
var currentImage = document.querySelectorAll('ul.newList li');
function next(){
                var oldImage = currentImage[current];
                oldImage.style.display='none';
                current +=1
                current=current%3
                var newImage = currentImage[current];
                newImage.style.display='block';
}
//Back
function back(){
                var oldImage = currentImage[current];
                oldImage.style.display='none';
                current +=2
                current=current%3
                var newImage = currentImage[current];
                newImage.style.display='block';
}
// Random
/*function radomImage(){
                var oldImage = currentImage[current];
                oldImage.style.display='none';
                current=Math.random()*3;
                current=Math.floor(current);
                var oldImage = currentImage[current];
                oldImage.style.display='block';
}
*/
button.addEventListener('click',next);
//button2.addEventListener('click',radomImage)
button3.addEventListener('click',back);