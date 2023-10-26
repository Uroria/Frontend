<img src="https://cdn.discordapp.com/attachments/994608594236485692/1167223021803671582/App_Logo-FE.png?ex=654d5826&is=653ae326&hm=74a96b87d1c918c266af258a98f285e4984cb3dbc1f24a489fd2bc96c22aa3a3&" alt="drawing" width="150"/>

# The Frontend

[![Website](https://img.shields.io/badge/website-%23.svg?style=for-the-badge&color=%232D2D2D&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNjQwIDUxMiI+PCEtLSEgRm9udCBBd2Vzb21lIFBybyA2LjQuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMyBGb250aWNvbnMsIEluYy4gLS0+PGRlZnM+PHN0eWxlPi5mYS1zZWNvbmRhcnl7b3BhY2l0eTowLjQ7ZmlsbDojNmNlZmYwO30uZmEtcHJpbWFyeXtmaWxsOiM2Y2VmZjA7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzA0IDY0YTE0NCAxNDQgMCAxIDAgMCAyODggMTQ0IDE0NCAwIDEgMCAwLTI4OHpNMTExIDM2N2MtOS40IDkuNC05LjQgMjQuNiAwIDMzLjlzMjQuNiA5LjQgMzMuOSAwbDE4LjUtMTguNWMzNC4zIDI3LjcgNzQuOSA0My44IDExNi41IDQ4LjNWNDY0SDE4NGMtMTMuMyAwLTI0IDEwLjctMjQgMjRzMTAuNyAyNCAyNCAyNEg0MjRjMTMuMyAwIDI0LTEwLjcgMjQtMjRzLTEwLjctMjQtMjQtMjRIMzI4VjQzMC43YzQ5LjEtNS4zIDk2LjgtMjYuNyAxMzQuNC02NC4zYzgxLjctODEuNyA4Ny4xLTIxMSAxNi4xLTI5OC45TDQ5NyA0OWM5LjQtOS40IDkuNC0yNC42IDAtMzMuOXMtMjQuNi05LjQtMzMuOSAwTDQyOC41IDQ5LjZjLTkuNCA5LjQtOS40IDI0LjYgMCAzMy45YzY4LjcgNjguNyA2OC43IDE4MC4yIDAgMjQ4LjlzLTE4MC4yIDY4LjctMjQ4LjkgMGMtOS40LTkuNC0yNC42LTkuNC0zMy45IDBMMTExIDM2N3oiLz48cGF0aCBjbGFzcz0iZmEtc2Vjb25kYXJ5IiBkPSIiLz48L3N2Zz4=)](https://uroria.com)
[![Discord](https://img.shields.io/badge/discord-%23.svg?label=&style=for-the-badge&logo=discord&logoColor=%236CEFF0&color=%232D2D2D)](https://dc.uroria.com)
[![Twitter](https://img.shields.io/badge/@urorianetwork-%23.svg?style=for-the-badge&logo=x&logoColor=%236CEFF0&color=%232D2D2D)](https://twitter.uroria.com)
[![YouTube](https://img.shields.io/badge/@uroria-%23.svg?style=for-the-badge&logo=youtube&logoColor=%236CEFF0&color=%232D2D2D)](https://yt.uroria.com)

This is [the Website](https://www.uroria.com)!

## An Uroria Project
**This is an official Uroria project**, *exclusively intended* for Uroria, and therefore,
support for other use cases is not provided.
However, we welcome _pull requests_, and _contributing_ in this manner can lead to earning certain **in-game rewards**.
This feature will come soon, so stay tuned and **join [our Discord](https://dc.uroria.com)** to **not miss any news**.

# Getting Started

To start the next and the CMS (Strapi) in the dev environment just run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the current frontend.
Open [http://localhost:1337](http://localhost:1337) with your browser to open the CMS.

## NextJS + ReactJS Frontend
The Frontend is developed in ReactJS as a base plugged on a NextJS server base.
The styling is mostly done in Scss with some bootstrap for layouts.
We differentiate between macro and micro components inside our frontend, and therefore you will find those two folders inside the src folder.
The typical folder structure for components is a name folder and the styling and the tsx component inside.

## Strapi CMS
The CMS contains all the data, texts, images and schemas for it ready to be shown to the frontend.
Strapi also provides a ready to use rest api to query all the data from the database.
