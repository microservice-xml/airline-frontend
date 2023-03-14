import Section from "./Section";

export default interface ArticleItem {
  id: string;
  title: string;
  author: string;
  slug: string;
  subHeader: string;
  description: string;
  sections: Section[];
}
