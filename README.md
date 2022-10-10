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



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

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

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

