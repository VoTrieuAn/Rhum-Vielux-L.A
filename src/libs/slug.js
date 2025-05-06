import slugify from "slugify";

export const normalized = (str, lower = true, locale = "vi") =>
  slugify(str, {
    lower,
    locale,
  });
