export interface Project {
  title: string;
  desription: string;
  image: string;
  link?: string;
}
export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  skills: string[];
  profileImage: string;
  tools: string[];
  description: string;
  major: string;
  projects: Project[];
}
