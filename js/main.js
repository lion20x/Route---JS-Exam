let MainContainer = document.getElementById("MainContainer");
let SearchContainer = document.getElementById("SearchContainer");

// Side navbar start
$("#sidebar-icon").on("click", function () {
  $("#sidebar-icon").toggleClass(".fas fa-times");
  $("#sidebar-menu").toggleClass("open");
  $(".navdropdown").toggleClass("slidenavdown");
});

function closenav() {
  $("#sidebar-icon").toggleClass(".fas fa-times");
  $("#sidebar-menu").toggleClass("open");
  $(".navdropdown").toggleClass("slidenavdown");
}

$(document).ready(function () {
  $(".loadingscreen").fadeOut(500, function () {});
});
// Side navbar end
//

/////////////////////////////////////////
// Landing Page (Main Meals)
/////////////////////////////////////////
// Landing Page (Main Meals)
async function mainMeals() {
  let mainMeals = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  );
  let data = await mainMeals.json();
  allmeals = data.meals;
  console.log(allmeals);
  DisplayData();
}

//  Display Main Meals
function DisplayData() {
  let displaymainMeals = ``;
  for (let i = 0; i < allmeals.length; i++) {
    displaymainMeals += `
                  <div class="item col-12 col-md-3">
                <div class="bg-main rounded-4 layer-container">
                  <div id="meal-name" onclick="mealsDetails('${allmeals[i].idMeal}')" class="layer">${allmeals[i].strMeal}</div>
                  <img class="w-100" src="${allmeals[i].strMealThumb}" alt="" />
                </div>
              </div>`;
  }
  MainContainer.innerHTML = displaymainMeals;
}
// mainMeals();

/////////////////////////////////////////
// Categories
/////////////////////////////////////////
// Categories Page
async function categoriesSection() {
  let mainMeals = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  let data = await mainMeals.json();
  categories = data.categories;
  console.log(categories);
  DisplayCategories();
}

// Display Categories
function DisplayCategories() {
  let displayCategoryMeals = ``;
  for (let i = 0; i < categories.length; i++) {
    displayCategoryMeals += `
                  <div class="item col-12 col-md-3">
                <div class="bg-main rounded-4 layer-container2">
                  <div id="meal-name" onclick="filterCategoryMeals('${categories[i].strCategory}')" class="layer2 text-center pt-3">${categories[i].strCategory}</br><div class="categoryDesc text-center">${categories[i].strCategoryDescription}</div> </div>
                  <img class="w-100 h-100" src="${categories[i].strCategoryThumb}" alt="" />
                </div>
              </div>`;
  }
  MainContainer.innerHTML = displayCategoryMeals;
}

// Get Category
async function filterCategoryMeals(catname) {
  let filtercat = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${catname}`
  );
  let data = await filtercat.json();
  filteredCategory = data.meals;
  console.log(filteredCategory);
  DisplayFliteredCategories();
}

// Display Filtered Categories
function DisplayFliteredCategories() {
  let displayFilteredCat = ``;
  for (let i = 0; i < filteredCategory.length; i++) {
    displayFilteredCat += `
                  <div class="item col-12 col-md-3">
                <div class="bg-main rounded-4 layer-container">
                  <div id="meal-name" onclick="mealsDetails('${filteredCategory[i].idMeal}')" class="layer">${filteredCategory[i].strMeal}</div>
                  <img class="w-100" src="${filteredCategory[i].strMealThumb}" alt="" />
                </div>
              </div>`;
  }
  MainContainer.innerHTML = displayFilteredCat;
}

/////////////////////////////////////////
// Ingredients
/////////////////////////////////////////
// Ingredients Page
async function ingredientsSection() {
  let ingredientss = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
  );
  let data = await ingredientss.json();
  ingredients = data.meals.slice(0, 20);

  DisplayIngredients();
}

// Display Ingredients
function DisplayIngredients() {
  let displayIngredientss = ``;
  for (let i = 0; i < ingredients.length; i++) {
    displayIngredientss += `
                <div class="item col-12 col-md-3">
                <div class="pointer" onclick="filterIngredientMeals('${ingredients[i].strIngredient}')">
                  <div><i class="fa-solid fa-drumstick-bite fa-4x text-white pb-3"></i></div>
                  <div class="text-center text-white fs-4">${ingredients[i].strIngredient}</div>
                  <div class="ingredientdesc mb-5 mt-2 text-center text-white">${ingredients[i].strDescription}</div>
                </div>
              </div>`;
  }
  MainContainer.innerHTML = displayIngredientss;
  SearchContainer.innerHTML = ``;
}

// Get Filtered Ingredient
async function filterIngredientMeals(ingname) {
  let filtercat = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingname}`
  );
  let data = await filtercat.json();
  filteringIng = data.meals;
  console.log(filteringIng);
  DisplayFilteredIngredients();
}

