const toggleSwitch = document.getElementById("toggleSwitch");
const toggleCheckbox = document.getElementById("checkbox");
const monthlys = document.getElementsByClassName("monthly");
const annuals = document.getElementsByClassName("annually");

const KEY_SPACEBAR = 32;
const KEY_ENTER = 13;


/*******************************
 * FUNCTIONS
 * ******************************/

// Switch from Annual and Monthly prices
function changePricing(isToggleChecked) {
    if (isToggleChecked) {
        // Hide annual prices
        for (i=0; i < annuals.length; i++) {
            annuals[i].style.display = "none";
        }

        // Display monthly prices
        for (i=0; i < monthlys.length; i++) {
            monthlys[i].style.display = "block";
        }

    } else {
        // Hide monthly prices
        for (i=0; i < monthlys.length; i++) {
            monthlys[i].style.display = "none";
        }

        // Display annual prices
        for (i=0; i < annuals.length; i++) {
            annuals[i].style.display = "block";
        }
    }
}

/*******************************
 * EVENT LISTENERS
 * ******************************/

// Click event on actual checkbox to change pricing
toggleCheckbox.addEventListener("click", function(e) {
    changePricing(this.checked);
});


/* Apparently .keyCode is deprecated:
    Check for new way .key and fallback to old ways
    https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
*/
// Toggle pricing on toggle switch container when ENTER or SPACEBAR are pressed
toggleSwitch.addEventListener("keyup", function(event) {
    if (event.keyCode == KEY_SPACEBAR || event.keyCode == KEY_ENTER) {
        toggleCheckbox.checked = !toggleCheckbox.checked;
        changePricing(toggleCheckbox.checked);
    }
});