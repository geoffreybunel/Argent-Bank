# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Endpoints : 

- Voir les transactions
  Méthode HTTP : GET
  Route : /api/v1/transactions
  Description : Voir les transactions
  Paramètres : 
  Réponses possibles : 200
                       401
                       500

- Voir les détails d'une transaction
  Méthode HTTP : GET
  Route : /api/v1/transactions/{transactionsId}
  Description : Voir les détails d'une transaction
  Paramètres : transactionsId
  Réponses possibles : 200
                       400
                       401
                       404
                       500

- Modifier une transaction (catégorie/note)
  Méthode HTTP : PUT
  Route : /api/v1/transactions/{transactionId}
  Description : Modifier une transaction (catégorie/note)
  Paramètres : category, note
  Réponses possibles : 200
                       400
                       401
                       404
                       500


200:	Succès
400:	Requête invalide
401:	Non authentifié
404:	Transaction introuvable
500:	Erreur serveur