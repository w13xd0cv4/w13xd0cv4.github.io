// Obtener credenciales de la API de Twitter
const TWITTER_API_KEY = "YOUR_API_KEY";
const TWITTER_API_SECRET = "YOUR_API_SECRET";

// Función para obtener los temas populares de Twitter en México
async function getTrends() {
  // Hacer una solicitud a la API de Twitter para obtener los temas populares
  const response = await fetch("https://api.twitter.com/1.1/trends/place.json?id=23424900", {
    headers: {
      "Authorization": `Bearer ${TWITTER_API_KEY}:${TWITTER_API_SECRET}`
    }
  });

  // Procesar la respuesta y obtener los temas populares
  const data = await response.json();
  const trends = data[0].trends;

  // Mostrar los temas populares en la página web
const trendsContainer = document.getElementById("trends");
for (const trend of trends) {
  const trendElement = document.createElement("div");
  trendElement.classList.add("trend");

  const trendName = document.createElement("h2");
  trendName.textContent = trend.name;
  trendElement.appendChild(trendName);

  const trendTweetVolume = document.createElement("p");
  trendTweetVolume.textContent = `Tweet volume: ${trend.tweet_volume}`;
  trendElement.appendChild(trendTweetVolume);

  trendsContainer.appendChild(trendElement);
}
