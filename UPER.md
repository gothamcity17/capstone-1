<h1>The Problem Solving Framework : 'UPER'</h1>

* U = "Understand"
* P = "Plan"
* E = "Execute"
* R = "Reflect" / "Refactor"

<h2> 1. Understanding the Problem </h2>


Need to create an E-Commerce site.

Need to create an inventory, with at least 10 items.

Need to create a products page to display the 10 or so items.

Need to create a cart page to display the items added from the product page.

Need a search function by product name.


<h2> 2. Planning the Solution </h2>


Create the two pages needed: products page and cart page.

Link the products page and cart page, somehow.

Create an inventory for the 10 items.

Find a way to display the 10 items from the inventory to the products page, somehow.

Find a way to search for individual items on the products page, somehow.

Be able to add individual items from the products page to the cart page.

Find a way to display the added individual items.

Add some shopping cart functionality, maybe subtotal, total, and proceed to checkout?


<h2> 3. Executing the Plan </h2>

Created a Home.jsx, a Products.jsx, and a Cart.jsx.

Attempted reacte-router to link the components to the App.js file.

*Watched the video Amir demonstrated in, which helped out a lot.

Returned the routes for the home page, products page, and cart page. Linked the routes for the other pages. 

Created an inventory.json file. Create items with: name, serial, number, price, manufacturer, category, and quantity.

Then imported data from inventory.json into App.js file.

Stored the imported data into an Array [items].

On the products page, used the map() method on the calling array [searchProducts], to create a new array which then populated the items from inventory file.

On the method, set the parameter to (inventory), and used the key to target the id, and then displayed the image, manufacturer, name, price, serial, catergory, and quanitity onto the products page.

Then created an onClick function on the button "Add to cart". 

When the button is clicked, and if the inventory value of the desired id is greater than 0, then the set function named setAddtocart() will implement the concat() method which will add the item from the desired id into a new array called [addtocart].

On the cart page, used the map() method to create another array called [addtocart], which is populated with the items from inventory file, when the button "Add to cart" is clicked.

Basic setup is now done.


Next, started on the search box.

First created a SearchBox.js file, with input type 'search' where the object placeholder passed to {placeholder} and the event onChange passed to {handleChange}.

Then SearchBox was linked only on the products page through react-router.

On the SearchBox link, the object handleChange is passed, where the function (e) returns the function Test(), where the event returns after trigged by the target event.

The function Test() is defined in the App.js file, which states that the set function setSearchBoolean would be 'true' if the parameter 'searching' equals a string. And would be 'false' as is.

Next the variable called InventoryArray stored the data from the inventory. The set function setSearchProducts set the paramater to 'InventoryArray'. The set function setInput set the paramater to 'searching'. 

The variable InputToLowerCase stored the method Input.toLowerCase(), which returns converts the calling string into lowercase.

On the method data.forEach, a function executes for a given array element. In this situation, name and manufacturer are converted into a lower case format while serial and price are converted into a string format as long as the value does not equal zero.

**Basically if true, the searchBoolean array will display the items from the searchProducts array, where the items originally are shown in bulk. This event is due to the function Test() which is true if a string is the input. However, the input should not be case sensitive, which is solved in the function data.forEach, which converts the name and manufacturer to lowercase, and converts the serial and price to strings.**


Now onto the stock functionality. 

When the onClick button is clicked, it passes on the function only if the inventory is greater than 0, then the ReduceInventory function can be passed.

The variable Product returns the function ReduceInventory(id), with id as the parameter. The function ReduceInventory() passes on that the inventory number will decrease by one, contingent on the onClick button being pressed. Essentially the function inventory.inventory reduce one of itself.


Next, I implemented some more functionality the Cart page. First, I passed the button onClick to {clearAll}. Then the variable clearAll was defined as a function that sets anything retrieved from the set function setAddtocart to an empty array.

Then, another onClick button was passed to a function for deleteItem. On the file App.js the variable deleteItem was defined as a function with a parameter of index. 

This function (index) returns the variable filtered which is yet again defined as the function addtocart.filter().

This function addtocart.filter() targets the array addtocart and only targets the paramater, i. The function i does not equivalate to the index, the parameter from the original function.

With that occuring, the function setAddtocart essentially updates the current array, affter targetting the specific i in the original array. The setAddcart displays the variable filtered, which displays the array after removing the i, or item.

<h2> 4. Reflection / Refactor </h2>

Refactored for the SearchBox (explained above).
Refactored for the reduce the stock number when add button is clicked (explained above).
Refactored for the delete item button (explained above).

By far the biggest blocker I had was the SearchBox, which took almost forever to finally get it to work.