// Display Filtered Ingredients
function DisplayFilteredIngredients() {
  let displayFilteredIng = ``;
  for (let i = 0; i < filteringIng.length; i++) {
    displayFilteredIng += `
                  <div class="item col-12 col-md-3">
                <div class="bg-main rounded-4 layer-container">
                  <div id="meal-name" onclick="mealsDetails('${filteringIng[i].idMeal}')" class="layer">${filteringIng[i].strMeal}</div>
                  <img class="w-100" src="${filteringIng[i].strMealThumb}" alt="" />
                </div>
              </div>`;
  }
  MainContainer.innerHTML = displayFilteredIng;
}

/////////////////////////////////////////
// Area
/////////////////////////////////////////
async function areaSection() {
  let areaapi = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  );
  let data = await areaapi.json();
  areares = data.meals;

  DisplayAreaSection();
  console.log(areares);
}

// Display Ingredients
function DisplayAreaSection() {
  let displayAPI = ``;
  for (let i = 0; i < areares.length; i++) {
    displayAPI += `
                <div class="item col-12 col-md-3">
                <div class="pointer" onclick="filterArea('${areares[i].strArea}')">
                  <div><i class="fa-solid fa-house-laptop fa-4x text-white pb-3"></i></div>
                  <div class="text-center text-white fs-4">${areares[i].strArea}</div>
                </div>
              </div>`;
  }
  MainContainer.innerHTML = displayAPI;
  SearchContainer.innerHTML = ``;
}

async function filterArea(areaid) {
  let filterAreares = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaid}`
  );
  let data = await filterAreares.json();
  filteredAreas = data.meals;
  console.log(filteredAreas);
  DisplayFilteredAreaRES();
}

// Display Filtered Areas
function DisplayFilteredAreaRES() {
  let displayFilteredArea = ``;
  for (let i = 0; i < filteredAreas.length; i++) {
    displayFilteredArea += `
                  <div class="item col-12 col-md-3">
                <div class="bg-main rounded-4 layer-container">
                  <div id="meal-name" onclick="mealsDetails('${filteredAreas[i].idMeal}')" class="layer">${filteredAreas[i].strMeal}</div>
                  <img class="w-100" src="${filteredAreas[i].strMealThumb}" alt="" />
                </div>
              </div>`;
  }
  MainContainer.innerHTML = displayFilteredArea;
}
mainMeals();

/////////////////////////////////////////
// Search Page
/////////////////////////////////////////

function displaysearchresult() {
  let displaysearch1result = ``;
  for (let i = 0; i < searchmealsRES.length; i++) {
    displaysearch1result += `
                  <div class="item col-12 col-md-3">
                <div class="bg-main rounded-4 mb-4 layer-container">
                  <div id="meal-name" onclick="mealsDetails('${searchmealsRES[i].idMeal}')" class="layer">${searchmealsRES[i].strMeal}</div>
                  <img class="w-100" src="${searchmealsRES[i].strMealThumb}" alt="" />
                </div>
              </div>`;
  }
  SearchContainer.innerHTML = displaysearch1result;
}

// SEARCH BY FULL NAME
async function searchMealsbyname(searchname) {
  let searchmeals = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchname}`
  );
  let data = await searchmeals.json();
  searchmealsRES = data.meals;
  if (searchmealsRES == null) {
    SearchContainer.innerHTML = `<div class="fs-6 text-center text-danger">Nothing found &#128543;</div>`;
  } else {
    displaysearchresult();
  }
}

