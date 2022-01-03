// Toggle and Navigation //
  const toggle = document.querySelector('.toggle')

  const navigation = document.querySelector('.navigation')

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
})


//Products//

data = [
	{
		"make": "The MotherBoard",
		"price": "$200.00",
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

var products = "",
	makes = "",
	price = "",
	types = "";

for (var i = 0; i < data.length; i++) {
	var make = data[i].make,
		price = data[i].price,
		type = data[i].type,
		image = data[i].image;
	
	//create product cards
	products += "<div class='col-sm-4 product' data-make='" + make + "' data-price='" + price + "' data-type='" + type + "'><div class='product-inner text-center'><img src='" + image + "'><br /> " + make + "<br />Price: " + price + "<br />Type: " + type + "</div></div>";
	
	//create dropdown of makes
	if (makes.indexOf("<option value='" + make + "'>" + make + "</option>") == -1) {
		makes += "<option value='" + make + "'>" + make + "</option>";
	}
	
	//create dropdown of prices
	if (price.indexOf("<option value='" + price + "'>" + price + "</option>") == -1) {
		price += "<option value='" + price + "'>" + price + "</option>";
	}
	
	//create dropdown of types
	if (types.indexOf("<option value='" + type + "'>" + type + "</option>") == -1) {
		types += "<option value='" + type + "'>" + type + "</option>";
	}
}

$("#products").html(products);
$(".filter-make").append(makes);
$(".filter-price").append(price);
$(".filter-type").append(types);

var filtersObject = {};

//on filter change

$(".filter").on("change",function() {
	var filterName = $(this).data("filter"),
		filterVal = $(this).val();
	
	if (filterVal == "") {
		delete filtersObject[filterName];
	} else {
		filtersObject[filterName] = filterVal;
	}
	
	var filters = "";
	
	for (var key in filtersObject) {
	  	if (filtersObject.hasOwnProperty(key)) {
			filters += "[data-"+key+"='"+filtersObject[key]+"']";
	 	}
	}
	
	if (filters == "") {
		$(".product").show();
	} else {
		$(".product").hide();
		$(".product").hide().filter(filters).show();
	}
});

//on search form submit
$("#search-form").submit(function(e) {
	e.preventDefault();
	var query = $("#search-form input").val().toLowerCase();

	$(".product").hide();
	$(".product").each(function() {
		var make = $(this).data("make").toLowerCase(),
			price = $(this).data("price").toLowerCase(),
			type = $(this).data("type").toLowerCase();

		if (make.indexOf(query) > -1 || price.indexOf(query) > -1 || type.indexOf(query) > -1) {
			$(this).show();
		}
	});
});


