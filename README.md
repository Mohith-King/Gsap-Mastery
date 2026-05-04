So I have just started the gsap to learn animation , everyday i want to contribute something regrading the gsap and understand the how actually animations works , 

//05-05 
Today i have learned my first animation with new property named as onComplete() , i didn't know that i can use function also , i have to explore things


# GSAP Day 1 - First Animation

This project is the start of my GSAP learning series.

I began with a very simple idea: make one box appear on the screen with animation.  
After that, I added a second animation using `onComplete()`, so the next effect starts only after the first one finishes.

## What I Learned Today

- GSAP can animate HTML elements in a clean and easy way.
- `gsap.to()` is used to change an element from its current state to a new animated state.
- `opacity` can be used to make an element fade in.
- `scale` can be used to make an element grow or shrink.
- `onComplete()` is a callback function.
- A callback function runs after an animation ends.
- `y`, `repeat`, and `yoyo` can be used to create a looping movement effect.

## How This Project Works

### 1. `index.html`

- Loads the GSAP library from CDN.
- Adds a heading.
- Creates one box inside the page.

### 2. `style.css`

- Centers the content on the screen.
- Gives the page a dark blue background.
- Makes the box start small and invisible.

### 3. `script.js`

The animation works in two steps:

#### First Animation

- The box becomes visible.
- The box scales up a little.

#### Second Animation

- When the first animation finishes, `onComplete()` runs.
- A new animation starts on the same box.
- The box moves up and down.
- The box changes its background color to red.
- `repeat: -1` makes it run forever.
- `yoyo: true` makes it move back and forth.

## Simple Flow For A Fresher

1. The box starts hidden and small.
2. GSAP makes the box appear smoothly.
3. After that, another animation begins automatically.
4. The box keeps bouncing up and down.
5. The box changes color while moving.

## GSAP Concepts Used

- `gsap.to()`
- `duration`
- `scale`
- `opacity`
- `onComplete()`
- `y`
- `repeat`
- `yoyo`
- `backgroundColor`

## My Learning Note

Today I understood that animations can be connected one after another.

At first, I only knew how to animate a box. Then I learned that I can use a function inside GSAP, and that function can start a second animation after the first one is completed.

This helped me understand that GSAP is not only about moving elements, but also about controlling the timing and flow of animations.

## Run The Project

Open `index.html` in the browser.
