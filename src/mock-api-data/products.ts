import _ from "lodash";
import { loremIpsum } from "react-lorem-ipsum";
export const productImages = [
  "cheese",
  "fabrics",
  "knitting",
  "make-up-1",
  "make-up-2",
  "make-up-3",
  "milk",
  "nails",
  "speaker",
  "tech",
];

export const productData = _.times(_.random(2, 30)).map((el, i) => ({
  id: i,
  title: loremIpsum({
    avgWordsPerSentence: 3,
    avgSentencesPerParagraph: 1,
  }),
  price: _.round(_.random(10, 150, true), 2),
  description: loremIpsum({ avgSentencesPerParagraph: 3 }),
  rating: _.random(0, 5, true),
  image: `/product-images/${productImages[_.random(0, 10)]}.jpg`,
}));
