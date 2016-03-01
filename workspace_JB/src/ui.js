function eachBook(id,title,author,pagecount,price,image){

		var div = document.createElement("div");
		div.setAttribute("class", "each");
		div.style.display="inline-block";

		var eachimage = document.createElement("img");
		eachimage.setAttribute("src", image);
		eachimage.setAttribute("class", "image");
		div.appendChild(eachimage);

		var eachtitle = document.createElement("div");
		eachtitle.innerHTML= title;
		div.appendChild(eachtitle);
		eachtitle.setAttribute("class", "title");

		var eachauthor = document.createElement("div");
		eachauthor.innerHTML=author;
		div.appendChild(eachauthor);
		eachauthor.setAttribute("class", "author");

		var eachpagecount = document.createElement("div");
		eachpagecount.innerHTML= pagecount;
		div.appendChild(eachpagecount);
		eachpagecount.setAttribute("class", "pagecount");

		var eachprice = document.createElement("div");
		eachprice.innerHTML= price;
		div.appendChild(eachprice);
		eachprice.setAttribute("class", "price");

		/*var edit = document.getElementById("edit").value;
		var del = document.getElementById("del").value;*/
		var two = document.createElement("div");
		// two.innerHTML= two;
		div.appendChild(two);
		two.setAttribute("class", "two");
		two.setAttribute("data-key", id);
		var butt = document.createElement("button");
		butt.setAttribute("class","edit");
		butt.setAttribute("id","edit");
		butt.setAttribute("onclick", "edit()");
		butt.innerHTML = "Edit";
		two.appendChild(butt);
		var butt1 = document.createElement("button");

		butt1.setAttribute("class","del");
		butt1.setAttribute("onclick","delete()");
		butt1.innerHTML = "Delete";
		two.appendChild(butt1);




		document.getElementById("right-bottom").appendChild(div);
		// eachimage.innerHTML = image;
		/*var div2 = document.createElement("div");
		div2.setAttribute("class","each");
		div.appendChild(div2);*/
}

function edit(){
	var button = document.getElementById("edit");
	console.log("button " + button);
	var id = button.parentNode.getAttribute("data-key");
	console.log("id " + id);
	for(var i = 0; i < bookStore.length; i++){
		if(id == bookStore[i].id){
			console.log(bookStore[i].id);
			document.getElementById("title").innerHTML = bookStore[i].title;
		}
	}
};
