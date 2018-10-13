# OOJS: Цветочный сад


## Введение
Требуется построить JavaScript объекты: сад как объект с коллекцией
цветов. Данное задание похоже на некоторые ранние задания Руби, которые
были нами выполнены ранее. Помните, что (задание Апельсиновое дерево),
где мы оформляли старое апельсиновое дерево с большим количеством
апельсинов? Данное задание будет очень похоже на него.

### Объекты JavaScript
Требуется построить объекты с использованием двух приемов: через
использование синтаксиса объект-литерал и через использование
конструктора. Эти два способа, которые в конце концов делают тоже самое:
создают объекты с их атрибутикой и поведением.

**Синтаксиса объект-литерал**. Когда нам нужно только один экземпляр
объекта, удобно использовать синтаксис объект-литерал. Требуется
”буквально” записать объект, который мы хотим получить в конце, с
описанием свойств и ценностей объекта. Синтаксис может быть схож с
написанием хэш-объекта Руби, но на самом деле здесь нет действительных
эквивалентов для создания таких объектов с помощью Руби. В первой фигуре
требуется создать человека с именем и фамилией и его поведение, чтобы
чтобы соединить это в полное имя.

```js
var person = {
 firstName: "Kweku",
 lastName: "White",
 fullName: function() {
   return this.firstName + " " + this.lastName;
 }
}
person.firstName;
// => "Kweku"
person.fullName();
// => "Kweku White"
```
*Рисунок 1*. Используя синтаксис объект-литерал представьте человека как
объект JavaScript.

***Конструктор***. Если нам нужно создать тестовый объект с похожим
поведением и ценностями, мы можем записать его с помощью конструктора.
Конструктор служит как *производства* по созданию Руби объектов (т.е.
определяют класс с помощью инициализированного метода, который
настраивает объекты). Использование конструктора, позволяет нам делить
свойства и поведение среди объектов через прототип конструктора, словно
методы экземпляра, определенные в классе Руби, которые являются общими
для всех экземпляров этого класса.
Во второй фигуре нам нужно использовать конструктор чтобы создать двух
людей с теми же атрибутами и поведением что и в "Рисунок 1". Конструктор
`Person()` настраивает атрибуты которые уникальны для каждого экземпляра:
имя и фамилия. Полное имя делится объектом через объект
`Person.prototype`.

```js
var Person = function(firstName, lastName) {
 this.firstName = firstName;
 this.lastName = lastName;
}
Person.prototype.fullName = function() {
 return this.firstName + " " + this.lastName
}
var grayson = new Person("Grayson", "Arthur");
grayson.firstName;
// => "Grayson"
var warner = new Person("Warner", "Constable");
warner.fullName();
// => "Warner Constable"
```
*Рисунок 2*. Используя конструктор, представьте людей как объекты
avaScript.

### Тестирование Jasmine
Схож с нашим использование RSpec, для тестирования поведения объектов
Руби, требуется использовать тест Jasmine [Jasmine][].К счастью, Jasmine
распознает много кодов таких как RSpec, много функций, которым мы будем
давать одинаковые имена: `describe()`, `it()`, `expect()`, и другие.
Тем не менее, есть безусловно и отличия. Например, тестирование Jasmine
предоставляет другой набор совпадений. Многие совпадения похожи на
совпадения RSpec(например, `toEqual()`), но некоторые совпадения, которые
мы когда-то использовали в RSpec не доступны в тестирование Jasmine.
Также `let` уже нет. Если мы хотим поделиться настройками для тестов,
нужно использовать `beforeEach()` и/или `beforeAll()`. И, конечно, код на
JavaScript. Мы должны оставаться в кругу правил области JavaScript. А
блоки Ruby заменяются анонимными функциями. При описании объекта в RSpec
фактические тесты объявляются внутри блока, передаваемого методу
`describe'. В наших тестах Jasmine анонимные функции выполняют роль этих
блоков. Когда мы вызываем функцию` describe ()', мы передаем анонимную
функцию, содержащую фактические тесты. На Рисунокх 3 и 4 показан один и
тот же тест, написанный в RSpec и Jasmine.
```ruby
describe "a string with my name" do
 let(:my_name) { "Carson Hollands" }
 it "is my name" do
   expect(my_name).to eq "Carson Hollands"
 end
end
```
*Figure 3.* Testing the value of a Ruby string object with RSpec.
```js
describe("a string with my name", function() {
  var myName;
  beforeEach(function() {
    myName = "Carson Hollands";
  });

  it("is my name", function() {
    expect(myName).toEqual("Carson Hollands");
  });

});
```

