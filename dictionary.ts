// const dictionaries = {
//     en: () => import("./dictionaries/en.json").then(r => r.default),
//     hi: () => import("./dictionaries/hi.json").then(r => r.default)
//   }

//   export const getDictionary = (lang) => {
//     return dictionaries[lang]();
//   }

interface FormInterface {
  name: string; email: string; city: string
}

const dictionaries: {
  en: () => Promise<{ form: FormInterface }>;
  hi: () => Promise<{ form: FormInterface }>;
} = {
  en: () => import('./dictionaries/en.json').then((r) => r.default),
  hi: () => import('./dictionaries/hi.json').then((r) => r.default),
};

export const getDictionary = (lang: keyof typeof dictionaries) => {
  return dictionaries[lang]();
};
