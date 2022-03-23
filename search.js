// Toggle and Navigation //
  const toggle = document.querySelector('.toggle')

  const navigation = document.querySelector('.navigation')

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
})

//
//fetch('http://localhost:8000/products')//
   //   .then(resp => resp.json())//
     //  .then(data => showProducts(data));//


window.onLoad = showProducts(data);


data = [
	{
		"make": "The MotherBoard",
		"price": "skhdfbkds",
		"type": "Digital",
		"image": "https://assets.codepen.io/7067207/IMG-4486.jpg"
	},
	{
		"make": "Gibson",
		"price": "$300.00",
		"type": "Digital",
		"image": "https://assets.codepen.io/7067207/IMG-4486.jpg"
	},
	{
		"make": "Fender",
		"price": "$200.00",
		"type": "Photograph",
		"image": "https://assets.codepen.io/7067207/IMG-4486.jpg"
	},
	{
		"make": "Fender",
		"price":"$300.00",
		"type": "Photograph",
		"image": "https://assets.codepen.io/7067207/IMG-4486.jpg"
	},
	{
		"make": "Gretsch",
		"price": "$300.00",
		"type": "Canvas",
		"image": "https://assets.codepen.io/7067207/IMG-4486.jpg"
	},
	{
		"make": "Paul Reed Smith",
		"price": "$400.00",
		"type": "Canvas",
		"image": "https://assets.codepen.io/7067207/IMG-4486.jpg"
	},
	{
		"make": "Gibson",
		"price": "$700.00",
		"type": "Poster",
		"image": "https://assets.codepen.io/7067207/IMG-4486.jpg"
	}
];






//Products//

function showProducts(data) {

var products = "",
    makes = "",
	types = "";

  for (var i = 0; i < data.length; i++) {
        console.log(data[i].make);

	var make = data[i].name,
		price = data[i].price,
		type = data[i].type,
		image = data[i].image;
	
	//create product cards
	products += "<div class='col-sm-4 product' data-make='" + make + "' data-price='" + price + "' data-type='" + type + "'><div class='product-inner text-center'><img src='" + image + "'><br /> " + make + "<br />Price: " + price + "<br />Type: " + type + "</div></div>";
	
  }

  $("#products").html(products);
}

// we're going to use this for price sorting
function compareFn(a,b) {
    return a.data('price') - b.data('price')
}

// on filter change
$(".filter").on("change",function() {
	var filterName = $(this).data("filter"),
    	     filterVal = $(this).val();
	
        console.log(filterName);
        console.log(filterVal);
        // this will actually be used for sorting not filtering
        if (filterName = "sortPrice") {
                var productElems = [];
                $(".product").each(function() {
                        productElems.push($(this))
                });
                
                switch (filterVal) {
                        case 'asc':
                                $("#products").html(productElems.sort(compareFn));
                                break;
                        case 'desc':
                                $("#products").html(productElems.sort(compareFn).reverse());
                                break;
                }
        } else {
                $("#products").html(productElems);
        }
});

//on search form submit
$("#search-form").submit(function(e) {
	e.preventDefault();
	var query = $("#search-form input").val().toLowerCase();

	$(".product").hide();
	$(".product").each(function() {
		var make = $(this).data("make").toLowerCase(),
    		   price = parseFloat($(this).data('price').substring(1)),
		    type = $(this).data("type").toLowerCase();

		if (make.indexOf(query) > -1 || type.indexOf(query) > -1) {
			$(this).show();
		}
	});
});