function inputvalue() {
  let input = document.getElementById("searchbyname");
  let result = input.value;

  if (result.length < 1) {
    SearchContainer.innerHTML = ``;
  } else {
    searchMealsbyname(result);
  }
}

// SEARCH BY FIRST LETTER

function displaysearchresult2() {
  let fldisplay = ``;
  for (let i = 0; i < searchmealsbyflRES.length; i++) {
    fldisplay += `
                  <div class="item col-12 col-md-3">
                <div class="bg-main rounded-4 mb-4 layer-container">
                  <div id="meal-name" onclick="mealsDetails('${searchmealsbyflRES[i].idMeal}'); empty();" class="layer">${searchmealsbyflRES[i].strMeal}</div>
                  <img class="w-100" src="${searchmealsbyflRES[i].strMealThumb}" alt="" />
                </div>
              </div>`;
  }
  SearchContainer.innerHTML = fldisplay;
}

async function searchMealsbyFL(firstl) {
  let searchfl = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstl}`
  );
  let data = await searchfl.json();
  searchmealsbyflRES = data.meals;
  console.log(searchmealsbyflRES);
  if (searchmealsbyflRES == null) {
    SearchContainer.innerHTML = `<div class="fs-6 text-center text-danger">Nothing found &#128543;</div>`;
  } else {
    displaysearchresult2();
  }
}

function empty() {
  SearchContainer.innerHTML = ``;
}

function inputvalue2() {
  let input2 = document.getElementById("searchbyname2");
  let result2 = input2.value;

  if (result2.length <= 0) {
    SearchContainer.innerHTML = ``;
  } else {
    searchMealsbyFL(result2);
  }
}

function searchPage() {
  let displaySearchPage = ``;
  displaySearchPage = `
                <div class="col-12">
                  <div class="row g-4">
                    <div class="col-6">
                      <input
                        id="searchbyname"
                        onkeyup="inputvalue()"
                        maxlength="50"
                        placeholder="Search by name"
                        class="inputclass col-12"
                        type="text"
                      />
                    </div>
                    <div class="col-6">
                      <input
                        id="searchbyname2"
                        onkeyup="inputvalue2()"
                        maxlength="1"
                        placeholder="Search by first letter"
                        class="inputclass col-12"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                `;
  MainContainer.innerHTML = displaySearchPage;
}

