import _ from "lodash";
import { loremIpsum } from "react-lorem-ipsum";

export const reviewerData = _.times(_.random(2, 30)).map((el, i) => ({
  id: `reviewer-${i}`,
  name: loremIpsum({
    avgWordsPerSentence: 2,
    avgSentencesPerParagraph: 1,
    random: true,
  }),
  comment: loremIpsum({
    avgWordsPerSentence: 2,
    avgSentencesPerParagraph: 1,
    random: true,
  }),
  rating: _.random(1, 5, true),
  image: `/user-images/user-${[_.random(0, 11)]}.jpg`,
}));