*Рисунок 4.* Тестирование значения объекта строки JavaScript с помощью Jasmine.
   
## Выпуски
### Пре-релиз: Проверка и выполнение тестов
У нас есть набор тестов, которые будут направлять нас, огда мы
разрабатываем наши сад и цветочные объекты; тестовые файлы расположены в
папке " spec/". Чтобы запустить тесты, нужно открыть ' SpecRunner.файл
html в браузере. Откройте Spec runner. Садовые тесты все терпят неудачу,
а цветочные тесты находятся на рассмотрении. После написания кода для
создания наших объектов, нужно повторим тесты, обновив Spec runner.
### Релиз 0: Цветы
Наши цветочные объекты просты. Каждый цветок имеет два атрибута: название
и цвет. Мы создадим экземпляр flowers с помощью функции конструктора`
Flower ()`, которая была определена в файле ' src/flower.js`.
Тесты на цветы не были написаны. Напишите тесты, демонстрирующие, что
наша функция конструктора создает объекты с правильными именами и
цветами. Затем обновите функцию конструктора` Flower ()', чтобы пройти
тесты.
*Примечание:* Следуйте примеру на Фигуре 4, чтобы написать тесты Jasmine.
### Релиз 1: Сад
Начните с создания объекта сада. В файл в src/сад.js ' есть переменная'
garden`, значение которой является литералом объекта без свойств.
Используйте тесты для добавления нужных свойств в сад. Некоторые из
свойств будут атрибутами, такими как имя и местоположение. Другие
свойства будут примерами поведения как засаживать цветки.
## Заключение
Мы можем использовать [object-oriented approach][] к написанию
JavaScript: создание объектов с атрибутами и поведением, совместное
использование поведения объектов и прочее. Нам просто нужно научиться
реализовывать их в JavaScript.
[jasmine]: http://jasmine.github.io/2.4/introduction.html
[object literal syntax]: http://www.dyn-web.com/tutorials/object-literal/
[object-oriented approach]: https://developer.mozilla.org/enUS/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript
[orange tree challenge]: ../../../orange-tree-1-just-oranges-challenge# OOJS: A Garden with Flowers