/////////////////////////////////////////
// Meals Details
/////////////////////////////////////////
async function mealsDetails(mealID) {
  let getMealsDetails = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
  );
  let ResMealsDetails = await getMealsDetails.json();
  chosenMeal = ResMealsDetails.meals;
  // RECIPES + INGREDIENTS LOOP
  let mealrecipe = "";
  for (let i = 0; i < 20; i++) {
    if (chosenMeal[0][`strIngredient${i}`]) {
      mealrecipe += `<li class="alert alert-warning m-2 p-1 d-inline-block">${
        chosenMeal[0][`strMeasure${i}`]
      } ${chosenMeal[0][`strIngredient${i}`]}</li>`;
    }
  }

  // TAGS LOOP
  let tags = chosenMeal[0].strTags?.split(",") ?? [];
  let mealTag = "";

  for (let i = 0; i < tags.length; i++) {
    mealTag += `
    <li class="alert alert-danger m-2 p-1 col-2">${tags[i]}</li>`;
  }

  console.log(chosenMeal);
  MainContainer.innerHTML = `<div class="mealdetails d-flex">
            <div class="row">
                <div class="d-lg-flex">
                <div class="">
                  <img
                    class="w-img"
                    src="${chosenMeal[0].strMealThumb}"
                    alt=""
                  />
                  <h2 class="text-white pt-4">${chosenMeal[0].strMeal}</h2>
                </div>
                <div class="text-start text-white ms-5 ">
                  <h2>Instructions</h2>
                  <p>
                    ${chosenMeal[0].strInstructions}
                  </p>
                  <h2>Area : <span class="fw-light">${chosenMeal[0].strArea}</span></h2>
                  <h2>Category : <span class="fw-light">${chosenMeal[0].strCategory}</span></h2>
                  <h2>Recipes:</h2>
                  <ul
                    class="text-decoration-none list-unstyled col-12 text-center mt-3"
                  >
                    <div id="RecipeAndMeasures" class="">
                        ${mealrecipe}
                    </div>
                  </ul>
                  <h2>Tags:</h2>
                  <ul
                    class="text-decoration-none list-unstyled col-12 text-center mt-3"
                  >
                    <div class="row">
                      ${mealTag}
                    </div>
                  </ul>
                  <a target="_blank" href="${chosenMeal[0].strSource}" class="btn btn-success me-3"
                    >Source</a
                  >
                  <a target="_blank" href="${chosenMeal[0].strYoutube}" class="btn btn-danger"
                    >Youtube</a
                  >
                </div>
                </div>
              </div>
            </div>`;
  SearchContainer.innerHTML = ``;
}

// Contact US Section
function contactus() {
  let displaycontactform = ``;
  displaycontactform = `
<form class="" action="">
                <div class="col-12">
                  <div class="row g-4">
                    <div class="col-12 col-md-6">
                      <input
                        id="f-name"
                        onkeyup="validateName(),  validateALL()"
                        class="col-12 inputclass"
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        maxlength="20"
                      />
                      <div id="errorname" class="d-none text-start text-danger pt-2 fw-light">Special characters and numbers not allowed *</div>
                    </div>
                    <div class="col-12 col-md-6">
                      <input
                        id="f-email"
                        onkeyup="validateEmail(),  validateALL()"
                        class="col-12 inputclass"
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        maxlength="50"
                      />
                      <div id="erroremail" class="d-none text-start text-danger pt-2 fw-light">Email not valid *exemple@yyy.zzz</div>
                    </div>
                    <div class="col-12 col-md-6">
                      <input
                        id="f-tel"
                        onkeyup="validateTel(),  validateALL()"
                        class="col-12 inputclass"
                        type="tel"
                        placeholder="Enter your phone"
                        name="phone"
                        maxlength="20"
                      />
                      <div id="errorphone" class="d-none text-start text-danger pt-2 fw-light">Enter valid Phone Number *</div>
                    </div>
                    <div class="col-12 col-md-6">
                      <input
                        id="f-age"
                        onkeyup="validateAge(),  validateALL()"
                        class="col-12 inputclass"
                        type="text"
                        placeholder="Enter your age"
                        name="age"
                        maxlength="3"
                      />
                       <div id="errorage" class="d-none text-start text-danger pt-2 fw-light">Enter valid age *</div>
                    </div>
                    <div class="col-12 col-md-6">
                      <input
                        id="f-pass"
                        onkeyup="validatePass(),  validateALL()"
                        class="col-12 inputclass"
                        type="password"
                        placeholder="Enter your password"
                        name="pass"
                        maxlength="30"
                      />
                      <div id="errorpass" class="d-none text-start text-danger pt-2 fw-light">Enter valid password *Minimum eight characters, at least one letter and one number:*</div>
                    </div>
                    <div class="col-12 col-md-6">
                      <input
                        id="f-cpass"
                        onkeyup="validateCPass(),  validateALL()"
                        class="col-12 inputclass"
                        type="password"
                        placeholder="Confirm your password"
                        name="Cpass"
                        maxlength="30"
                      />
                      <div id="errorcpass" class="d-none text-start text-danger pt-2 fw-light">Password is not matching!</div>
                    </div>
                  </div>
                  <button id="fbutton" class="btn px-5 py-2 mt-5" >
                    Submit
                  </button>
                </div>
              </form>
                `;
  MainContainer.innerHTML = displaycontactform;
  SearchContainer.innerHTML = ``;
  DisableButton();
}

