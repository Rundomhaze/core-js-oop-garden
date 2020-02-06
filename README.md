# OOJS: Цветочный сад


## Введение
Ты когда-нибудь мечтал(а) о саде с прекрасными цветами вокруг своего личного домика? Так напиши его на Javascript. Пара классов, тесты и всё готово!

### Объекты JavaScript
В JS можно создавать объекты тремя разными способами: 
1. используя синтаксис `объект-литерал`
2. используя функции-конструкторы, `prototype` (наиболее нативный для JS метод)
3. используя `class` из ES6 (подход ООП)


**Синтаксис объект-литерал**. Когда нам нужен только один экземпляр
объекта, удобно использовать синтаксис объект-литерал. Требуется
”буквально” записать объект, который мы хотим получить,
описать свойства и методы объекта. На первом рисунке
требуется создать человека с именем и фамилией. Также надо добавить метод,
чтобы соединить это в полное имя.

```js
let person = {
 firstName: 'Kweku',
 lastName: 'White',
 fullName: function() {
   return this.firstName + ' ' + this.lastName;
 }
}
person.firstName;
// => 'Kweku'
person.fullName();
// => 'Kweku White'
```
*Рисунок 1*. Использование синтаксиса объект-литерал для представление человека как
объект JavaScript.

***Функция-Конструктор***. Если нам нужно создать тестовый объект с похожим
поведением и значениями, мы можем записать его с помощью функции-конструктора. Использование ключевого слова `prototype` позволяет нам распространять свойства и методы на все объекты, созданные данным конструктором.
На втором рисунке мы используем конструктор, чтобы создать двух
людей с теми же атрибутами и поведением что и на 'Рисунок 1'. Конструктор
`Person()` настраивает атрибуты, которые уникальны для каждого экземпляра:
имя и фамилия. Полное имя составляется при помощи метода прототипа `Person.prototype.fullName`.

```js
let Person = function(firstName, lastName) {
 this.firstName = firstName;
 this.lastName = lastName;
}
Person.prototype.fullName = function() {
 return this.firstName + ' ' + this.lastName
}
let grayson = new Person('Grayson', 'Arthur');
grayson.firstName;
// => 'Grayson'
let warner = new Person('Warner', 'Constable');
warner.fullName();
// => 'Warner Constable'
```
*Рисунок 2*. Использование конструктора для представления людей как объекты JavaScript.

***ES6 - Class***
Начиная с ES6 появилась возможность объявлять классы, как это делается в большинстве объектно-ориентированных языках программирования. Рассмотрим тот же пример, но с использованием новой конструкции.

```js
class Person{
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

let grayson = new Person('Grayson', 'Arthur');
grayson.firstName;
// => 'Grayson'
let warner = new Person('Warner', 'Constable');
warner.fullName();
// => 'Warner Constable'
```
*Рисунок 3*. Использование `class` для представления людей как объекты JavaScript.



### Тестирование Jasmine
Для тестирования требуется использовать Jasmine [Jasmine][]. Напоминаем, основные методы, используемые в Jasmine: `describe()`, `it()`, `expect()`, и другие.
Если хотите установить настройки перед каждым тестом, нужно использовать `beforeEach()` и/или `beforeAll()`. Когда вызываешь функцию `describe ()`, то передавай анонимную функцию, содержащую фактические тесты. На Рисунке 4 показан тест, написанный в Jasmine.

```js
describe('a string with my name', function() {
  let myName;
  beforeEach(function() {
    myName = 'Carson Hollands';
  });
  it('is my name', function() {
    expect(myName).toEqual('Carson Hollands');
  });
});
```

*Рисунок 4.* Тестирование значения объекта строки JavaScript с помощью Jasmine.
   
## Releases
### Pre-release: Проверка и выполнение тестов
У тебя есть набор тестов, которые будут направлять тебя, пока ты
разрабатываешь свои объекты сада и цветов; тестовые файлы расположены в
папке `spec/`. Чтобы запустить тесты, нужно открыть `SpecRunner.html` в браузере. 

### Release 0: Цветы
Объекты цветов просты. Каждый цветок имеет два атрибута: название
и цвет. Экземпляр flower создаётся с помощью класса `Flower`, который определен в файле `src/flower.js`.
Напиши тесты, демонстрирующие, что класс создает объекты с правильными именами и
цветами(color). Затем обнови класс `Flower`, чтобы пройти
тесты.
*Примечание:* Следуй примеру на Рисунке 4, чтобы написать тесты Jasmine.

### Release 1: Сад
В `garden.js` есть класс `Garden`. Это будет твой сад. Добавь ему необходимые свойства и методы. Руководствуйся тестами при написании методов. Все тесты должны проходить.

---

object literal syntax: http://www.dyn-web.com/tutorials/object-literal/
Объектно-ориентировнный подход: https://developer.mozilla.org/enUS/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript
