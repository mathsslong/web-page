const mobile = document.querySelector('input.mobile-input');
const error = document.querySelector('.error');

mobile.addEventListener('input',function(){
	if(mobile.value.length!==11){
		error.innerText = "手机号码格式不正确";
	}
	else{
		error.innerText = "";
	}
	
});

// mobile.addEventListener('input',function(){
// 	console.log(mobile.value.length);
// });



// error.innerText = 'haha';
// console.log(error.innerText);