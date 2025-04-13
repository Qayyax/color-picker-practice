const form = document.querySelector("form");
const colorSchemeInput = document.getElementById("color");
const colorSchemeMode = document.getElementById("color-mode");
const colorDivs = document.querySelectorAll("#container > div");
const colorText = document.querySelectorAll("#hex-container > p");

// When you submit the form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let color = colorSchemeInput.value.slice(1);
  let colorMode = colorSchemeMode.value;

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${color}&mode=${colorMode}&count=5`,
  )
    .then((res) => res.json())
    .then((data) => {
      let hexValues = data.colors.map((hex) => {
        return hex.hex.value;
      });
      renderColors(hexValues);
    });
});

// Function to render the colors on the page
function renderColors(values) {
  for (let i = 0; i < colorDivs.length; i++) {
    colorDivs[i].style.backgroundColor = `${values[i]}`;
    colorText[i].innerText = `${values[i]}`;
    colorDivs[i].addEventListener("click", () => clickToCopy(values[i]));
    colorText[i].addEventListener("click", () => clickToCopy(values[i]));
    // Maybe I should make a UI that says copied
  }
}

function clickToCopy(colorValue) {
  const storage = document.createElement("textarea");
  storage.value = colorValue;
  storage.select();
  storage.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(storage.value);
  alert("copied to clipboard");
}

// My goal for this old project is to add these features
// - Tapping the color to copy the color to clipboard
// - Option to have other color picker modes (RGB, Hex)
//
// So I have color divs, that just set the bg color
// and I have colorText divs that just has the hex values
// on each of the div, I want the onclick function for them
