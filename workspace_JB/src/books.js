<body>
<div align="center">
 <h1>显示所有的用户界面</h1>
 <div style="border: 1px red solid; margin-bottom: 100px; padding: 10px 10%;">
 <table border="1px" cellpadding="0" cellspacing="0" id="tusers">
 <thead>
 <tr><th><input type="checkbox" name="chbk" id="chbk1" onclick="selectAll()"/></th>
 <th>名称</th>
  <th>性别</th>
  <th>邮箱</th>
   <th>出生日期</th>
   <th>操作</th>
 </tr>
 </thead>
 <tbody id="users">
 </tbody>
 </table>
 <div id="pages"></div> 
 </div> 
 <div style="border: 1px blue solid;">
  <form action="">
  <table id="divs">
  <tbody id="addUsers">
  <tr>
  <td>用户名:</td>
  <td><input type="text" name="name" id="name"/></td>
  </tr>
  <tr>
  <td>性别:</td>
  <td><select id="sex">
  <option value="男">男</option>
  <option value="女">女</option>
  </select>
  </td>
  </tr>
  <tr>
  <td>邮箱</td>
  <td><input type="text" name="email" id="email"/></td>
  </tr>
  <tr>
  <td>出生日期:</td>
  <td>
  <input type="text" id="bir" name="bir"/>
  <input type=button value="添加日期" onclick="showCalender(this,document.all.bir)"/>
  </td>
  </tr>
  <tr id="addu">
  <td colspan="2"><input type="button" value="添加" onclick="addUser()" id="add"/></td>
  </tr>
  <tr id="addu1">
  <td colspan="2"><input type="button" value="修改" id="upduser" /></td>
  </tr>
  </tbody>
  </table>
  </form> 
 </div>
</div>
</body>
<script>
window.onload = function(){
alert("onload");
document.getElementById("addu1").style.display = "none";
}
function selectAll(){
var users = document.getElementById("users");
var ips = users.getElementsByTagName("input");
var chbk = document.getElementById("chbk1");
for(var i=0;i<ips.length;i++){
ips[i].setAttribute("checked",chbk.getAttribute("checked"));
}
}
function addUser(){
alert("add");
var name = document.getElementById("name").Value;
var sex = document.getElementById("sex").Value;
var email = document.getElementById("email").Value;
var bir = document.getElementById("bir").Value;
var tusers = document.getElementById("tusers").Value;
var tr1 = document.createElement("tr");
var cbk = document.createElement("td");
var tname = document.createElement("td");
var tsex = document.createElement("td");
var temail = document.createElement("td");
var tbir = document.createElement("td");
var toper = document.createElement("td");
var cbk1 = document.createElement("input");
cbk1.setAttribute("type","checkbox");
cbk1.setAttribute("name","chbk");
cbk.appendChild(cbk1);
tname.appendChild(document.createTextNode(name));
tsex.appendChild(document.createTextNode(sex));
temail.appendChild(document.createTextNode(email));
tbir.appendChild(document.createTextNode(bir));
var adelete = document.createElement("a");
var aupdate = document.createElement("a");
adelete.setAttribute("href","#");
aupdate.setAttribute("href","#");
adelete.appendChild(document.createTextNode("删除|"));
aupdate.appendChild(document.createTextNode("修改"));
toper.appendChild(adelete);
toper.appendChild(aupdate);
tr1.appendChild(cbk);
tr1.appendChild(tname);
tr1.appendChild(tsex);
tr1.appendChild(temail);
tr1.appendChild(tbir);
tr1.appendChild(toper);
var users = document.getElementById("users");
users.appendChild(tr1);
tusers.appendChild(users);
adelete.onclick = function(){
users.removeChild(adelete.parentNode.parentNode);
}
aupdate.onclick function(){
document.getElementById(addu).style.display = "none";
document.getElementById(addu1).style.display = "block";
var utr = aupdate.parentNode.parentNode;
var utrs = utr.childNodes;
document.getElementById("name").value = utrs[1].innerHTML;
document.getElementById("sex").value = utrs[2].innerHTML;
document.getElementById("email").value = utrs[3].innerHTML;
document.getElementById("bir").value = utrs[4].innerHTML;
var upUser = document.getElementById("upduser");
upUser.onclick = function(){
utr.childNodes[1].innerHTML = document.getElementById("name").value;
utr.childNodes[2].innerHTML = document.getElementById("sex").value;
utr.childNodes[3].innerHTML = document.getElementById("email").value;
utr.childNodes[4].innerHTML = document.getElementById("bir").value;
document.getElementById("addu1").style.display = "none";
document.getElementById("addu").style.display = "block";
}
}
testPage()
}
var indexPage = document.createElement("a");
var upPage = document.createElement("a");
var downPage = document.createElement("a");
var endPage = document.createElement("a");
var nowpage = 1;
function testPage(){
var tbodyUsers = document.getElementById("users");
var trUsers = document.getElementById("tr");
var countRecord = trUsers.length;
var PAGESIZE = 2;
var countPage = (countRecord%PAGESIZE ==0?countRecord/PAGESIZE:Math.ceil(countRecord/PAGESIZE));
var pages=document.getElementById("pages");
if(!pages.hasChildNodes()){
getPages(nowpage);
}
index.onclik=function(){
noepage=1;
indexPageInfo(countRecord,trUsers);
}
upPage.onclick=function(){
if(nowpage-1>1){
nowpage-=1;
}else{
nowpage=1;
indexPageInfo(countRecord,trUsers);
}
var startindex =(nowpage-1)*PAGESIZE;
var endindex=startindex+PAGESIZE;
PageInfo(startindex,endindex,countRecord,trUsers);
}
downPage.onclick=function(){
if(nowpage+1>=countPage){
nowpage=countPage;
}else{
nowpage=+1;
}
var startindex =(nowpage-1)*PAGESIZE;
var endindex=startindex+PAGESIZE;
PageInfo(startindex,endindex,countRecord,trUsers);
}
endPage.onclick=function(){
if(nowpage>1){
var startindex =(nowpage-1)*PAGESIZE;
for(var i=0;i<countRecord;i++){
if(i<startindex){
trUsers[i].style.display="none";
}else{
trUsers[i].style.display="block";
}
}
}else{
indexPageInfo(countRecord,trUsers);
}
}
}
function indexPageInfo(countRecord, trUsers) {
if (countRecord <= 2) {
for ( var i = 0; i < PAGESIZE; i++) {
trUsers[i].style.display = "block";
}
} else {
for ( var i = 2; i < countRecord; i++) {
trUsers[i].style.display = "none";
}
}
}
function PageInfo(startindex, endindex, countRecord, trUsers) {
for ( var i = 0; i < countRecord; i++) {
if (i >= startindex && i < endindex) {
trUsers[i].style.display = "block";
} else {
trUsers[i].style.display = "none";
}
}
}
function getPages(numpage) {
indexPage.appendChild(document.createTextNode("首页"));
indexPage.setAttribute("href", "#");
upPage.appendChild(document.createTextNode("上一页"));
upPage.setAttribute("href", "#");
downPage.appendChild(document.createTextNode("下一页"));
downPage.setAttribute("href", "#");
endPage.appendChild(document.createTextNode("末页"));
endPage.setAttribute("href", "#");
var pages = document.getElementById("pages");
pages.appendChild(indexPage);
pages.appendChild(upPage);
pages.appendChild(downPage);
pages.appendChild(endPage);
}
</script>