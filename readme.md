# angularES6seed
 An angularJS 1.5.x ES6 seed

******

This is a little bit more complex seed than an started pack one but I
will try my best to make the most detailed ```readme.md``` I ever done.

First things first. This seed is a grown up version based on all my own
experience using angularJS in different projects and companies. 
The base seed was: [angularjs-webpack-starter](https://github.com/dsebastien/angularjs-webpack-starter) by [@dsebastien](https://github.com/dsebastien)

## Angular modules used in the seed:
- Ui router
- ngStorage
- lodash

## Boot the project
```
npm install
npm start
```
Once the project is finished (or maybe you want to make a deploy) use the following command:
```
npm run build
```

## Things keep in mind
Because the main idea for this seed is a web application, there're some things to keep in mind.
### You need to enable mod rewrite
If you are using Apache
```
RewriteEngine On  
  # If an existing asset or directory is requested go to it as it is
  RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
  RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d
  RewriteRule ^ - [L]

  # If the requested resource doesn't exist, use index.html
  RewriteRule ^ /index.html
```
Or nginx
```
server {
    server_name yoursite.com;
    root /usr/share/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```
If your idea is use this seed to make an app with Cordova/Phonegap/Ionic
File: ```/src/app/app.config.js```
```
$urlRouterProvider.otherwise(() => {
    window.location.href = window.location.origin + window.location.pathname + '#/__YOUR_DEFAULT_STATE__';
});
// and remove the .html5mode 
$locationProvider.html5Mode({
    enabled: true, // or enabled: false
    requireBase: false
});
```

# Some Angular witchcraft inside the project
## Using .component in state declaration
In this seed, .component can be used as a template in an ui-router state. 
```
.state('app.home', {
    url: '/',
    component: 'homeComponent'
```
By using the component as a tempalte for an state, a template will be added using the name of the component. ```homeComponent``` will be converted to ```<home-component></home-component>```
If the state also has resolve dependencies, a controller will be created and all the content resolved will be available in the controller/view using: ```this.resolveName``` or ```{{vm.resolveName}}```

Because we are using components, we need to predeclare the resolves as bindings in the component declaration:
```
const homeComponent = {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {
        resolveExample: '<' // You can also use '=' but because is the response from a resolve it won't need double binding
    }
};
```

Once we have all the bindings ready, we can use the resolves
```
.state('app.home', {
    url: '/',
    component: 'homeComponent',
    resolve: {
        resolveExample: ()=> {
            return 'resolveExampleContent';
        }
    }
});
``` 

## Role based states
By default all states are accessible to all users. However, you can deny the access to certain states based on two simple rules.
### Allow
If inside the state object you declare ```allow: ['role1', 'role2']```. If the user has one of the roles defined in the array, he will be able to access to the state.
### Exclude
Same idea as ```allow``` but obviously the reverse. ```exclude: ['role3']```. In this case, the state is accessible to anyone **but** the roles inside the array.
### RedirectTo
In the case where the user cannot access to an state, by default it will be redireted to 'app.home'. (see /src/app/app.controller.js).
This behaviour can be overwrite by adding ```redirectTo: 'stateName'``` in the state declaration.
### Combinations with an example
```
.state('app.userProfile', {
    url: '/',
    component: 'userProfile',
    allow: ['user', 'moderator'],
    exclude: ['anon'],
    redirectTo: 'app.login'
});
``` 

## Encapsulating views inside a layout
As you can see in this example, when defining an state, I can also declare a layout. This means that the whole view will be inside a template. This is useful when you have components as widgets in the view like a menu.
```
.state('app.home', {
    url: '/',
    layout: 'mainMenu',
    component: 'homeComponent'
}
```
All the layouts are inside the folder ```/src/app/layouts```. Inside the ```index.js``` are declared all the current layouts and inside ```/src/app/app.html``` are all the html-components with an ng-switch in order to select which one to use.

## Using SASS
In order to emulate Shadow DOM, all modules and views must have an unique attribute. Because ```id``` was created to be unique, I like to use it. But you can also use the element like ```home-component{...} ```.

In some cases you will need to modify some css beheavour but just in one state. 
Example: Depending on the state, the main menu (which is inside a layout), you need to change the element color. Wichcraft to the rescue! Once the ```$stateChangeSuccess``` is triggered, an id is attached to the ```<body>``` using the state name by replacing the dots with dash.
Example:
```
.state('app.home', {
```
Will be converted into 
```
<body id="app-home">
```

This means that in any .scss you can use:
```
#home{
    .some-fancy-styles {
        ...
    }
}
#app-home {
    .main-menu { 
        background: blue;
    }
}
```

# Still in WIP

