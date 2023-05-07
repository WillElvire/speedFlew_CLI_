# language: fr
Fonctionnalité: Utilisateur creer un projet speedFlew

Scénario: Creer un projet speedFlew a travers le CLI
    L'utilisateur renseigne un commande avec les arguments :
        | sp new |
        | project name |
    Quand l'utilisateur donne le nom de son projet
    Alors il choisi les configurations de ce projet :
        | Framework css (taillwind ou bootstrap ) |
        | Framework de composants a utiliser |