import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  // Utilisation de useState pour stocker la liste des utilisateurs
  const [listOfUser, setListOfUser] = useState([]);

  // Utilisation de useEffect pour récupérer les données de l'API lorsque le composant est monté
  useEffect(() => {
    // Effectuer la requête GET avec axios
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // Mettre à jour l'état listOfUser avec les données de l'API
        setListOfUser(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, []); // Le tableau vide [] assure que l'effet est exécuté une seule fois, au montage du composant

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {/* Mappage de la liste des utilisateurs pour l'afficher */}
        {listOfUser.map((user) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Téléphone: {user.phone}</p>
            <p>Site: {user.website}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
