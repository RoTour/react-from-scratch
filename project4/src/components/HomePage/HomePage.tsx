import { FC } from 'react';
import Title from '../Title/Title';
import castleImg from "../../assets/images/chateau.jpg"

type HomePageProps = {}

const HomePage: FC<HomePageProps> = () => {
  return <>
    <div className={"container"}>
      <Title className={"mt-2 border rounded "}>Bienvenue sur le site de l'Ariège !</Title>
      <p>Le site vous aidant à trouver les établissements publics de l'Ariège </p>
      <img src={castleImg} alt={"Chateau"} className={"img-fluid"}/>
    </div>

  </>;
};

export default HomePage;
