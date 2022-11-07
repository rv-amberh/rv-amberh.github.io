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




data = [
  {
    image: "https://assets.codepen.io/7067207/The+Motherboard.JPG",
    title: "The Motherboard",
    description:
      "Digital Art",
    price: "300"
  },
  {
    image: "https://assets.codepen.io/7067207/Relative+Conscious.JPG",
    title: "Relative Conscious",
    description:
      "Digital Art",
    price: "200"
  },
  {
    image: "https://assets.codepen.io/7067207/Revolution+in+Motion..JPG",
    title: "Revolution in Motion",
    description:
      "Photography",
    price: "200"
  },
  {
    image: "https://assets.codepen.io/7067207/Juneteenth.JPG",
    title: "Juneteenth",
    description:
      "Digital Art",
    price: "500"
  },
  {
    image: "https://assets.codepen.io/7067207/Circa+2020..jpg",
    title: "Circa 2020",
    description:
      "Photography",
    price: "600"
  },
  {
    image: "https://assets.codepen.io/7067207/SunFlower.JPG",
    title: "SunFlower",
    description:
      "Digital Art",
    price: "200"
  },
  {
    image: "https://assets.codepen.io/7067207/Summer+of+Soul.jpg",
    title: "Summer of Soul",
    description:
      "Photography",
    price: "300"
  },
  {
    image: "https://assets.codepen.io/7067207/Summer+of+2020.JPG",
    title: "Summer of 2020",
    description:
      "Photography",
    price: "300"
  },
  {
    image: "https://assets.codepen.io/7067207/Healed+and+Home.JPG",
    title: "Healed and Home",
    description:
      "Digital Art",
    price: "100"
  }
];


//Products//

function showProducts(products) {

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



window.onLoad = showProducts(data);




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
		var make = $(this).data("make").toLowerCase()
		    type = $(this).data("type").toLowerCase();

		if (make.indexOf(query) > -1 || type.indexOf(query) > -1) {
			$(this).show();
		}
	});
});

