# Hospital queue system

run npm install in project root directory then run again inside "/client-app" directory

### I use official mongodb docker container in my development
### I use "visitorqueue" As the container name, change the name inside server.js if you use other name

### Application Menu
![queue_menu](https://user-images.githubusercontent.com/58936291/143239471-30aca9e9-a493-4c4f-b8f6-28be57a762d4.png)

### 1. Print or request  number
Visitor pick a category of their visit, the system check for the next number available for that category, write it to database and print it out. 
![print_menu](https://user-images.githubusercontent.com/58936291/143239944-489a991b-692f-41de-83d9-3d2c6c7d81d0.png)
![print_menu_select](https://user-images.githubusercontent.com/58936291/143239963-fe6abde4-18cf-4cb7-b209-104a76a97db5.png)
### 2. Input new visitor
User enter visitor data into a form and save it to database
![input_visitor](https://user-images.githubusercontent.com/58936291/143241781-6f6cf303-d230-4b64-a404-3eb890f01f8b.png)


### 3. Show registered visitor list, with a search-by-name feature
![visitor_list](https://user-images.githubusercontent.com/58936291/143240544-3a7a408b-b15e-40ee-bcb2-d18769b1f2b5.png)
