
// Toggle and Navigation //

const toggle = document.querySelector(".toggle");

const navigation = document.querySelector(".navigation");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
});

//Hardcoded products since we are not running this with my local db. 


products = [
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
window.onLoad = showProducts(products);

function showProducts(products) {
  let output = "";

  // now i have to loop trough the products, and in every iteration
  // i add an html template to the output variable.
  for (let item of products) {
    output += `
	<div class="product">
          <img src="${item.image}" alt="${item.image}">
          <p class="title">${item.title}</p>
	  <p class="description">${item.description}</p>
	  <p class="price">${item.price}</p>
	</div>
    `;
  }
  /* and last i target the products container and add the data that the
		output variable holds. */
  document.querySelector("#products").innerHTML = output;
}



// Filter - Amazon Style //

// Grabbiing the boxes + the products //

const checkboxes = document.querySelectorAll("input[type='checkbox']");
const cardContainer = document.querySelectorAll("products");

// create an array that will hold the values of the currently checked check-boxes //

var checkboxValues = [];

// Add an change event to each check-box //

checkboxes.forEach((box) => {
  box.checked = false;
  box.addEventListener("change", () => filterProducts());
});

// Our next function will loop throught all of the check-boxes and return an array that contains its values //

function grabCheckboxValues() {
  var checkboxValues = [];
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) checkboxValues.push(checkbox.value);
  });
  return checkboxValues;
}

// Filter through products //

var filtersObject = {};

function filterProducts() {
  checkboxValues = grabCheckboxValues();
  if (checkboxValues.length == 0) {
    $(".product").show();
  } else {
    $(".product").hide();
    $(".product").each(function() {
      var description = $(this).find('.description').prop('innerHTML').toLowerCase();
      checkboxValues.forEach((query) => {
        if (description.indexOf(query) > -1) {
          $(this).show();
        }
      });
    });
  }
}
