const Test = () => {
  const daysWeek = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];
  console.log(daysWeek.length);

  return (
    <>
      <h2>Jours de la Semaine</h2>
      <ul>
        {daysWeek.map((jour, index) => (
          <li key={index} onClick={() => console.log(jour)}>
            {jour}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Test;
