
  var app = new Vue({
    el: '#app',
    data: {
      items: [{ itemId: 1, title: 'Create a new item'}],
      newItemTitle: '',
      latestItemId: 1,  // Used to keep track of IDs
    },
    methods: {
      addItem: function () {
        this.items.push({
          itemId: this.latestItemId += 1,
          title: this.newItemTitle
        })  // Adds the new item to the items array.
        this.lastestItemId += 1  // Increment our ID counter since we used it in line 90.
        this.newItemTitle = ""  // Clears the input field.
      },
      removeItem: function (itemId) {
        this.items = this.items.filter((item) => { return item.itemId !== itemId })
        /*
          This is using some (ES6/ES 2015/ES Harmony) magic.
          Let's break down this statement into multiple parts
          `this.items =``
          sets the value of the items array to whatever is on the right side of the `=`. No problem there

          `this.items.filter(...)`
          .filter is a neat method that lets us filter an array.
          The `filter` method takes in a parameter which is evaluated to a conditional.

          What we can do is pass in a function that is run for every item in the array.
          That function will in turn have the item we're evaluating passed in as a parameter.

          Let's define an array:
          `numbers = [1, 2, 3, 4, 5]`
          And now we want an array only filled with even numbers.
          This is a perfect use case for the `filter` method.

          First let's define a function that returns true if a given number is even:
          `function isEven (number) { return number % 2 == 0 }``
          `isEven(1)` evaluates to false.
          `isEven(2)` evaluates to true.

          And now let's put it to work
          `evenNumbers = numbers.filter(isEven)`
          `console.log(evenNumbers)` would be [2, 4].

          Now let's rewrite this to use an anonymous function.

          `evenNumbers = numbers.filter(function (number) { return number % 2 == 0 })`

          It looks a bit cumbersome since it takes up more space, but it's
          beneficial because we don't want to clog up our namespace with
          functions that we'll only use once.

          Now let's use ES6/ES Harmony/ES 2015 Syntax.
          `function (number) { return number % 2 == 0 }` turns into:
          `(number) => { return number % 2 == 0 }` so we are left with:

          `evenNumbers = numbers.filter( (number) => { return number % 2 == 0 } )`

          Moving back to the original line of:
          `this.items = this.items.filter((item) => { return item.itemId !== itemId })`

          `(item) => { return item.itemId !== itemId }` will only return false for
          the item we want to eliminate
          (since its itemId will not not equal the itemId we're looking for).
        */
      }
    }
  })
