import aFrameHome from "../assets/a-frame-home.jpeg";
import beeLogo from "../assets/bee-logo.jpeg";
import forestHome from "../assets/forest-home.jpeg";
import heroHome from "../assets/hero-home.jpeg";
import planHome from "../assets/plan-home.jpeg";
import premiumHome from "../assets/premium-home.jpeg";
import winterHome from "../assets/winter-home.jpeg";

export type GalleryImage = {
  src: string;
  alt: string;
  role: "hero" | "orbit" | "project";
};

export type ProjectOption = {
  title: string;
  area: string;
  scenario: string;
  term: string;
  packageLabel: string;
  priceLabel: string;
  image: string;
  imageAlt: string;
  details: string[];
};

export type ModuleBuildStep = {
  label: string;
  title: string;
  text: string;
  stat: string;
  modules: Array<{
    label: string;
    variant: "living" | "service" | "terrace" | "extension";
    slot: "main" | "right" | "deck" | "service";
  }>;
};

export type PackageStackItem = {
  name: string;
  title: string;
  text: string;
  metric: string;
  caption: string;
  tone: "base" | "comfort" | "premium";
  details: string[];
};

export type ContactInfo = {
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  director: string;
  address: string;
};

export const contactInfo: ContactInfo = {
  phoneDisplay: "+7 919 245-80-42",
  phoneHref: "tel:+79192458042",
  email: "ledaks36@mail.ru",
  director: "Директор ООО «Ледакс» Бударин Дмитрий Анатольевич",
  address: "г. Воронеж, ул. Краснознаменная, д. 53, этаж 2",
};

export const brand = {
  name: "Ledaks",
  logo: beeLogo,
  descriptor: "модульные дома",
};

export const navItems = [
  { label: "Модульность", href: "#modularity" },
  { label: "Дома", href: "#projects" },
  { label: "Комплектации", href: "#packages" },
  { label: "Контакты", href: "#contacts" },
];

export const galleryImages: GalleryImage[] = [
  {
    src: heroHome,
    alt: "Компактный модульный дом с темной отделкой и деревянной террасой",
    role: "hero",
  },
  {
    src: premiumHome,
    alt: "Современный модульный дом с панорамным остеклением",
    role: "orbit",
  },
  {
    src: forestHome,
    alt: "Деревянные модульные дома среди сосен",
    role: "orbit",
  },
  {
    src: winterHome,
    alt: "Теплый модульный дом в зимнем лесу",
    role: "orbit",
  },
  {
    src: planHome,
    alt: "Планировка модульного дома",
    role: "orbit",
  },
  {
    src: aFrameHome,
    alt: "Модульный дом с высокой крышей и террасой",
    role: "orbit",
  },
];

export const hero = {
  title: "Модульные дома, которые выглядят как постоянное решение",
  lead:
    "Ledaks делает современные дома для участка: чистый образ, продуманная планировка, теплая оболочка и понятная комплектация.",
  primaryCta: "Обсудить дом",
  secondaryCta: "Смотреть варианты",
};

export const metrics = [
  { value: 90, suffix: " м²", label: "популярные площади до" },
  { value: 4, suffix: " формата", label: "от гостевого модуля до дома" },
  { value: 1, suffix: " стиль", label: "спокойная архитектура Ledaks" },
];

export const heroSpecItems = [
  "панорамный свет",
  "терраса",
  "теплый контур",
  "готовая планировка",
  "дерево",
  "графит",
  "дом для участка",
  "Ledaks",
];

