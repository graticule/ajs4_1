export default function getHealthStatus(player) {
  const { health } = player;

  if (health > 50) {
    return 'healthy';
  } if (health >= 15) {
    return 'wounded';
  }
  return 'critical';
}