function DisableButton() {
  let button = document.getElementById("fbutton");
  $(button).attr("disabled", true);
}

function validateALL() {
  let button = document.getElementById("fbutton");
  let fname = document.getElementById("f-name");
  let femail = document.getElementById("f-email");
  let ftel = document.getElementById("f-tel");
  let fage = document.getElementById("f-age");
  let fpass = document.getElementById("f-pass");
  let fcpass = document.getElementById("f-cpass");
  if (
    $(fname).hasClass("yes") &&
    $(femail).hasClass("yes") &&
    $(ftel).hasClass("yes") &&
    $(fage).hasClass("yes") &&
    $(fpass).hasClass("yes") &&
    $(fcpass).hasClass("yes")
  ) {
    $(button).attr("disabled", false);
    console.log("all goooooooooood!");
  } else {
    $(button).attr("disabled", true);
  }
}

// function validateALL() {
//   let button = document.getElementById("fbutton");
//   if (
//     validateName() &&
//     validateEmail() &&
//     validateTel() &&
//     validatePass() &&
//     validateAge() &&
//     validateCPass()
//   ) {
//     $(button).attr("disabled", false);
//     console.log("all goooooooooood!");
//   } else {
//     $(button).attr("disabled", true);
//   }
// }

function validateName() {
  let fname = document.getElementById("f-name");
  let nameRegex = /^[a-zA-Z ]+$/;
  if (nameRegex.test(fname.value) == true) {
    $(errorname).addClass("d-none");
    $(fname).removeClass("no").addClass("yes");

    return true;
  } else {
    $(errorname).removeClass("d-none");
    $(fname).removeClass("yes").addClass("no");
    return false;
  }
}

function validateEmail() {
  let femail = document.getElementById("f-email");
  let emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRegex.test(femail.value) == true) {
    $(erroremail).addClass("d-none");
    $(femail).removeClass("no").addClass("yes");
    return true;
  } else {
    $(erroremail).removeClass("d-none");
    $(femail).removeClass("yes").addClass("no");
    return false;
  }
}

function validateTel() {
  let ftel = document.getElementById("f-tel");
  let telRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  if (telRegex.test(ftel.value) == true) {
    $(errorphone).addClass("d-none");
    $(ftel).removeClass("no").addClass("yes");
    return true;
  } else {
    $(errorphone).removeClass("d-none");
    $(ftel).removeClass("yes").addClass("no");
    return false;
  }
}

function validateAge() {
  let fage = document.getElementById("f-age");
  let ageRegex = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;
  if (ageRegex.test(fage.value) == true) {
    $(errorage).addClass("d-none");
    $(fage).removeClass("no").addClass("yes");
    return true;
  } else {
    $(errorage).removeClass("d-none");
    $(fage).removeClass("yes").addClass("no");
    return false;
  }
}

function validatePass() {
  let fpass = document.getElementById("f-pass");
  let errorpass = document.getElementById("errorpass");
  let passRegex = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/;
  if (passRegex.test(fpass.value) == true) {
    $(errorpass).addClass("d-none");
    $(fpass).removeClass("no").addClass("yes");
    return true;
  } else {
    $(errorpass).removeClass("d-none");
    $(fpass).removeClass("yes").addClass("no");
    return false;
  }
}

function validateCPass() {
  let fpass = document.getElementById("f-pass").value;
  let fcpass = document.getElementById("f-cpass");
  if (validatePass() == true && fpass == fcpass.value) {
    console.log("heyadsfgladfadfa");
    $(errorcpass).addClass("d-none");
    $(fcpass).removeClass("no").addClass("yes");
    return true;
  } else {
    $(errorcpass).removeClass("d-none");
    $(fcpass).removeClass("yes").addClass("no");
    return false;
  }
}
