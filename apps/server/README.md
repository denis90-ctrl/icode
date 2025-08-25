# iKODe Telegram Bot

Telegram бот для школы программирования iKODe с интеграцией мини-приложения.

## 🚀 Запуск

### Установка зависимостей
```bash
npm install
```

### Настройка окружения
Создайте файл `.env` с токеном бота:
```env
BOT_TOKEN=7681606408:AAFhKO_LSGonJyb30-oUwIOYb5dnjGpy8X8
```

### Запуск в продакшене
```bash
npm start
```

### Запуск в режиме разработки
```bash
npm run dev
```

## 📱 Функции бота

### Команда /start
- Приветственное сообщение
- Кнопка "Открыть мини-приложение"
- Информация о школе
- Связь с менеджером

### Обработка данных из мини-приложения
- **quiz_result** - результат квиза с рекомендациями
- **trial_request** - заявка на пробное занятие
- **tariff_choice** - выбор тарифа

### Интерактивные кнопки
- 📞 Связаться с менеджером
- ℹ️ О школе
- 💰 Посмотреть тарифы
- 🎯 Записаться на пробное

## 🔗 Интеграция

- **Мини-приложение:** https://denis90-ctrl.github.io/icode/
- **Username бота:** @IKODe_app_bot
- **Токен:** 7681606408:AAFhKO_LSGonJyb30-oUwIOYb5dnjGpy8X8

## 📊 Структура данных

### quiz_result
```json
{
  "type": "quiz_result",
  "ageBucket": "9-11",
  "answers": {...},
  "scores": {"R": 2, "D": 1, "W": 0, "A": 0},
  "recommended": "R",
  "level": "Explorer",
  "timePreference": "Выходные"
}
```

### trial_request
```json
{
  "type": "trial_request",
  "fio": "Иванов Иван",
  "phone": "+79991234567",
  "age": "9-11",
  "track": "R",
  "time": "Выходные",
  "source": "VK → Mini App"
}
```

### tariff_choice
```json
{
  "type": "tariff_choice",
  "tariffId": "start"
}
```

## 🛠 Технологии

- **Telegraf** - Telegram Bot API framework
- **Node.js** - JavaScript runtime
- **dotenv** - управление переменными окружения

## 📝 Логи

Бот логирует все входящие данные и ошибки в консоль для отладки.
