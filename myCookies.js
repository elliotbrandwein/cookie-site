function cookieTest()
{
	console.log("pressed");
	var name = document.getElementById("name").value;
	if(Cookies.get(name)==undefined && name!="")
	{
		Cookies.set(name,name);
		console.log("cookie made");
		document.getElementById("clickMe").value="click for a cool show";
		document.getElementById("intro").innerHTML = "account made";
	}
	else if(Cookies.get(name))
	{
		var x =("hello "+Cookies.get(name) );
		document.getElementById("intro").innerHTML = x;
		document.getElementById("clickMe").value="enjoy";
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
	return color;
}