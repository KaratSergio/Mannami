//* Форматирует число как валюту
export const formatCurrency = (value: number, currency: string = 'USD', locales: string = 'en-US'): string => {
  const currencyFormat = new Intl.NumberFormat(locales, {
    style: 'currency',
    currency: currency,
  });

  return currencyFormat.format(value);
};

//* Форматирует дату в строку
export const formatDate = (date: Date, locales: string = 'en-US', options: Intl.DateTimeFormatOptions = {}): string => {
  const dateFormat = new Intl.DateTimeFormat(locales, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  });

  return dateFormat.format(date);
};

//* Преобразует строку в верхний регистр
export const toUpperCase = (text: string): string => text.toUpperCase();

//* Преобразует строку в нижний регистр
export const toLowerCase = (text: string): string => text.toLowerCase();

//* Обрезает строку до заданной длины и добавляет многоточие
export const truncateText = (text: string, maxLength: number = 100): string => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }
  return text;
};

//* Форматирует время в читаемый формат (часы:минуты:секунды)
export const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${hours}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};

//* Форматирует номер телефона в формат (XXX) XXX-XXXX
export const formatPhoneNumber = (phoneNumber: string): string => {
  const cleaned = phoneNumber.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }

  return phoneNumber;
};
