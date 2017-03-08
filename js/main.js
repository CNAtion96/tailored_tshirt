//assigning variables to the buttons
var saveTrees = document.getElementById("shoppingCartSave");

var natureLover = document.getElementById("shoppingCartNature");

var forrestWalk = document.getElementById("shoppingCartForrest");

var subtotalBox = document.getElementById("numSubtotal");

var totalBox = document.getElementById("numTotal")

//subtotal and tax
var subtotal = 0;

var tax = 1.065

//total after tax
function calcTotal(totalSub, taxes) {
	return((totalSub * tax).toFixed(2));
}
var total = 0;

//is in cart variables
var saveIsInCart = false;

var natureIsInCart = false;

var forrestIsInCart = false;

//functions to calculate subtotal/total
saveTrees.addEventListener("click", function(){
	if (saveIsInCart === false) {
		subtotal += 29;
		document.getElementById("numSubtotal").innerHTML = subtotal;
		saveIsInCart = true;
		total = calcTotal(subtotal,tax)
		document.getElementById("numTotal").innerHTML = total;
	}
	else {
		subtotal -= 29;
		document.getElementById("numSubtotal").innerHTML = subtotal;
		saveIsInCart = false;
		total = calcTotal(subtotal,tax)
		document.getElementById("numTotal").innerHTML = total;
	}
})

natureLover.addEventListener("click",function(){
	if (natureIsInCart === false) {
		subtotal += 19;
		document.getElementById("numSubtotal").innerHTML = subtotal;
		natureIsInCart = true;
		total = calcTotal(subtotal,tax)
		document.getElementById("numTotal").innerHTML = total;
	}
	else {
		subtotal -= 19;
		document.getElementById("numSubtotal").innerHTML = subtotal;
		natureIsInCart = false;
		total = calcTotal(subtotal,tax)
		document.getElementById("numTotal").innerHTML = total;
	}
}
)

forrestWalk.addEventListener("click", function(){
	if (forrestIsInCart === false) {
		subtotal += 39;
		document.getElementById("numSubtotal").innerHTML = subtotal;
		forrestIsInCart = true;
		total = calcTotal(subtotal,tax)
		document.getElementById("numTotal").innerHTML = total;
	}
	else {
		subtotal -= 39;
		document.getElementById("numSubtotal").innerHTML = subtotal;
		forrestIsInCart = false;
		total = calcTotal(subtotal,tax)
		document.getElementById("numTotal").innerHTML = total;

	}
}
)