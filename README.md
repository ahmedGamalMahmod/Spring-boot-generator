Creating your own spring boot generator using yeoman

•	getting set up
first of all you need to install node.js and Git .we will need to have yeoman and bower installed as well as the generator ( yo ) for creating generators

1-	npm install -g bower 
![image](https://user-images.githubusercontent.com/89645923/197395366-b597f650-33cc-4ea8-9004-c79ec3613e00.png)

2-	npm install -g yo

 

![image](https://user-images.githubusercontent.com/89645923/197395378-29bd514f-83a8-47d4-b1af-cde771c7649d.png)




3-	npm install -g generator-generator
 ![image](https://user-images.githubusercontent.com/89645923/197395388-cdf26c98-443a-4c2b-aa4c-9d31ef2970dd.png)


4-	npm install -g yeoman/generator-mocha
 ![image](https://user-images.githubusercontent.com/89645923/197395393-54e2bcce-5c28-4654-b15c-55318e3f22a8.png)

5-	mkdir generator-myapp & cd generator-myapp (create a folder within which you'll write your generator this folder must be named generator-name)
 
![image](https://user-images.githubusercontent.com/89645923/197395406-3ff80e25-8eb1-4f08-825e-665519379105.png)



6-	yo generator (this will create the basic generator)
 ![image](https://user-images.githubusercontent.com/89645923/197395415-88b2091e-a6b6-4d0f-8848-a3ad619616e3.png)


7-	npm link (I got error here because I should run this command in your generators root directory) (after this step our generator will be created )
 
	![image](https://user-images.githubusercontent.com/89645923/197395434-042b04c1-c2cf-4bfa-9e25-639c5ad2d594.png)

8-	mkdir testmyapp, cd testmyapp & yo myapp. (test our generator)

 ![image](https://user-images.githubusercontent.com/89645923/197395445-2c646a92-08f4-4b43-9782-52593fbd387e.png)


Generator run successfully and after  that we tried to customize this basic generator by adding templet for pom file and src folder which contains Application.java file.
So, we have to update index.js file for each change in the index.js file…..

9-	Finally my generator works successfully .
 
![image](https://user-images.githubusercontent.com/89645923/197395477-f265ad2a-b224-4435-87f3-5860836ae5e1.png)

10- Using STS to run the generated project

 ![image](https://user-images.githubusercontent.com/89645923/197395523-df122f49-2031-4ece-9c44-0dc76b0205b4.png)

 

refrences
https://dzone.com/articles/create-your-own-yeoman
