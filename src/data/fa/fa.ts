// src/data/data.ts
import designThinking from "../data/image/designthinking.webp";
import img1 from "../data/image/1.webp";
import img2 from "../data/image/2.avif";
import img3 from "../data/image/3.webp";
import mark1 from "../data/image/mark-1.avif";
import mark3 from "../data/image/mark-3.avif";
import mark4 from "../data/image/mark-4.avif";
import mark5 from "../data/image/mark-5.jpeg";
import mark6 from "../data/image/mark-6.webp";

export interface IData {
  id: number;
  titlePage: string;
  Description: string;
  image: string;
  Signup: string;
  login: string;
  titledesignbox: string;
  Descriptionbox: string;
  Home: string;
  Readmore: string;
  img1: string;
  branding: string;
  captionImg1: string;
  img2: string;
  captionImg2: string;
  img3: string;
  captionImg3: string;
  branding2: string;
  pageNotFount: string;
  Markting: string;
  imgMarkting1: string;
  captinimgMark: string;
  imgMarkting3: string;
  captinimgMark2: string;
  captinimgMark3: string;
  imgMarkting4: string;
  captinimgMark4: string;
  imgMarkting5: string;
  captinimgMark5: string;
  DigitalMarketing: string;
  imgMarkting6: string;
  Business: string;
  captinimgMark6: string;
  techStack: string;
  titleTow: string;
  headerTow: string;
  desTow: string;
  desAll: string;
  Login: string;
}

export const fa: IData = {
  id: 1,
  titlePage: "اموزش",
  Description: "به اهداف طراحی خود با مقالات و منابع جامع Canva دست پیدا کنید.",
  image: designThinking,
  Signup: "ثبت نام",
  login: "ورود",
  titledesignbox: "الگوی طراحی",
  Descriptionbox: "طراحی تفکر: یاد بگیرید چگونه مانند یک طراح مسائل را حل کنید",
  Home: "صفحه اصلی",
  Readmore: "بیشتر بخوانید",
  img1: img1,
  branding: "برندسازی",
  captionImg1: "مدیریت برند چیست؟ و چگونه می‌توان آن را به‌خوبی انجام داد",
  img2: img2,
  captionImg2: "۵ درس درباره‌ی فرایندهای طراحی مؤثر از تیم‌هایی که از Canva استفاده می‌کنند.",
  img3: img3,
  captionImg3: "برندسازی: نکات کاربردی از تیم‌های طراحی و برند Canva",
  branding2: "برندسازی",
  pageNotFount: "صفحه مورد نظر یافت نشد",
  Markting: "بازاریابی",
  imgMarkting1: mark1,
  captinimgMark: "۴ روش که هوش مصنوعی به ایجاد کمپین‌های بازاریابی مؤثر کمک می‌کند",
  imgMarkting3: mark3,
  captinimgMark2: "بازاریابی ۲.۰: بازاریابی مؤثر در عصر شبکه‌های اجتماعی و هوش مصنوعی",
  captinimgMark3: "چگونه روند تولید محتوای تیم خود را سریع‌تر کنید",
  imgMarkting4: mark4,
  captinimgMark4: "راهنمای سریع و آسان برای ایده‌نویسی گروهی با کانوا",
  imgMarkting5: mark5,
  captinimgMark5: "چگونه کلاژهای عکس را برای شبکه‌های اجتماعی و چاپ بهینه کنیم",
  DigitalMarketing: "بازاریابی دیجیتال",
  imgMarkting6: mark6,
  Business: "تجارت",
  captinimgMark6: "بهترین فعالیت‌های شروع گفتگو در رویدادهای شبکه‌سازی",
  techStack: "ساخته شده با این ابزار",
  titleTow: "کسب و کار",
  headerTow: "چگونه فرایند تفکر طراحی می‌تواند مشکلات تیم را حل کند",
  desTow: "با روش‌شناسی تفکر طراحی آشنا شوید و بیاموزید چگونه می‌توانید از آن برای حل چالش‌هایی که تیم شما با آن روبه‌رو می‌شود استفاده کنید.",
  desAll: "شاید آن‌ها فقط از وجود محصول آگاه نباشند. شما ممکن است تلاش‌های بازاریابی خود را در آن مناطق افزایش دهید، نمایندگان فروش جدید استخدام کنید یا تخفیف ارائه دهید. اما در این صورت ممکن است زمان، پول و انرژی خود را صرف روشی کنید که دلیل روشنی پشت آن وجود ندارد. در عوض، از **تفکر طراحی** استفاده کنید. تفکر طراحی روشی متفاوت برای برخورد با مسائل است که به شما کمک می‌کند بفهمید چرا محصول در منطقه‌ای خاص فروش نمی‌رود و چه کارهایی می‌توانید برای تغییر این وضعیت انجام دهید.",
  Login: "ثبت نام",
};
