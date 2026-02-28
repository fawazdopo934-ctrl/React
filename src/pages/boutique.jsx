import Produits from "../../produits.json";
// const Produits = [
//   {
//     id: "1",
//     nom: "PC Dell",
//     description: "PC Dell Core i5 RAM 8gb",
//     prix_unitaire: 120000,
//     image: "menu-4.jpg",
//   },
//   {
//     id: "2",
//     nom: "PC Lenovo",
//     description: "PC Lenovo Core i5 RAM 8gb",
//     prix_unitaire: 120000,
//     image: "menu-7.jpg",
//   },
// ];
const Boutique = () => {
  console.log("Total produits : ", Produits.length);
  return (
    <>
      <div className="mt-7">
        <h2 className="text-3xl font-bold">Boutique</h2>
      </div>
      {Produits.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {/* parcourirs les produits */}
          {Produits.map((produit) => (
            <div key={produit.id} className="shadow-2xl rounded-2xl">
              <img src="../../images/menu-4.jpg" className="rounded-2xl" />
              <div className="p-2">
                <h1 className="text-2xl">{produit.nom}</h1>
                <p className="text-3xl font-bold">{produit.prix_unitaire}F</p>
                <p>{produit.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Pas de produits enregistré</p>
      )}
    </>
  );
};

export default Boutique;
