# The Odin Project - Memory card solution

This is a solution to the [Memory card solution](https://www.theodinproject.com/lessons/node-path-javascript-memory-card). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- Hooks with React
- Lifecycle methods

### Screenshot

![](./screenshots/desktop.jpg)
![](./screenshots/desktop2.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library


### What I learned

I learned how to use React hooks with useState method and lifecycle methods. I was first intimidated on how objects and arrays when it came down to using useState. I was so used to mutating the array itself, but you can not do that with react. I gained a little bit of more confidence on using prevState and I feel like it is more safer than just changing the current state. After watching and following on how to useEffect on factory functions on react, I was lost on recreating that inside my code. I had to rewatch the videos again, but being persistant and wanting to get it useEffect down. I was able to figure it out below is the code that allowed me to shuffle the cards when points was changed. I also had to change the highestScore during the render to match currentScore.




```js
  // Updates on component did render and when current score is changed to shuffle
  useEffect(() => {
    shuffle()
    // If currenScore is higher than highestScore set highestScore equal to currentScore
    if(currentScore > highestScore) {
      setHighestScore(prevState => prevState = currentScore)
    }

    // If current score is 10 reset current score
    if(currentScore === 10) {
      resetCurrentScore();
    }
  }, [currentScore])
```



### Continued development

I wanted to continue my develppment on getting used to more with react hooks specially being able to change arrays and objects with useState. I also want to get more comfortable on using useEffect. I do get the concept, but being able to prioritize useEffect to call functions is an amazing idea and is something that a developer like me can make use of it to make my code run faster and more efficient. 


### Useful resources

- [Stackoverflow](https://www.stackoverflow.com) - This helped me find out how I can change objects in array with the map function
- [CodeEvolution - Youtube](https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3) - Under the React Hooks Series it allowed me to understand how hooks and useEffect worked either in class or functional components



## Author

- Email - [kevin760g@gmail.com]
- Twitter - [@coderkevo](https://www.twitter.com/coderkevo)


