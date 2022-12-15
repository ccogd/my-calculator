# my-calculator
This app is set up to test using a callable library module hosted in a GitHub repo.  
https://github.com/cunningc/my-calculator.git  
- There are currently 4 releases in the repo to test the ability to update an app like this one to be updated to use new releases when they are published.
- Note that the repo is a private repo under cunningc and may not work without authentication

For inclusion in an app it should be defined in the consuming app as a dependency in *package.json* and *package-lock.json*
- add "my-calculator": "git://github.com/cunningc/my-calculator.git#v1.3.0" under dependencies  
  
  When you define dependencies in the app, you should run *npm install* (CLI command in the app directory)
  - note that when an update occurs in the source repo such as a release updated, etc. you will have to update the dependency in the package files and then run *npm update* to update the library in the package  

Once the dependencies are set up, you can import the library in your app using the standard import mechanism:
- *import { add, subtract, multiply, divide, relTag } from "my-calculator";*  

and use the imported functions in your code.