______________________________________________________________________________


     ## Summary
     We're going to build some JavaScript objects:  a garden object with a collection of flowers.  This challenge will be similar to some of the earlier Ruby challenges that we've completed.  Remember the [orange tree challenge][] where we designed an orange tree that had many oranges?  This challenge will be very similar.
     ### JavaScript Objects
     We're going to build objects using two approaches:  through object literal syntax and through a constructor function.  These are two approaches that ultimately do the same thing:  create objects with attributes and behaviors.

     ***Object literal syntax***.  When we only need one instance of an object, it's convenient to use [object literal syntax] to create that object.  We "literally" write the object that we want, declaring the object's properties and their values.  The syntax might feel similar to writing a Ruby hash object, but there's no real equivalent for creating objects this way in Ruby.  In Figure 1 we create a person with first and last names and the behavior to combine them into a full name.

     ```js
     var person = {
      firstName: "Kweku",
      lastName: "White",
      fullName: function() {
        return this.firstName + " " + this.lastName;
      }
    }

    person.firstName;
    // => "Kweku"
    person.fullName();
    // => "Kweku White"
    ```
    *Figure 1*. Using object literal syntax to represent a person as a JavaScript object.


    ***Constructor functions***.  If we find ourselves needing to create multiple objects with the same behaviors and properties, we can write a constructor function. Constructor functions serve as *factories* that produce objects following a template.  This is similar to how we create objects in Ruby (i.e., defining a class with an initialize method that sets up objects).  Using a constructor function also allows us to share properties and behaviors among objects through the constructor's prototype—like instance methods declared in a Ruby class that are shared among instances of that class.  

    In Figure 2, we use a constructor function to create two person objects with the same attributes and behaviors as the lone person object created in Figure 1.  The `Person()` constructor function sets the attributes that are unique to each instance:  the first and last names.  The full name behavior is shared by the person objects through the `Person.prototype` object.

    ```js
    var Person = function(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    Person.prototype.fullName = function() {
      return this.firstName + " " + this.lastName
    }

    var grayson = new Person("Grayson", "Arthur");
    grayson.firstName;
    // => "Grayson"

    var warner  = new Person("Warner", "Constable");
    warner.fullName();
    // => "Warner Constable"
    ```
    *Figure 2*. Using a constructor function to represent people as JavaScript objects.


    ### Jasmine Tests
    Similar to our use of RSpec for testing the behaviors of our Ruby objects, we're going to use [Jasmine][] for testing the behaviors of our JavaScript objects.  Fortunately, Jasmine reads a lot like RSpec; a lot of the functions we'll call have the same names: `describe()`, `it()`, `expect()`, etc.

    But there are definitely differences as well.  For example, Jasmine provides a different set of matchers. Many Jasmine matchers are similar to RSpec matchers (e.g., `toEqual()`), but some matchers that we're used to using in RSpec are not available in Jasmine.  `let` is gone, too.  If we have shared setup for tests, we need to use `beforeEach()` and/or `beforeAll()`.  And, of course, the code is JavaScript.  We need to remain aware of JavaScript's scoping rules.  And Ruby blocks are replaced with anonymous functions.  When describing an object in RSpec, the actual tests are declared inside a block passed to the `describe` method.  In our Jasmine tests, anonymous functions fulfill the role of these blocks.  When we call the `describe()` function, we pass along an anonymous function containing the actual tests.  Figures 3 and 4 show the same test written in RSpec and Jasmine.

    ```ruby
    describe "a string with my name" do
    let(:my_name) { "Carson Hollands" }

    it "is my name" do
    expect(my_name).to eq "Carson Hollands"
    end
    end
    ```
    *Figure 3.* Testing the value of a Ruby string object with RSpec.

    ```js
    describe("a string with my name", function() {
      var myName;

      beforeEach(function() {
        myName = "Carson Hollands";  
      });

      it("is my name", function() {
        expect(myName).toEqual("Carson Hollands");
      });
    });
    ```
    *Figure 4.* Testing the value of a JavaScript string object with Jasmine.


    ## Releases
    ### Pre-release:  Review and Run the Tests
    We have a test suite that will guide us as we develop our garden and flower objects; the test files are located in the `spec/` folder.  To run the tests, we open the `SpecRunner.html` file in the browser.  Open the spec runner.  The garden tests are all failing and the flower tests are pending.  As we write the code to create our objects, we'll rerun the tests by refreshing the spec runner.


    ### Release 0: The Flowers
    Our flower objects are simple.  Each flower has two attributes:  name and color.  We're going to instantiate flowers using a `Flower()` constructor function, which has been defined in the file `src/flower.js`.

    The tests for flowers have not been written.  Write tests that demonstrate that our constructor function produces objects with the correct names and colors.  Then, update the `Flower()` constructor function to pass the tests.

    *Note:*  Follow the example in Figure 4 to write the Jasmine tests.


    ### Release 1: The Garden
    Begin by creating the garden object.  In the file `src/garden.js` we have a variable `garden` whose value is an object literal with no properties.  Use the tests to guide adding the desired properties to the garden.  Some of the properties will be attributes like name and location.  Other properties will be behaviors like planting flowers.


    ## Conclusion
    We can take an [object-oriented approach][] to writing JavaScript: creating objects with attributes and behaviors, sharing behaviors among objects. etc.  We just need to learn how to implement these in JavaScript.


    [jasmine]: http://jasmine.github.io/2.4/introduction.html
    [object literal syntax]: http://www.dyn-web.com/tutorials/object-literal/
    [object-oriented approach]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript
    [orange tree challenge]: ../../../orange-tree-1-just-oranges-challenge

