export interface FirstScreen {
  slider: FirstScreenSLider[];
  networks: Network[];
}

export interface FirstScreenSLider {
  id: string;
  title: string;
  img: string;
}

export interface Network {
  id: string;
  icon: string;
  href: string;
}
