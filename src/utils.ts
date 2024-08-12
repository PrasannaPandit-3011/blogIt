export const URL = (num: number) => {
  return `https://api-prod-minimal-v510.vercel.app/assets/images/cover/cover_${
    num > 24 ? 10 : num
  }.jpg`;
};

export const AuthorURL = (num: number) => {
  return `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${num}.jpg`;
};

type Genre = Record<string, string>;

export const genre: Genre = {
  Tech: "info",
  Food: "success",
  Social: "error",
  Current_Event: "warning",
};
