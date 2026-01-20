import { z } from "zod";

export const aboutSchema = z.object({
  "about.hero.title": z.string(),
  "about.hero.subtitle": z.string(),
  "about.mission.title": z.string(),
  "about.mission.description": z.string(),
  "about.story.title": z.string(),
  "about.story.paragraph1": z.string(),
  "about.story.paragraph2": z.string(),
  "about.story.paragraph3": z.string(),
  "about.values.title": z.string(),
  "about.values.authenticity": z.string(),
  "about.values.authenticity.description": z.string(),
  "about.values.practicality": z.string(),
  "about.values.practicality.description": z.string(),
  "about.values.inclusivity": z.string(),
  "about.values.inclusivity.description": z.string(),
  "about.values.continuous": z.string(),
  "about.values.continuous.description": z.string(),
  "about.team.title": z.string(),
  "about.team.description": z.string(),
});

export type AboutSchema = z.infer<typeof aboutSchema>;
