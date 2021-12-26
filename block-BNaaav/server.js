folder structure
Application

index.html
about.html
...other html templates
assets(directory)
stylesheets(directory)
style.css
...other css files
images(directory)
img1.jpg
...other images
js(directory)
app.js
...other js files
Instructions
create seperate routes for seperate html templates to render for example:-
"/" -> render index.html
"/about" -> render about.html
handle requests for all css files in a single seperate router for example:-
// check for css requests using url
if (req.url.split(".").pop() === "css") {
  // set header for css file
  res.setHeader("Content-Type", "text/css");
  // read css file and send it in response
  fs.readFile("./assets/stylesheets/" + req.url, (err, content) => {
    if (err) return console.log(err);
    res.end(content);
  });
}
handle request for all images in a seperate single router.
follow the steps for handling css
handle request for javascripts(if any) in simialar fashion as above.
