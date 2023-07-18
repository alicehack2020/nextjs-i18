export const getDictionary = async (lang: string) => {
  const dictionaries: any = {
    en: () => import("./dictionaries/en.json").then((r) => r.default),
    hi: () => import("./dictionaries/hi.json").then((r) => r.default),
  };

  if (dictionaries[lang]) {
    return dictionaries[lang]();
  } else {
    console.log(`Dictionary  language not found.`);
  }
};
