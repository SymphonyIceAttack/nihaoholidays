import { type LanguageType, translate } from "./translations";

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function getBlogPostBreadcrumb(
  lang: LanguageType,
  slug: string,
  title: string,
): BreadcrumbItem[] {
  const t = (key: string) => translate(key, lang);
  return [
    { name: t("breadcrumb.home"), url: `/${lang}` },
    { name: t("breadcrumb.posts"), url: `/${lang}/posts` },
    { name: title, url: `/${lang}/posts/${slug}` },
  ];
}

export function getFoodListBreadcrumb(lang: LanguageType): BreadcrumbItem[] {
  const t = (key: string) => translate(key, lang);
  return [
    { name: t("breadcrumb.home"), url: `/${lang}` },
    { name: t("breadcrumb.food"), url: `/${lang}/food` },
  ];
}

export function getFoodDetailBreadcrumb(
  lang: LanguageType,
  foodId: string,
  title: string,
): BreadcrumbItem[] {
  const t = (key: string) => translate(key, lang);
  return [
    { name: t("breadcrumb.home"), url: `/${lang}` },
    { name: t("breadcrumb.food"), url: `/${lang}/food` },
    { name: title, url: `/${lang}/food/${foodId}` },
  ];
}

export function getFestivalBreadcrumb(
  lang: LanguageType,
  festivalId: string,
  title: string,
): BreadcrumbItem[] {
  const t = (key: string) => translate(key, lang);
  return [
    { name: t("breadcrumb.home"), url: `/${lang}` },
    { name: t("breadcrumb.culture"), url: `/${lang}/culture` },
    { name: title, url: `/${lang}/culture/${festivalId}` },
  ];
}

export function getCultureBreadcrumb(lang: LanguageType): BreadcrumbItem[] {
  const t = (key: string) => translate(key, lang);
  return [
    { name: t("breadcrumb.home"), url: `/${lang}` },
    { name: t("breadcrumb.culture"), url: `/${lang}/culture` },
  ];
}

export function getToolListBreadcrumb(lang: LanguageType): BreadcrumbItem[] {
  const t = (key: string) => translate(key, lang);
  return [
    { name: t("breadcrumb.home"), url: `/${lang}` },
    { name: t("breadcrumb.tool"), url: `/${lang}/tool` },
  ];
}

export function getToolDetailBreadcrumb(
  lang: LanguageType,
  toolId: string,
  title: string,
): BreadcrumbItem[] {
  const t = (key: string) => translate(key, lang);
  return [
    { name: t("breadcrumb.home"), url: `/${lang}` },
    { name: t("breadcrumb.tool"), url: `/${lang}/tool` },
    { name: title, url: `/${lang}/tool/${toolId}` },
  ];
}

export function getLearnBreadcrumb(lang: LanguageType): BreadcrumbItem[] {
  const t = (key: string) => translate(key, lang);
  return [
    { name: t("breadcrumb.home"), url: `/${lang}` },
    { name: t("breadcrumb.learn"), url: `/${lang}/learn` },
  ];
}

export function getQuizBreadcrumb(
  lang: LanguageType,
  festivalId: string,
  title: string,
): BreadcrumbItem[] {
  const t = (key: string) => translate(key, lang);
  return [
    { name: t("breadcrumb.home"), url: `/${lang}` },
    { name: t("breadcrumb.quiz"), url: `/${lang}/quiz` },
    { name: title, url: `/${lang}/quiz/${festivalId}` },
  ];
}

export function getQuizListBreadcrumb(lang: LanguageType): BreadcrumbItem[] {
  const t = (key: string) => translate(key, lang);
  return [
    { name: t("breadcrumb.home"), url: `/${lang}` },
    { name: t("breadcrumb.quiz"), url: `/${lang}/quiz` },
  ];
}

export function getAboutBreadcrumb(lang: LanguageType): BreadcrumbItem[] {
  const t = (key: string) => translate(key, lang);
  return [
    { name: t("breadcrumb.home"), url: `/${lang}` },
    { name: t("breadcrumb.about"), url: `/${lang}/about` },
  ];
}

export function getContactBreadcrumb(lang: LanguageType): BreadcrumbItem[] {
  const t = (key: string) => translate(key, lang);
  return [
    { name: t("breadcrumb.home"), url: `/${lang}` },
    { name: t("breadcrumb.contact"), url: `/${lang}/contact` },
  ];
}

export function getPrivacyBreadcrumb(lang: LanguageType): BreadcrumbItem[] {
  const t = (key: string) => translate(key, lang);
  return [
    { name: t("breadcrumb.home"), url: `/${lang}` },
    { name: t("breadcrumb.privacy"), url: `/${lang}/privacy` },
  ];
}

export function getTermsBreadcrumb(lang: LanguageType): BreadcrumbItem[] {
  const t = (key: string) => translate(key, lang);
  return [
    { name: t("breadcrumb.home"), url: `/${lang}` },
    { name: t("breadcrumb.terms"), url: `/${lang}/terms` },
  ];
}

export function getDisclaimerBreadcrumb(lang: LanguageType): BreadcrumbItem[] {
  const t = (key: string) => translate(key, lang);
  return [
    { name: t("breadcrumb.home"), url: `/${lang}` },
    { name: t("breadcrumb.disclaimer"), url: `/${lang}/disclaimer` },
  ];
}

export function getSubscribeBreadcrumb(lang: LanguageType): BreadcrumbItem[] {
  const t = (key: string) => translate(key, lang);
  return [
    { name: t("breadcrumb.home"), url: `/${lang}` },
    { name: t("breadcrumb.subscribe"), url: `/${lang}/subscribe` },
  ];
}

export function getMenuBreadcrumb(lang: LanguageType): BreadcrumbItem[] {
  const t = (key: string) => translate(key, lang);
  return [
    { name: t("breadcrumb.home"), url: `/${lang}` },
    { name: t("breadcrumb.menu"), url: `/${lang}/menu` },
  ];
}

export function getPostsListBreadcrumb(lang: LanguageType): BreadcrumbItem[] {
  const t = (key: string) => translate(key, lang);
  return [
    { name: t("breadcrumb.home"), url: `/${lang}` },
    { name: t("breadcrumb.posts"), url: `/${lang}/posts` },
  ];
}
