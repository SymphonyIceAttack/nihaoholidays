import { z } from "zod";

export const navSchema = z.object({
  "common.nav.home": z.string(),
  "common.nav.food": z.string(),
  "common.nav.tool": z.string(),
  "common.nav.blog": z.string(),
  "common.nav.about": z.string(),
  "common.nav.contact": z.string(),
  "common.nav.privacy": z.string(),
  "common.nav.terms": z.string(),
});

export const breadcrumbSchema = z.object({
  "breadcrumb.home": z.string(),
  "breadcrumb.blog": z.string(),
  "breadcrumb.posts": z.string(),
  "breadcrumb.food": z.string(),
  "breadcrumb.culture": z.string(),
  "breadcrumb.tool": z.string(),
  "breadcrumb.learn": z.string(),
  "breadcrumb.quiz": z.string(),
  "breadcrumb.disclaimer": z.string(),
  "breadcrumb.subscribe": z.string(),
  "breadcrumb.menu": z.string(),
  "breadcrumb.privacy": z.string(),
  "breadcrumb.terms": z.string(),
  "breadcrumb.about": z.string(),
  "breadcrumb.contact": z.string(),
});

export const commonSchema = z.object({
  ...navSchema.shape,
  ...breadcrumbSchema.shape,
  "page.title.about": z.string(),
  "page.title.contact": z.string(),
  "page.title.privacy": z.string(),
  "page.title.terms": z.string(),
  "page.title.food": z.string(),
  "page.title.culture": z.string(),
  "page.title.tool": z.string(),
  "page.title.learn": z.string(),
  "page.title.quiz": z.string(),
  "page.title.disclaimer": z.string(),
  "page.title.subscribe": z.string(),
  "page.title.menu": z.string(),
  "common.learnMore": z.string(),
  "common.exploreCulture": z.string(),
  "common.playQuiz": z.string(),
  "common.tools": z.string(),
  // Header translations
  "header.start": z.string(),
  "header.explore": z.string(),
  "header.about": z.string(),
  "header.legal": z.string(),
  "header.closeMenu": z.string(),
  "header.openMenu": z.string(),
});

export type CommonSchema = z.infer<typeof commonSchema>;
