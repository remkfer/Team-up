function SearchTag(tag,cont,contid){
	// 搜尋選單顯示
	var searchItem = document.getElementById(tag).getElementsByTagName('li');
	for (var i = 0; i<searchItem.length; i++){
		searchItem[i].className='';
	}
	searchItem[contid].className='onSearch';


	//搜尋內容顯示
	var cont = document.getElementById(cont).getElementsByTagName('li');
	for (var i = 0; i < cont.length; i++){
		cont[i].style.display = "none";		
	}
	cont[contid].style.display = "block";	
}