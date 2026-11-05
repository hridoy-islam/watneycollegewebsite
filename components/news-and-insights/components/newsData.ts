export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  publishedDate: string;
  author: string;
  category: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    slug: "level-2-november-cohort-100-percent-success-rate",
    title: "Level 2 November Cohort Achieves 100% Success Rate",
    excerpt:
      "Watney College is pleased to announce the publication of results for the November cohort of the Level 2 Adult Social Care Certificate Course, achieving an outstanding 100% success rate.",
    content: `Watney College is pleased to announce the publication of results for the November cohort of the Level 2 Adult Social Care Certificate Course.

The cohort achieved an outstanding 100% success rate, with all 43 registered students successfully completing the programme. This important milestone reflects the hard work of our students and the commitment of our teaching and academic support teams.

Student feedback has also been highly positive, particularly regarding the quality of teaching, academic support and flexible delivery of the programme. Ninety per cent of students reported that they were satisfied with the support and guidance provided by teaching staff. Watney College is proud of these results and remains committed to maintaining consistently high standards across future cohorts.

Students should have received an email from the College Administration Team confirming their results. For further information or queries regarding results, please contact admissions@watneycollege.co.uk.

**Progression to Level 3**

A progression route to the Level 3 Diploma in Adult Social Care course is now available to eligible students who have successfully completed the Level 2 programme.

The Academic Team will soon provide further information about the Level 3 programme, including details of an online progression webinar. The webinar will cover the programme structure, entry requirements, progression opportunities and enrolment process.

Students are advised to monitor their inboxes and the Watney College website for further updates. Those interested in progressing to Level 3 should email admissions@watneycollege.co.uk to register their interest.

We congratulate all students on their hard work, dedication and achievements throughout their studies. We look forward to welcoming many of our successful students back to Watney College for the Autumn 2026 term.`,
    image: "/watney.png",
    publishedDate: "2026-07-27",
    author: "Watney College",
    category: "Academic Success",
  },
];

export function getNewsArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.slug === slug);
}