export const moduleBuildSteps: ModuleBuildStep[] = [
  {
    label: "модуль 01",
    title: "Жилое ядро",
    text: "Базовый объем закрывает главный сценарий: кухня-гостиная, спальня или гостевой формат.",
    stat: "30-40 м²",
    modules: [
      { label: "жилая зона", variant: "living", slot: "main" },
      { label: "узел", variant: "service", slot: "service" },
    ],
  },
  {
    label: "модуль 02",
    title: "Терраса и свет",
    text: "Дом раскрывается наружу: добавляем террасу, широкий вход и больше стекла.",
    stat: "+ терраса",
    modules: [
      { label: "жилая зона", variant: "living", slot: "main" },
      { label: "терраса", variant: "terrace", slot: "deck" },
      { label: "узел", variant: "service", slot: "service" },
    ],
  },
  {
    label: "модуль 03",
    title: "Расширение",
    text: "Второй объем добавляет спальню, кабинет или отдельную гостевую часть без временного вида.",
    stat: "45-60 м²",
    modules: [
      { label: "гостиная", variant: "living", slot: "main" },
      { label: "спальни", variant: "extension", slot: "right" },
      { label: "терраса", variant: "terrace", slot: "deck" },
      { label: "узел", variant: "service", slot: "service" },
    ],
  },
  {
    label: "модуль 04",
    title: "Готовый дом",
    text: "Планировка, фасад, терраса и внутренняя комплектация собираются в единый продукт.",
    stat: "до 90 м²",
    modules: [
      { label: "модуль 1", variant: "living", slot: "main" },
      { label: "модуль 2", variant: "extension", slot: "right" },
      { label: "терраса", variant: "terrace", slot: "deck" },
      { label: "узел", variant: "service", slot: "service" },
    ],
  },
];

export const projects: ProjectOption[] = [
  {
    title: "Studio",
    area: "30-40 м²",
    scenario: "гостевой дом, дача, первый модуль на участке",
    term: "по задаче",
    packageLabel: "Base / Comfort",
    priceLabel: "по запросу",
    image: premiumHome,
    imageAlt: "Компактный современный модульный дом",
    details: ["1-2 комнаты", "кухня-гостиная", "можно добавить террасу"],
  },
  {
    title: "Family",
    area: "45-60 м²",
    scenario: "сезонная жизнь или постоянный дом для семьи",
    term: "по задаче",
    packageLabel: "Comfort",
    priceLabel: "по запросу",
    image: forestHome,
    imageAlt: "Деревянный модульный дом в лесу",
    details: ["2 спальни", "панорамное остекление", "адаптация под участок"],
  },
  {
    title: "Residence",
    area: "70-90 м²",
    scenario: "просторный дом с большим стеклом и террасой",
    term: "по задаче",
    packageLabel: "Premium",
    priceLabel: "по запросу",
    image: winterHome,
    imageAlt: "Модульный дом с интерьером и террасой зимой",
    details: ["больше жилых зон", "терраса", "расширенная отделка"],
  },
  {
    title: "Custom",
    area: "индивидуально",
    scenario: "баня, офис, шоурум, база отдыха или свой сценарий",
    term: "после обсуждения",
    packageLabel: "Base / Comfort / Premium",
    priceLabel: "по запросу",
    image: planHome,
    imageAlt: "Планировка и визуализация модульного дома",
    details: ["планировка под задачу", "подбор комплектации", "образ под участок"],
  },
];

export const packageStackItems: PackageStackItem[] = [
  {
    name: "Base",
    title: "Теплый контур",
    text: "Чистая оболочка дома: конструкция, утепление, окна, двери и внешний образ.",
    metric: "контур",
    caption: "стартовая версия",
    tone: "base",
    details: ["форма дома", "окна и двери", "фасадный образ"],
  },
  {
    name: "Comfort",
    title: "Готово для жизни",
    text: "Практичная комплектация с внутренней отделкой и базовыми решениями для заезда.",
    metric: "баланс",
    caption: "самый понятный выбор",
    tone: "comfort",
    details: ["внутренняя отделка", "санузел и кухня", "свет и розетки"],
  },
  {
    name: "Premium",
    title: "Дом как продукт",
    text: "Больше стекла, терраса, детальная отделка и цельный визуальный образ Ledaks.",
    metric: "под ключ",
    caption: "когда важен вид",
    tone: "premium",
    details: ["терраса", "панорамные окна", "расширенная отделка"],
  },
];
