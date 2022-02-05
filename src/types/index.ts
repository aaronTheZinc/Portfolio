export interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
  secondaryImages?: []
}
export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  skills: string[];
  profileImage: string;
  tools: string[];
  description: string;
  major: string;
  projects: Project[];
  links: {
    title: string,
    uri: string
  }[]
}
