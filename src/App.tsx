import styles from "./App.module.css";
import Form from "./components/Form/Form";
import Spinner from "./components/Spinner/Spinner";
import WeatherDetail from "./components/Weather/WeatherDetail";
import useWeather from "./hook/useWeather";
function App() {
  const { weather, loading, fetchWeather, hasWeatherData } = useWeather();
  return (
    <>
      <h1 className={styles.title}>Buscado de clima</h1>
      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />
        {loading && <Spinner />}
        {hasWeatherData && <WeatherDetail weather={weather} />}
      </div>
    </>
  );
}

export default App;
