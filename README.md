# React - The Complete Guide (incl Hooks, React Router, Redux)

---

## What is React

* A JavaScript library for building user interfaces - [React Official Website](https://reactjs.org)
* A client-side JavaScript library
* All about building modern, reative user interfaces for the web

## BurgerBuilder-eclipse-VertX

Add instructions for project developers here.

## Order Payload

```json
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
```

## Insert Ingredients

```javascript
db.getCollection("IngredientsCollection").insertOne({
salad: 0,
meat: 0,
bacon: 0,
cheese: 0
})
```
