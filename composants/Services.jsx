const ServicesList = [
  {
    nom: "Développement Web",
    description: "Création de site web",
  },
  {
    nom: "Développement Mobile",
    description: "Création des applications mobiles",
  },
];

const Services = () => {
  return (
    <div>
      {ServicesList.map((service, index) => (
        <div key={index}>
          <h3 className="text-2xl text-gray-600">{service.nom}</h3>
          <p className="text-gray-400">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
