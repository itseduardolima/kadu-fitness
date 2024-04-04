import service01 from "../../assets/images/service-01.jpg";
import service02 from "../../assets/images/service-02.jpg";
import service03 from "../../assets/images/service-03.jpg";
import service04 from "../../assets/images/service-04.jpg";
import service05 from "../../assets/images/service-05.jpg";
import service06 from "../../assets/images/service-06.jpg";

interface Service {
  title: string;
  description: string;
  image: string;
}

export const servicesData: Service[] = [
  {
    title: "Treinamento com pesos",
    description: "Fortaleça seus músculos com musculação.",
    image: service02,
  },
  {
    title: "CrossFit",
    description: "CrossFit é um treino de condicionamento composto por exercícios funcionais de alta intensidade.",
    image: service01,
  },
  {
    title: "Pilates",
    description: "Os exercícios de Pilates desenvolvem o corpo através de um esforço muscular constante.",
    image: service03,
  },
  {
    title: "Ioga",
    description: "A ioga moderna ajuda a aumentar o bem-estar físico e mental por meio de exercícios.",
    image: service04,
  },
  {
    title: "Boxe",
    description: "Os treinos de boxe incluem exercícios intensos que visam fortalecer todo o corpo.",
    image: service05,
  },
  {
    title: "Aeróbica",
    description: "A aeróbica é uma ótima maneira de aumentar a resistência por meio de um treinamento simples, mas eficaz.",
    image: service06,
  },
  
];