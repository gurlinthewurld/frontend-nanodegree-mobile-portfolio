## Website Performance Optimization

The purpose of this repository is to exemplify how to take a developer's code on this sample portfolio project (provided here), and optimize the code for production. Optimizing one's project code is essential to a good user experience and web site performance. Performance and experience are measured by the user's ability to access the information on the site quickly and on multiple devices.

### What you need to get started
* You can fork or clone this repository to begin, or you can use your own project and code that needs optimizing for final production and hosting, and just follow the instructions below.
* Once you have all your code files which may include: HTML, CSS, JavaScript, image files, and other files, you can host your files on [Github Pages](https://pages.github.com) to get a URL for viewing remotely.

### Tools and Instructions
* [Google Developer's PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) provides your site's speed and suggestions. You are directed to further resources to improve your site's speed and performance.
* [Grunt](http://gruntjs.com)'s web site will show you how to install and operate the gruntjs plugins for automatically optimizing your code for production.
* Each time you optimize the code and / or images, you will update your repository and your gh-pages, so that you can get the most current score in PageSpeed Insights.
* You will need a .gitignore file, and you will need to include _node_modules_ in that.
#### Optimize Frames per Second

In the example portfolio in this project, we optimize PageSpeed Insights score for index.html. To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js.

### Optimizing main.js

* line 467 - Uncommented line as the next line is accessing the first entry of the list timeToResize which is formed by the elements of name measure_pizza_resize
* line 509 - Caching document.body.scrollTop in a variable outside of the loop: each time you scroll, updatePositions() function is called and this loop is run. Each item in this loop is querying the DOM - at a particular instant of scroll document.body.scrollTop has same value for all the items. You can verify it by console.log(document.body.scrollTop)
* line 456 - Calculate the amount by which one pizza changes its size and applying the same effect to all the pizzas instead of calculating for each pizza and then apply on each.Also, there are certain instances of repetitive code like document.getElementsByClassName("randomPizzaContainer").You have already stored it in a variable so it is better to use that variable rather than querying the DOM again and again to fetch the randomPizzaContainer nodes.

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Further Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api").
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
