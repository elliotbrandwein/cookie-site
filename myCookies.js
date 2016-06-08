function cookieTest()
{
	console.log("pressed");
	var name = document.getElementById("name").value;
	if(Cookies.get(name)==undefined)
	{
		Cookies.set(name,name);
		console.log("cookie made");
	}
	else
	{
		var x =("hello "+Cookies.get(name) );
		document.getElementById("intro").innerHTML = x;
		document.getElementById("clickMe").innerHTML="click for something fun";
		setInterval(function()
		{ 
			$('body').css ("background-color",getRandomColor());
		}, 100);
		document.getElementById("clickMe").disabled=true;
	}

}
 function getRandomColor()
 {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++ )
	{
		color += letters[Math.floor(Math.random() * 16)];
	}
	x=false;
	Cookies.set("hit",1);
	return color;
}