# color-picker-practice
This is a solo project by scrimba, to test my knowledge on sending GET request to an API

[**Deployed Site**](https://colour-mood-picker.netlify.app/)
***

## Objective of the project

The main objective of this project is to make an api call to **thecolorapi.com** to render 5 colors on the main page.

## What I learnt from this project

I learnt about REST api calls; what I mean is, I learnt about **placeholder url** and **query strings** as I used this in my fetch method

```JavaScript
fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${colorMode}&count=5`)
```

> `/scheme` is the placeholder url
> `?hex&mode&count` are the queries on the api

## Code I am proud of

I was proud of using for loops in this project to refactor my codes

```JavaScript
function renderColors(values) {
	for(let i=0; i<colorDivs.length; i++) {
		colorDivs[i].style.backgroundColor = `${values[i]}`
		colorText[i].innerText = `${values[i]}`
	}

}
```

***

I plan to learn more on API and also learn the React framework as well as work on projects, both solo and collaborative.
