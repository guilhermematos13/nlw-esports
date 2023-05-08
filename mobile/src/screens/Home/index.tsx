import React from "react";
import { View, Image } from "react-native";
import logoImg from "../../assets/logo-nlw-esports.png";

import { GAMES } from "../../utils/games";
import { styles } from "./styles";
import { Heading } from "../../components/Heading";
import { GameCard } from "../../components/GameCard";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <GameCard data={GAMES[0]} />
    </View>
  );
}
