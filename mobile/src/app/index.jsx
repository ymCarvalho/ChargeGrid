import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";

import { getStations } from "../../services/api";

export default function Home() {
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStations() {
      try {
        const data = await getStations();
        setStations(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadStations();
  }, []);

  if (loading) {
    return (
      <View>
        <ActivityIndicator />
        <Text>Carregando estações...</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>ChargeGrid</Text>

      {stations.map((station) => (
        <View key={station.id}>
          <Text>{station.name}</Text>
          <Text>{station.address}</Text>
          <Text>
            {station.chargersAvailable}/{station.chargersTotal} disponíveis
          </Text>
        </View>
      ))}
    </View>
  );
}