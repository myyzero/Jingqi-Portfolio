import enPro1 from "../../materials/enPro_1.png";
import enPro2 from "../../materials/enPro_2.png";
import enPro3 from "../../materials/enPro_3.png";
import enPro4 from "../../materials/enPro_4.png";
import enPro5 from "../../materials/enPro_5.png";

export type EnvCarouselSlide = {
  title: string;
  image: string;
};

/** Pop-up Museum — 3D Modelling & Environment Design carousel (10 slides) */
export const popupMuseumEnvCarouselSlides: EnvCarouselSlide[] = [
  { title: "Seychellophryne Frog", image: enPro1 },
  { title: "Cowfish", image: enPro2 },
  { title: "Carved ebony vessel", image: enPro3 },
  { title: "Pottery 'tulip beaker'", image: enPro4 },
  { title: "Limestone Frog", image: enPro5 },
  { title: "Pipistrellus", image: enPro3 },
  { title: "Female Figurine", image: enPro4 },
  { title: "Sandstone Lion", image: enPro5 },
  { title: "Sea Sponge", image: enPro1 },
  { title: "Amoured Fish", image: enPro2 },
];
