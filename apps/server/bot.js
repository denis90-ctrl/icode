require('dotenv').config();
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

// Обработка команды /start
bot.start((ctx) => {
  const welcomeMessage = `🎉 Добро пожаловать в школу программирования iKODe!

🚀 Мы обучаем детей создавать:
• Игры в Roblox Studio
• 3D модели и анимации  
• Мобильные приложения
• Веб-сайты

💡 Первый результат уже на 1-2 занятии!

📱 Откройте наше мини-приложение, чтобы:
1. Пройти квиз и узнать подходящее направление
2. Записаться на пробное занятие
3. Посмотреть тарифы

Нажмите кнопку "Открыть мини-приложение" ниже 👇`;

  ctx.reply(welcomeMessage, {
    reply_markup: {
      inline_keyboard: [
        [{
          text: "🎯 Открыть мини-приложение",
          web_app: { url: "https://denis90-ctrl.github.io/icode/" }
        }],
        [{
          text: "📞 Связаться с менеджером",
          callback_data: "contact_manager"
        }],
        [{
          text: "ℹ️ О школе",
          callback_data: "about_school"
        }]
      ]
    }
  });
});

// Обработка callback кнопок
bot.action('contact_manager', (ctx) => {
  ctx.reply(`📞 Свяжитесь с нами:

👨‍💼 Менеджер: @icode_manager
📧 Email: info@icode.school
🌐 Сайт: https://icode.school

⏰ Время работы: Пн-Пт 9:00-18:00`);
});

bot.action('about_school', (ctx) => {
  ctx.reply(`🏫 О школе iKODe:

🎯 Миссия: Развивать интерес к программированию через практику

✅ Что даём:
• Интерес без борьбы
• Осязаемый результат на 1-2 занятии
• Безопасная среда обучения
• Опытные наставники рядом

🎮 Направления:
• Roblox/гейм-дизайн
• 3D-моделирование
• Web-разработка
• Мобильные приложения

👶 Возраст: 6-17 лет
📚 Формат: Очно и онлайн`);
});

// Обработка данных из мини-приложения
bot.on('web_app_data', (ctx) => {
  try {
    const data = JSON.parse(ctx.message.web_app_data.data);
    console.log('Получены данные из мини-приложения:', data);
    
    switch (data.type) {
      case 'quiz_result':
        handleQuizResult(ctx, data);
        break;
      case 'trial_request':
        handleTrialRequest(ctx, data);
        break;
      case 'tariff_choice':
        handleTariffChoice(ctx, data);
        break;
      default:
        console.log('Неизвестный тип данных:', data.type);
    }
  } catch (error) {
    console.error('Ошибка обработки данных:', error);
    ctx.reply('❌ Произошла ошибка при обработке данных. Попробуйте ещё раз.');
  }
});

// Обработка результата квиза
function handleQuizResult(ctx, data) {
  const trackNames = {
    R: "Roblox/гейм-дизайн",
    D: "3D-моделирование",
    W: "Web-разработка",
    A: "Мобильные приложения"
  };
  
  const levelNames = {
    Starter: "Начинающий",
    Explorer: "Исследователь", 
    Builder: "Строитель",
    Creator: "Создатель"
  };
  
  const message = `🎯 Результат квиза:

👶 Возраст: ${data.ageBucket}
🎮 Рекомендуемый трек: ${trackNames[data.recommended]}
📊 Уровень: ${levelNames[data.level]}
⏰ Удобное время: ${data.timePreference}

📈 Баллы по трекам:
• Roblox: ${data.scores.R}
• 3D: ${data.scores.D}
• Web: ${data.scores.W}
• Apps: ${data.scores.A}

💡 Следующий шаг: Записаться на пробное занятие!`;

  ctx.reply(message, {
    reply_markup: {
      inline_keyboard: [
        [{
          text: "📝 Записаться на пробное",
          callback_data: "book_trial"
        }],
        [{
          text: "💰 Посмотреть тарифы",
          callback_data: "view_tariffs"
        }]
      ]
    }
  });
}

