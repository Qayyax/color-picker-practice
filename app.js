const form = document.querySelector('form')
const colorSchemeInput = document.getElementById('color')
const colorSchemeMode = document.getElementById('color-mode')
const colorDivs = document.querySelectorAll('#container > div')
const colorText = document.querySelectorAll('#hex-container > p')

// When you submit the form
form.addEventListener('submit', (e) => {
	e.preventDefault()
	let color = colorSchemeInput.value.slice(1)
	let colorMode = colorSchemeMode.value

	fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${colorMode}&count=5`)
		.then(res => res.json())
		.then(data => {
			let hexValues = data.colors.map((hex) => {
				return hex.hex.value
			})
			renderColors(hexValues)
		})
})

// Function to render the colors on the page
function renderColors(values) {
	for (let i = 0; i < colorDivs.length; i++) {
		colorDivs[i].style.backgroundColor = `${values[i]}`
		colorText[i].innerText = `${values[i]}`
	}

}



