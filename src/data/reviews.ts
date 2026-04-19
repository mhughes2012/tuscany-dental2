export type Review = {
  id: number;
  author: string;
  avatar?: string;
  rating: number;
  date: string;
  text: string;
};

export type Stats = {
  averageRating: number;
  totalReviews: number;
  categories: Array<{
    label: string;
    count: number;
  }>;
};

export const reviews: Review[] = [
  {
    id: 1,
    author: "Tammy Rossetti",
    rating: 5,
    date: "a month ago",
    text: "I just had my first appointment here and everyone from first to last are excellent. It was a very positive experience. They are thorough and knowledgeable. Dr. Saffray is helping me with a very painful issue and I'm grateful for that as well.",
  },
  {
    id: 2,
    author: "AMY VANDERMEULEN",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocJsxgeXl9R2lxrIVXMc96pJvXoDWk6i0fH4q7QqJyP88t8JSw=w54-h54-p-rp-mo-br100",
    rating: 5,
    date: "5 months ago",
    text: "Excellent appointment today. Not a big fan of going to the dentist. Have a serious phobia of going to the dentist. Was well taken care of by Dr. Braver and his assistant Sheri. Everything was explained before it was completed and I felt very safe and comfortable.",
  },
  {
    id: 3,
    author: "Michelle Gaudet",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjUMU3VpgIXR9tLgQRK_4RAAycspvGj-HEIaMLaeHhUO45W8_JeZ=w54-h54-p-rp-mo-ba2-br100",
    rating: 5,
    date: "5 months ago",
    text: "Great experience with the team as usual! Have been going here since we moved to Calgary about 20 years ago. I love that they also offer to just schedule in my benefits deadline so it helps to keep me regular!",
  },
  {
    id: 4,
    author: "Chelsea Phillips",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocJGcvjJiN5902j79J7SW-l1TFZ7C47A9Ihtk0WOxhenbL1v_SFx=w54-h54-p-rp-mo-br100",
    rating: 5,
    date: "4 months ago",
    text: "I had to go in for an extraction when I had a crown fall out and Dr. Brauer was seriously amazing. He walked me through the whole process and was so calm and comforting.",
  },
  {
    id: 5,
    author: "Jen Kirnbauer",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocKbLHbOvD9fn80tIoS_fXRBElHdFBajUZamPFNAN7fiBGwzwQ=w54-h54-p-rp-mo-br100",
    rating: 5,
    date: "5 months ago",
    text: "Tuscany Dental is fantastic! The staff are welcoming, professional, and always make you feel comfortable from the moment you walk in. Dr. Brauer takes his time to explain everything clearly and is very good with kids. Highly recommend!",
  },
  {
    id: 6,
    author: "Anne Rinke",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocKr_P34xd-Y1C558mEkocQpWIIP1wZ3THHzN6mRHKl5NLK_QA=w54-h54-p-rp-mo-br100",
    rating: 5,
    date: "4 months ago",
    text: "The best dental visit I ever had! Sherry was so friendly and explained all the procedures. Then gave me the end cost. Nothing hidden. Honesty and integrity from Dr Cam and office staff. Thank you!",
  },
  {
    id: 7,
    author: "Eileen Kelly",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjV5Comz3O-wgZMBQC0Qo_RbjRf7veQRCsejNozAe-qFK9ydNcc=w54-h54-p-rp-mo-br100",
    rating: 5,
    date: "3 months ago",
    text: "Dr Cam and his lovely assistant are very caring, always checking to make sure I’m doing ok. Quick and thorough. Excellent work!!",
  },
  {
    id: 8,
    author: "Mark Ball",
    rating: 5,
    date: "3 months ago",
    text: "Two days before Christmas and a vacation, I experienced tooth pain. Tuscany Dental was able to squeeze me in for an appointment. Dr. J. analyzed my situation and gave me peace of mind that I did not need a root canal while away.",
  },
  {
    id: 9,
    author: "jane",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocL7VsLn9NLWfbIc98umupJk5uQz9uATOTbRhti_1RsBA6bn2Q=w54-h54-p-rp-mo-br100",
    rating: 5,
    date: "7 months ago",
    text: "If you are looking for a new dentist I highly recommend Dr. Brauer and his team. During my initial consultation he was friendly and professional, and he took the time to address any questions I had.",
  },
  {
    id: 10,
    author: "Nelson Gonzales",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjXdX3PQszPo8OtpBdlrl5K1Wlpq4sjbYGrJfV8A_bL2SyAIzGz56Q=w54-h54-p-rp-mo-br100",
    rating: 5,
    date: "3 months ago",
    text: "Tuscany Dental has always been accommodating when I’ve needed them. Dr Brauer is efficient, knowledgeable and appreciative. I have no hesitation is recommending Dr Brauer to anyone.",
  },
];

export const stats: Stats = {
  averageRating: 4.8,
  totalReviews: 636,
  categories: [
    { label: "hygienist", count: 54 },
    { label: "friendly staff", count: 160 },
    { label: "invisalign treatment", count: 3 },
    { label: "wisdom teeth removal", count: 3 },
    { label: "caring staff", count: 59 },
    { label: "welcoming atmosphere", count: 19 },
    { label: "down to earth dentist", count: 2 },
    { label: "direct billing", count: 3 },
    { label: "procedure explanation", count: 5 },
    { label: "toothache treatment", count: 5 },
  ],
};
