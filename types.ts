export type ProjectCardTypes = {
  headline: string;
  description: string;
  gitLink?: string;
  projectImage: string;
  projectLink?: string;
  employerLink?: string;
  employer?: string;
};

export type JobTypes = {
  company: string;
  location: string;
  start: string;
  end: string;
  position: string;
  tasks: string;
  clients?: string;
  techstack?: string;
};

export type IconBarTypes = {
  links: string[];
  headline: string;
  className?: string;
};
