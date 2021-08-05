# jquery-template
 
### Usage

This snippet only needs you to call the `replace` function with the required parameter.


components.html
```html
<p>Welcome {{username}}</p>
```

index.html
```html
<html>
    <script src="./templater.js" type="module"></script>
    <script type="module">
    import {replace} from './templater.js'

    let welcomeMessage = await replace("example.html", {username:"Yanis"})
    document.getElementById("dest").innerHTML = welcomeMessage
    </script>
    <div id="dest">

    </div>
</html>
```
