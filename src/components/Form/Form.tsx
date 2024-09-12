import { ChangeEvent, FormEvent, useState } from "react";
import { countries } from "../../data/countries";
import style from "./Form.module.css";
import type { SearchType } from "../../types";
import Alert from "../Alert/Alert";

type FormProps = {
  fetchWeather: (search: SearchType) => Promise<void>
} 

export default function Form({fetchWeather}: FormProps) {
  const [search, setSearch] = useState<SearchType>({
    city: "",
    country: "",
  });

  const [alert, setAlert] = useState('');

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target as
      | HTMLInputElement
      | HTMLSelectElement;
    setSearch({ ...search, [name]: value });
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (Object.values(search).includes("")) {
      setAlert('Todos los campos son obligatorios');
      return;
    }
    fetchWeather(search)
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      {alert ?? <Alert >{alert} </Alert>}
      <div className={style.field}>
        <label htmlFor="city">Ciudad: </label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Ciudad"
          value={search.city}
          onChange={handleChange}
        />
      </div>
      <div className={style.field}>
        <label htmlFor="country">País: </label>
        <select
          id="country"
          value={search.country}
          name="country"
          onChange={handleChange}
        >
          <option value="">--- Seleccione un País ---</option>
          {countries.map((country) => (
            <option value={country.code} key={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <input className={style.submit} type="submit" value="Consultar Clima" />
    </form>
  );
}
