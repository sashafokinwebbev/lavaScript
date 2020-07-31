const button = document.querySelector('.btn')
button.addEventListener('click', handler)
function handler(){
	str = document.forms["forma"].elements["text"].value
	l = str.length
	t = 0
	while (t != l ){
	t++
	b = str.split('',t) 
	c = b.join()
	console.log(c)
	}

	


}