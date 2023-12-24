# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./Screenshot%202023-12-23%20at%2011.11.08%20PM.png)
![](./Screenshot%202023-12-23%20at%2011.12.01%20PM.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/vickieken/Quote-generator.git)
- Live Site URL: [Add live site URL here](https://vickieken.github.io/Quote-generator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- javsScript

### What I learned

While working on this project I learnt a bit more on how to make my site much more responsive and beautiful and I also learnt how to use an API to add voice over to app...

Below is a code snippet for that:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
@media (max-width: 600px) {
  body: papayawhip;
}
```
```js
playBtn.addEventListener("click", ()=> {
    let utterance = new SpeechSynthesisUtterance(`${contentEl.innerHTML}`)
    speechSynthesis.speak(utterance)
})
```

### Continued development

In my future projects I'd love to work more on using API on my project...

## Author

- Frontend Mentor - [@kenvickie](https://www.frontendmentor.io/profile/kenvickie)
