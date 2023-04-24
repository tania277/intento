const [CitiesData, setCitiesData] = useState(0);
  const [Data, setData] = useState([]);
  const getData = async () => {
    const city = cities[CitiesData].name;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a7e19e7c3d91c685e79c56b6f9d75ffb&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return { city, temperature: data.main.temp, feels_like: data.main.feels_like, humidity: data.main.humidity, pressure: data.main.pressure, wind: data.wind.speed, clouds: data.clouds.all, visibility: data.visibility };
  };

  const DataSyncShow = async () => { 
    const newData = await getData();
    setData([...Data, newData]); 
    setCitiesData(CitiesData + 1);
  };

  useEffect(() => {
    onMessage(messaging, message => {
      console.log("Tu mensaje: ", message);
      toast(message.notification.title);
    });
    DataSyncShow();
  }, [CitiesData]);