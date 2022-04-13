**Приложение по поиску отелей**

![](https://shields.io/badge/-HTML-orange)
![](https://shields.io/badge/-CSS-blue)
![](https://shields.io/badge/-JavaScript-yellow)
![](https://shields.io/badge/-React.JS-05D9FF)

## Описание
 - Данное приложение позволяет найти отели. Для этого необходимо выбрать город, дату заселения, продолжительность съема отеля.
 - Приложение состоит из авторизации и поиска. 
 - Для авторизации достаточно ввести любую электронную почту. Например: **a@mail.ru**
 - Пароль должен состоять из латинских букв и цифр. Минимум 8 символов. Например: **abcdefgx**
 - Frontend написан на React.JS. 
 - В приложение используется стороннее api. [Ссылка на описание api](https://support.travelpayouts.com/hc/ru/articles/115000343268-API-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85-%D0%BE%D1%82%D0%B5%D0%BB%D0%B5%D0%B9)

## Функциональность
 - На странице поиска следующие данные по умолчанию: 
 - - Город Москва.
 - - Текущая дата.
 - - Длительность проживания - 1 день.
 - При загрузке страницы сразу находятся отели соответствующие данным по умолчанию.
 - Отель можно добавить в избранное, если нажать на иконку сердечка. После этого он сразу отобразится в категории избранное.
 - Чтобы убрать из избранного можно или нажать на иконку в разделе поиска, или в разделе избранное. 
 - При выборе новых данных для поиска, список избранных не сбрасывается
 - Избранные отели, в категории избранное, можно отсортировать по стоимости и количеству звезд.
 - На странице есть слайдер в котором по порядку меняются 7-мь изображений. Их можно пролистывать в ручную, если навести курсор мыши на слайдер и крутить колесо мыши. Сама страница при этом прокручиваться (скролиться) не будет.
 
<tr>
    <hr>
</tr>
 
 [Ссылка на макет в Figma](https://www.figma.com/file/PxI4ycD6GMGSpxOZ2NbFBO/React-Test%2FSimple-Hotel-Check-(Copy)?node-id=0%3A1).
 
 [Ссылка на готовый проект. Авторизация](https://tyt34.github.io/simple-hotel-check/#/auth).
 
 [Ссылка на готовый проект. Поиск](https://tyt34.github.io/simple-hotel-check/).

 ## Запуск приложения
1. npm i
2. npm run start
