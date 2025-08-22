import WebApp from "@twa-dev/sdk";
export const tg = WebApp;

export const initTelegram = () => {
  try { tg.ready(); } catch {}
  try { tg.expand(); } catch {}
  try { tg.setHeaderColor("#FFD600"); tg.setBackgroundColor("#FFFFFF"); } catch {}
};

export const setMainButton = (text: string, onClick: () => void, visible = true) => {
  tg.MainButton.setText(text);
  tg.MainButton.onClick(onClick);
  visible ? tg.MainButton.show() : tg.MainButton.hide();
};

export const isTelegram = () => !!(tg as any)?.platform || !!(tg as any)?.initData;
export const openBotChat = (botUsername: string) =>
  tg.openTelegramLink ? tg.openTelegramLink(`https://t.me/${botUsername}`) : window.open(`https://t.me/${botUsername}`, "_blank");
