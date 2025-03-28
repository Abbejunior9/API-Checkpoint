# User List App

Ce projet est une application React qui consomme l'API [JSONPlaceholder](https://jsonplaceholder.typicode.com/) pour afficher une liste d'utilisateurs.

## Installation

Assurez-vous d'avoir [Node.js](https://nodejs.org/) installé sur votre machine.

1. Clonez ce dépôt ou créez un nouveau projet avec `create-react-app` :
   ```bash
   git clone https://github.com/votre-repo/user-list-app.git
   cd user-list-app
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```

## Utilisation

Pour lancer l'application en mode développement, exécutez :

```bash
npm start
```

Ouvrez [http://localhost:3000](http://localhost:3000) pour voir l'application dans votre navigateur.

## Technologies utilisées

- React.js
- Axios (pour les requêtes HTTP)
- Hooks React (`useState`, `useEffect`)
- API JSONPlaceholder

## Fonctionnalités

- Récupération et affichage de la liste des utilisateurs depuis une API externe
- Utilisation des hooks React pour gérer l'état
- Mise en page simple et responsive

## Structure du projet

```
user-list-app/
│-- src/
│   │-- components/
│   │   ├── UserList.js   # Composant affichant la liste des utilisateurs
│   │-- App.js            # Composant principal
│   │-- index.js          # Point d'entrée de l'application
│-- public/
│-- package.json          # Fichier de configuration npm
│-- README.md             # Documentation du projet
```

## API utilisée

L'application utilise l'endpoint suivant pour récupérer les utilisateurs :

```bash
https://jsonplaceholder.typicode.com/users
```

## Auteur

- **Votre Nom**

## Licence

Ce projet est sous licence MIT.
