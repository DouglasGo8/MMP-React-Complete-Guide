# BurgerBuilder-eclipse-VertX

Add instructions for project developers here.

will use npm i --save axios
will use Eclipse VertX with MongoDB in Docker



<https://www.freecodecamp.org/news/how-to-use-reactjs-with-webpack-4-babel-7-and-material-design-ff754586f618/ >


<https://jsonplaceholder.typicode.com/posts />


## Order Payload
{
    "orderId": "123",
    "orderDate": "2019-08-06T16:22:33",
    "price": 10.2,
    "customer": {
        "name": "Douglas",
        "email": "dbatista@mail.com",
        "deliveryMethod": "fastest",
        "street": "street no name",
        "zipcode": "22312"
    },
    "ingredient": {
        "salad": 1,
        "bacon": 1,
        "cheese": 0,
        "meat": 1
    }
}


## Insert Ingredients

```html
db.getCollection("IngredientsCollection").insertOne({
salad: 0,
meat: 0,
bacon: 0,
cheese: 0
})
```