# waterless

## Тестовое задание #3 по React/Redux

Бекенд отсюда: https://github.com/maxfarseer/backend-tz3

Участвовали ли в ТЗ 1 / ТЗ 2
- [x] Да
- [ ] Нет

### Чек-лист решения

- [x] Авторизация через Google Sign In
- [x] Отображение списка новостей
- [x] Отображение новости в режиме чтения
- [x] Отображение новости в режиме редактирования
- [x] Удаление новости
- [x] Показ иконок "удалить/редактировать" только для автора
- [x] Роутинг и редиректы после действий

#### Бонус

- [x] Создание пользователя с вводом рекапчи
- [x] Форма входа для созданного пользователя (`/login`)


Затраченное время функционал: 9ч.
Затраченное время псевдодизайн-верстка: 2ч
Затраченное время бонусный функционал: 4ч

Собственные замечания: из мелочей - стоило бы сделать вывод ошибок, из серьёзного - изначально сделал проверку по username, но, в самом конце понял, что стоило хранить только токен и всегда вызывать запрос get /user/{id}. Однако, задача заняла слишком много времени, а переделка была координальная и долгая, потому подогнал под своё решение.