# js-template
 
### Usage

This snippet only needs you to call the `replace` function with the required parameter.


welcomeTemplate.html
```html
<p>Welcome {{username}}</p>
```

index.html
```html
<html>
    <script src="./templater.js" type="module"></script>
    <script type="module">
    import {replace} from './templater.js'

    let welcomeMessage = await replace("welcomeTemplate.html", {username:"Yanis"})
    document.getElementById("dest").innerHTML = welcomeMessage
    </script>
    <div id="dest">

    </div>
</html>
```

### Doc

`replace`
Params | Value | Ex.
------------ | ------------- | -------------
url | The path to the html file | 'component.html'
data | An object used to replace the mustache tag by the value | {name:"MyName", ..}

The tags needs to respect the following syntax such as 
`{{name}}`
