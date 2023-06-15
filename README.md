# Learn Machine Learning with me.

```
I'm also a beginner so, If you want to join me on this journey tag along. I'll document what I do and learn and you can use it as a resource.
```
## Starting off with a course.

> For the start I'm gonna follow a JS machine learning course from [freecodecamp.org](https://www.youtube.com/watch?v=vDDjtwQDw2k&t=1955s) on youtube.


### Course Description
```
We will build a web app. In which you can draw anything and the app will try to identify which object did you draw using machine learning.
```

### Why did I choose this course?
- Because it's beginner friendly
- It's in javascript ( a language I'm familiar with)
- It isn't a black box course, where you just use bunch of different libraries and make the app but don't know what's really going on.

### Things we'll do in the course
> Phase 1:
- [ ] Building a web app
- [ ] Data Collection
- [ ] Data Manipulation
- [ ] Feature Extraction
- [ ] Data processing and visualization
- [ ] Nearest neighbour method
- [ ] Data Scaling
- [ ] K-Nearest neighbour method
- [ ] How to calculate decision boundaries

> Phase 2:

- [ ] Higher dimension
- [ ] Neural Networks
- [ ] Data cleaning
- [ ] Clustering
- [ ] Graphs

> Extras:
- [ ] Can say it's a good introduction to OOP if you haven't used it before.
- [ ] Intro to DOM manipulation

### DAY 1

- [ ] Html file, with div with id content
- [ ] add stylesheet and script
- [ ] create a class and constructor for SketchPad
- [ ] Use script to spawn Sketchpad on the htmlpage

- [ ] Add context and addeventlisteners method to the class of the sketchpad.
> '# represents that addeventlisteners is a private method
- [ ] Define addeventlisteners, use on mousedown event 
> Use getBoundingClientRect, clientX, clientY attributes to get mouse cordinates
- [ ] Add attributes path and isDrawing to class Sketchpad
```
path is an array which will store value for each pixel we need to connect to create a stroke
isDrawing is a boolean, which will work like a flag to decide whether we're in drawing mode or not.
```
- [ ] Add on mousemove event
- [ ] Add on mouseup event

- [ ] Create and use a new private method called get mouse to simply get mouse cordinates easily, so we don't need to define the same functionality again and again.
- [ ] Create a new private method redraw which will clear the canvas and draw the path.
- [ ] Create a new utility called draw.js in Web/js folder, attach the script in HTML, do read the comment there.

> [Learn more about Spread Operator](https://medium.com/coding-at-dawn/how-to-use-the-spread-operator-in-javascript-b9e4a8b06fab)

- [ ] create a new public method called 'path' in draw utility to create path using stroke, you might run into few errors so don't give up easily

> I guess this much is more than enough for the day 1. Sayonara, do come back tomorrow. Also do checkout my social media profiles to connect with me. 

### DAY 2

- [ ] Create a new public method called 'paths' in draw utility
> For it to work, you need to change path array to array of arrays paths in sketchPad class.
- [ ] Modify the code related to path accordingly, and use the new method paths instead of path from draw.
- [ ] Use meta tag to adjust the viewport
- [ ] Add touch events for mobile compatibility, use touches[0] to make sure you record only first touch
- [ ] Add overscroll to styles to control scroll behaviour

- [ ] Add an undo button to the canvas
- [ ] Add a onclick event listener to the button, define the undo functionality
- [ ] Undo button shouldn't work after earasing the last stroke.
- [ ] Undo button shouldn't work when canvas is blank in start as well
- [ ] Using normal event listeners will throw warning to you, so switch them with passive listeners

- [ ] Create user onboarding, make sketchpad hidden for that time
- [ ] Now let's store the data for each user, it's done in '<script>'
- [ ] Create an array to store labels of drawings
- [ ] Iterate through the array to tell the user what they need to draw
- [ ] Store their drawing
- [ ] Reset canvas when user go to next drawing, keep the method public as we're calling it outside the class

### DAY 3

```
Thia part is called data collecting.
```
- [ ] Functionality to be able to download your drawing in a json format.
> Now either create your own raw data by making people draw these objects and creating individual json file for each user or be lazy like me and download raw data from [here](https://github.com/gniziemazity/drawing-data)

- [ ] Now create a folder called data, create two folders inside it called raw and dataset
- [ ] Copy all the raw data you downloaded or created in data/raw folder
- [ ] Create two folders inside dataset called img and json
- [ ] Now create another folder called common (will be used to put shared filed amongst backend and frontend)
- [ ] Now move draw.js to this common folder. (why you may ask. You'll realise soon)
> Make necessary changes to be able to use that file in sketchpad.js

- [ ] Create a folder called node(backend stuff will be here)
- [ ] Create 'dataset_generator.js' in node
- [ ] now follow these steps

```
1. Read the raw directory
2. Read each file of this directory and create a json file for each label(basically each drawing), 
also create an image file for each label.


In this part right here we're creating SAMPLES.

```
- [ ] Create cool loading animation for our dataset generator 
> Okay let's wrap the day 3 here.