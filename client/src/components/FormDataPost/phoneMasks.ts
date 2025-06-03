import belarus from '../../assets/svg/belarus.svg'
import kazakhstan from '../../assets/svg/kazakhstan.svg'
import uzbekistan from '../../assets/svg/uzbekistan.svg'

export const phoneMasks: { [key: string]: string } = {
  BY: "+375 (__) ___-__-__",
  RU: "+7 (___) ___-__-__",
  UZ: "+998 (__) ___-__-__",
};

export const countryOptions = [
  { id: "2", value: "BY", content: "Беларусь", img: belarus, code: "+375", disabled: false },
  { id: "3", value: "KZ", content: "Казахстан", img: kazakhstan, code: "+7", disabled: true },
  { id: "1", value: "UZ", content: "Узбекистан", img: uzbekistan, code: "+998", disabled: true },
];
