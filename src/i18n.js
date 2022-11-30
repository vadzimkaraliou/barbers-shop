import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'pl',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      pl: {
        translation: {
          showProducts: "Pokaż produkty",
          goHome: "DO STRONY GŁÓWNEJ",
          searchProducts: "Wyszukaj produkt",
          showCart: "Pokaż koszyk",
          address: "WARSZAWA POLSKA",
          openingHours: "GODZINY OTWARCIA (PN - SB) 10:00 - 20:00",
          toSalonPage: "Do strony salonu",
          search: "ZNAJDŹ SWÓJĄ ULUBIONĄ MARKĘ",
          typeBrand: "WPISZ TU MARKĘ PRODUKTU...",
          searchSubmit: "SZUKAJ",
          waitNotification: "proszę zaczekać chwilę...",
          noResults: "Przepraszamy, ale nie mamy takiej marki...",
          addToCart: "Do koszyka",
          added: "DODANE DO KOSZYKA",
          addProduct: "Dodaj produkt",
          removeProduct: "Usuń produkt",
          price: "CENA: ",
          totalPrice: "SUMA ZAMÓWIENIA: ",
          summary: "PODSUMOWANIE",
          deleteAll: "USUŃ WSZYSTKO",
          empty: "Twój koszyk jest pusty",
          yourCart: "TWÓJ KOSZYK",
          comeBackShopping: "POWRÓĆ DO ZAKUPÓW",
          order: "ZAMAWIAM",
          personalData: "WPROWADŹ SWOJE DANE",
          fullName: "Imię i nazwisko",
          email: "Adres e-mail",
          personalAddress: "Adres",
          postCode: "Kod pocztowy",
          city: "Miasto",
          country: "Kraj",
          invoice: "POTRZEBUJĘ FAKTURY",
          companyName: "Nazwa firmy",
          companyPost: "Kod pocztowy",
          companyAddress: "Adres firmy",
          confirm: "ZATWIERDŹ",
          deliveryInfo: "DANE DO WYSYŁKI",
          alertForm: "WYPEŁNIJ WSZYSTKIE POLA",
          VAT: "NIP",
          goPayment: "PRZEJDŹ DO PŁATNOŚCI",
          paymentMethods: "METODY PŁATNOŚCI",
          card: "KARTA PŁATNICZA",
          transfer: "PRZELEW",
          cash: "PŁATNOŚĆ ZA POBRANIEM",
          finalPay: "ZAPŁAĆ",
          grate: "DZIĘKUJEMY ZA ZAKUPY W NASZYM SKLEPIE",
        }
      },
      en: {
        translation: {
          showProducts: "Show products",
          goHome: "TO MAIN PAGE",
          searchProducts: "Search for a product",
          showCart: "Show a shopping cart",
          address: "WARSAW POLAND",
          openingHours: "WE ARE OPEN (MON - SAT) 10:00 - 20:00",
          toSalonPage: "To barbershop page",
          search: "FIND YOUR FAVORITE BRAND",
          typeBrand: "TYPE BRAND HERE...",
          searchSubmit: "SEARCH",
          waitNotification: "please, wait a second...",
          noResults: "Sorry, we don't have that brand...",
          addToCart: "Add to cart",
          added: "ADDED TO CART",
          addProduct: "Add product",
          removeProduct: "Remove product",
          price: "PRICE: ",
          totalPrice: "TOTAL AMOUNT: ",
          summary: "SUMMARY",
          deleteAll: "DELETE ALL",
          empty: "Your cart is empty",
          yourCart: "YOUR CART",
          comeBackShopping: "COME BACK TO SHOPPING",
          order: "PURCHASE",
          personalData: "FILL IN THE FORM",
          fullName: "Name and surname",
          email: "E-mail address",
          personalAddress: "Address",
          postCode: "ZIP Code",
          city: "City",
          country: "Country",
          invoice: "I NEED AN INVOICE",
          companyName: "Company name",
          companyPost: "Company ZIP Code",
          companyAddress: "Company address",
          confirm: "CONFIRM",
          deliveryInfo: "DELIVERY",
          alertForm: "FILL IN ALL FIELDS",
          VAT: "VAT",
          goPayment: "TO PAYMENTS",
          paymentMethods: "PAYMENT METHODS",
          card: "CARD PAYMENT",
          transfer: "BANK TRANSFER",
          cash: "CASH ON DELIVERY",
          finalPay: "PAY",
          grate: "THANK YOU FOR PURCHASING IN OUR STORE"
        }
      }
    }
  });

export default i18n;