# Tip-calculator-app

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot
![Screenshot 2022-10-10 184024](https://user-images.githubusercontent.com/86495524/194923999-ec59e36d-b0fc-4c9b-91d7-c8a708194826.png)



### Links

- [MY Solution]( https://www.frontendmentor.io/solutions/tip-calculator-app-with-html-css-and-vanilla-javascript-EhRV7asapa)
- [Live Site](https://ovie-best.github.io/Tip-calculator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- Vanill JS

### What I learned

- I learnt how functions work inside other functions.
- I learnt how to use the Javascript replace() method.
- I lerant how to loop throug elements using the Javascript forEach() method.

```js
function handleClick(event) {
    tip_percentage_btns_values.forEach(function (btn) {
        btn.classList.remove('active');
        if (event.target.innerHTML == btn.innerHTML) {
            btn.classList.add('active');
            // covert the NAN value of buttons due to the '%' on it to real number values.
            let tipPercentageRawValue = btn.innerHTML;
            let tipPercentageConvertedValue = tipPercentageRawValue.replace('%', '');
            tipPercentageValue = parseFloat(tipPercentageConvertedValue / 100);
        }
    })
    calculateTip();
}
}
```

## Author

- Website - [Ovie Nathaniel On LinkedIn](https://www.linkedin.com/in/ovie-nathaniel/)
- Frontend Mentor - [@ovie-best](https://www.frontendmentor.io/profile/ovie-best)
- Twitter - [@oviebest_2](https://twitter.com/oviebest_2)

