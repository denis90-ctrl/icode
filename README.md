# iKODe Telegram Mini App

Telegram Mini App для школы программирования iKODe с квизом, тарифами и информацией о курсах.

## 🚀 Локальный запуск

```bash
npm install
npm run dev
```

Открой http://localhost:5173

## 📱 Деплой на GitHub Pages

### 1. Создай репозиторий
Создай пустой репозиторий `<REPO_NAME>` в аккаунте `<GITHUB_USERNAME>`

### 2. Замени плейсхолдеры
В файлах замени:
- `<GITHUB_USERNAME>` → твой GitHub логин
- `<REPO_NAME>` → имя репозитория
- `<BOT_USERNAME>` → юзернейм бота без @ (если есть)

### 3. Запуши код
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin git@github.com:denis90-ctrl/icode.git
git push -u origin main
```

### 4. Деплой
```bash
npm run deploy
```

Сайт будет доступен на: https://denis90-ctrl.github.io/icode/

## 🤖 Настройка BotFather

### 1. Установи домен
```
/setdomain → https://denis90-ctrl.github.io
```

### 2. Настрой Web App
```
/setmenubutton → Web App URL: https://denis90-ctrl.github.io/icode/
```

## ✨ Функции

- **Главное меню** с навигацией
- **Мини-квиз** на 3 вопроса с результатами
- **Тарифы** с выбором и отправкой в бота
- **О проекте** с кнопкой связи в Telegram
- **Telegram WebApp SDK** интеграция
- **Адаптивный дизайн** в стиле Telegram

## 🛠 Технологии

- React 18 + TypeScript
- Vite + HashRouter
- @twa-dev/sdk
- GitHub Pages деплой
