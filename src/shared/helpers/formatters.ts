//* Форматирует число как валюту.
/**
 * @param value Число для форматирования.
 * @param currency Символ валюты (например, 'USD', 'EUR', 'RUB').
 * @param locales Локаль (например, 'en-US', 'ru-RU').
 */
export const formatCurrency = (value: number, currency: string = 'USD', locales: string = 'en-US'): string => {
  const currencyFormat = new Intl.NumberFormat(locales, {
    style: 'currency',
    currency: currency,
  });

  return currencyFormat.format(value);
};
// console.log(formatCurrency(1234567.89)); // "$1,234,567.89"
// console.log(formatCurrency(1234567.89, 'EUR', 'de-DE')); // "1.234.567,89 €"
// console.log(formatCurrency(1234567.89, 'RUB', 'ru-RU')); // "1 234 567,89 ₽"

//* Форматирует дату в строку.
/**
 * @param date Дата для форматирования.
 * @param locales Локаль (например, 'en-US', 'ru-RU').
 * @param options Параметры форматирования (например, год, месяц, день).
 */
export const formatDate = (date: Date, locales: string = 'en-US', options: Intl.DateTimeFormatOptions = {}): string => {
  const dateFormat = new Intl.DateTimeFormat(locales, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  });

  return dateFormat.format(date);
};
// console.log(formatDate(new Date())); // "November 24, 2024"
// console.log(formatDate(new Date(), 'ru-RU')); // "24 ноября 2024 г."

//* Преобразует строку в верхний регистр.
/**
 * @param text Текст для преобразования.
 */
export const toUpperCase = (text: string): string => text.toUpperCase();
// console.log(toUpperCase('hello world')); // "HELLO WORLD"

// * Преобразует строку в нижний регистр.
/**
 * @param text Текст для преобразования.
 */
export const toLowerCase = (text: string): string => text.toLowerCase();
// console.log(toLowerCase('HELLO WORLD')); // "hello world"

// * Обрезает строку до заданной длины и добавляет многоточие.
/**
 * @param text Текст для обрезания.
 * @param maxLength Максимальная длина строки.
 */
export const truncateText = (text: string, maxLength: number = 100): string => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }
  return text;
};
// console.log(truncateText('This is a very long text that needs to be truncated', 20)); // "This is a very lo..."

// * Форматирует время в читаемый формат (часы:минуты:секунды).
/**
 * @param seconds Время в секундах.
 */
export const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${hours}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};
// console.log(formatTime(3661)); // "1:01:01"
// console.log(formatTime(45)); // "0:00:45"

// * Форматирует номер телефона в формат (XXX) XXX-XXXX.
/**
 * @param phoneNumber Номер телефона.
 */
export const formatPhoneNumber = (phoneNumber: string): string => {
  const cleaned = phoneNumber.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }

  return phoneNumber; // Если формат не совпадает, возвращаем исходное значение
};
// console.log(formatPhoneNumber('1234567890')); // "(123) 456-7890"
// console.log(formatPhoneNumber('9876543210')); // "(987) 654-3210"