// Обработка заявки на пробное
function handleTrialRequest(ctx, data) {
  const message = `📝 Новая заявка на пробное занятие!

👤 ФИО: ${data.fio}
📱 Телефон: ${data.phone}
👶 Возраст: ${data.age}
🎮 Трек: ${data.track}
⏰ Время: ${data.time}
📱 Источник: ${data.source}

✅ Заявка принята! Менеджер свяжется в течение 2 часов.`;

  ctx.reply(message, {
    reply_markup: {
      inline_keyboard: [
        [{
          text: "📞 Связаться сейчас",
          callback_data: "contact_now"
        }],
        [{
          text: "💰 Посмотреть тарифы",
          callback_data: "view_tariffs"
        }]
      ]
    }
  });
  
  // Уведомляем менеджера
  // ctx.telegram.sendMessage(ADMIN_ID, `🚨 НОВАЯ ЗАЯВКА!\n${message}`);
}

// Обработка выбора тарифа
function handleTariffChoice(ctx, data) {
  const tariffNames = {
    start: "Старт (вводный + 4 занятия)",
    base: "База (8 занятий + проект)",
    pro: "Про (12 занятий + 2 проекта)"
  };
  
  const message = `💰 Выбран тариф: ${tariffNames[data.tariffId]}

✅ Выбор сохранён! Менеджер свяжется для уточнения деталей.

📞 Если у вас есть вопросы, пишите нам!`;

  ctx.reply(message, {
    reply_markup: {
      inline_keyboard: [
        [{
          text: "📞 Связаться с менеджером",
          callback_data: "contact_manager"
        }],
        [{
          text: "🎯 Записаться на пробное",
          callback_data: "book_trial"
        }]
      ]
    }
  });
}

// Дополнительные callback обработчики
bot.action('book_trial', (ctx) => {
  ctx.reply(`📝 Для записи на пробное занятие:

1️⃣ Откройте мини-приложение
2️⃣ Пройдите квиз
3️⃣ Заполните форму записи

Или свяжитесь с менеджером напрямую: @icode_manager`);
});

bot.action('view_tariffs', (ctx) => {
  const tariffsMessage = `💰 Тарифы школы iKODe:

🚀 СТАРТ - 4 занятия
• Вводный модуль
• Базовые навыки
• Первый мини-проект
💵 Стоимость: уточняйте у менеджера

🏗️ БАЗА - 8 занятий  
• Расширенная программа
• Создание проекта
• Сертификат
💵 Стоимость: уточняйте у менеджера

⭐ ПРО - 12 занятий
• Полный курс
• 2 проекта в портфолио
• Поддержка после курса
💵 Стоимость: уточняйте у менеджера

📞 Для уточнения деталей: @icode_manager`;

  ctx.reply(tariffsMessage, {
    reply_markup: {
      inline_keyboard: [
        [{
          text: "📞 Узнать стоимость",
          callback_data: "contact_manager"
        }],
        [{
          text: "🎯 Записаться на пробное",
          callback_data: "book_trial"
        }]
      ]
    }
  });
});

bot.action('contact_now', (ctx) => {
  ctx.reply(`📞 Свяжитесь с нами прямо сейчас:

👨‍💼 Менеджер: @icode_manager
📱 Telegram: @icode_manager
📧 Email: info@icode.school

⏰ Время работы: Пн-Пт 9:00-18:00

💬 Напишите нам, и мы ответим в течение 15 минут!`);
});

// Обработка ошибок
bot.catch((err, ctx) => {
  console.error('Ошибка бота:', err);
  ctx.reply('❌ Произошла ошибка. Попробуйте ещё раз или обратитесь к администратору.');
});

// Запуск бота
bot.launch()
  .then(() => {
    console.log('🤖 Бот iKODe успешно запущен!');
    console.log('📱 Username: @IKODe_app_bot');
    console.log('🌐 Мини-приложение: https://denis90-ctrl.github.io/icode/');
  })
  .catch((error) => {
    console.error('❌ Ошибка запуска бота:', error);
  });

// Graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
