var bookStore =[
	{	
		id: 0,
		title : "Fifty Shades of Grey",
		author : "E L James",
		pagecount : "576 pages",
		price : "$39.11",
		img : "C:\\workspace\\image\\1.jpg",
	},
	{	id: 1,
		title : "Secret Sisters",
		author : "Jayne Ann Krentz",
		pagecount : "352 pages",
		price : "$35.25",
		img : "C:\\workspace\\image\\2.jpg",
	},
	{	id: 2,
		title : "Hard Love ",
		author : "Meredith Wild",
		pagecount : "240 pages",
		price : "$34.97",
		img : "C:\\workspace\\image\\3.jpg",
	},
	{	id: 3,
		title : "The Hidden Life of Trees",
		author : "Peter Wohlleben ",
		pagecount : "304 pages",
		price : "$39.11",
		img : "C:\\workspace\\image\\4.jpg",
	},
	{	id: 4,
		title : "Calm the F*ck Down",
		author : "Sasha O'Hara",
		pagecount : "50 pages",
		price : "$19.11",
		img : "C:\\workspace\\image\\6.jpg",
	},
	{	id: 5,
		title : "Always Hungry",
		author : "David Ludwig",
		pagecount : "356 pages",
		price : "$35.49",
		img : "C:\\workspace\\image\\8.jpg",
	}
];
var button = document.getElementById("update-btn");
button.style.display = "none";

function createNewBook(){
	var title = document.getElementById("title").value;
	var author = document.getElementById("author").value;
	var pagecount = document.getElementById("pagecount").value;
	var price = document.getElementById("price").value;
	var img = document.getElementById("img").value;
	var book ={
		id: guid(),
		title : title,
		author : author,
		pagecount : pagecount,
		price : price,
		img : img,
	};
//	console.log(book);
	addBook(book);
}

function showPage(){
//	console.log(bookStore);
	clearpage();
	for (var i = bookStore.length - 1; i >= 0; i--) {
		var id = bookStore[i].id;
		var title = bookStore[i].title;
		var author =bookStore[i].author;
		var pagecount =bookStore[i].pagecount;
		var price =bookStore[i].price;
		var img =bookStore[i].img;
		eachBook(id,title,author,pagecount,price,img);
	}
}

function clearpage(){
	var right = document.getElementById("right-bottom");
	right.innerHTML= null;
}

function addBook(book){
	bookStore.push(book);
	showPage();
	alert("Add new book succeeded!");
}

function guid() {
    function S4() {
       return (((1 + Math.random()) * 0x10000)|0).toString(16).substring(1);
    }
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

function eachBook(id,title,author,pagecount,price,image){
		var div = document.createElement("div");
		div.setAttribute("class", "each");
		div.setAttribute("id", id);
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

		var two = document.createElement("div");
		div.appendChild(two);
		two.setAttribute("class", "two");

		var butt = document.createElement("button");
		butt.setAttribute("class","edit");
		var edit = "edit('" + id + "')";
		butt.setAttribute("onclick", edit);
		butt.innerHTML = "Edit";
		two.appendChild(butt);

		var butt1 = document.createElement("button");
		butt1.setAttribute("class","del");
		var del = "del('" + id + "')";
		butt1.setAttribute("onclick", del);
		butt1.innerHTML = "Delete";
		two.appendChild(butt1);

		document.getElementById("right-bottom").appendChild(div);
		// eachimage.innerHTML = image;
		/*var div2 = document.createElement("div");
		div2.setAttribute("class","each");
		div.appendChild(div2);*/
}

function edit(id){
	//hidden the create  button
	var button = document.getElementById("create-btn");
	button.style.display = "none";
	var button = document.getElementById("update-btn");
	button.style.display = "block";
	for(var i = 0; i < bookStore.length; i++){
		if(id == bookStore[i].id){
			console.log(bookStore[i].title);
			// document.getElementById("title").setAttribute("value", bookStore[i].title);
			document.getElementById("title").value = bookStore[i].title;
			// console.log(document.getElementById("title"));
			document.getElementById("author").value = bookStore[i].author;
			document.getElementById("pagecount").value = bookStore[i].pagecount;
			document.getElementById("price").value = bookStore[i].price;
			document.getElementById("img").value = bookStore[i].img;
			document.getElementById("update-btn").setAttribute("data-key", bookStore[i].id);
		}
	}	
}

function del(id){
	var button = document.getElementById("create-btn");
	button.style.display = "block";
	var button = document.getElementById("update-btn");
	button.style.display = "none";
	for(var i = 0; i < bookStore.length; i++){
		if(id == bookStore[i].id){
			if(confirm("confirm to delete ?")){
				bookStore.splice(i,1,book);
				showPage();
				//cleaer the form
				document.getElementById("title").setAttribute("value", "");
				document.getElementById("author").setAttribute("value", "");
				document.getElementById("pagecount").setAttribute("value", "");
				document.getElementById("price").setAttribute("value", "");
				document.getElementById("img").setAttribute("value", "");
				document.getElementById("update-btn").setAttribute("data-key", "");
			}			
		}
	}
}

function updateBookObj(id,book){
	for(var i = 0; i < bookStore.length; i++){
		if (id == bookStore[i].id) {
			bookStore.splice(i,1,book);
		}
	}
}

function update(){
	// var update = "update('" + id + "')";
	var id = document.getElementById("update-btn").getAttribute("data-key");
	var title = document.getElementById("title").value;
	var author = document.getElementById("author").value;
	var pagecount = document.getElementById("pagecount").value;
	var price = document.getElementById("price").value;
	var img = document.getElementById("img").value;
	var book = {
		id: id,
		title: title,
		author: author,
		pagecount: pagecount,
		price: price,
		img: img
	};
	updateBookObj(id, book);
	showPage();
	var button = document.getElementById("create-btn");
	button.style.display = "block";
	var button = document.getElementById("update-btn");
	button.style.display = "none";	
}

function searchBookObj(target){
	var regex = new RegExp(target,"i");
	var result = {};
	var ids = [];
	var count = 0;
	var flag;
	for (var i = 0; i < bookStore.length; i++) {
		if (!bookStore[i].title.match(regex)&&!bookStore[i].author.match(regex)) {
			ids[count] = bookStore[i].id;
			count++;
		}
	}	
	if (count == bookStore.length) {
		flag=true;
	}else{
		flag=false;
	}
	result.idList = ids;
	result.flag = flag;
	return result;
}

function search(){
	var rightbottom = document.getElementById("right-bottom");
	rightbottom.style.display = "none";

	for (var i = 0; i < bookStore.length; i++) {
		var id = bookStore[i].id;
		var div = document.getElementById(id);
		console.log(id);
		div.style.display = "block";
	}
/*	var target = document.getElementById("search");
	if (target != "") {
		searchtip.display.style = "block";
		var result = searchBookObj(target);
		for (var i = 0; i < result.idList.length; i++) {
			var id = result.idList[i];
			var div = document.getElementById(id);
			div.style.display = "none";
			}
			if (result.flag) {};
	};*/

}