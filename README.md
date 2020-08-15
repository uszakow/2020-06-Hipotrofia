# 2020-06-Hipotrofia

## Zasady napisania kodu
### Ogólne założenia
- Nowy branch jest tworzony do nowego tasku.
- Kod jest pisany *mobile-first*.
- Każda podstrona jest pisana w komponencie, który znajduje się w folderze `components`. Każdy komponent, który będzie wykorzystywany nw różnych podstronach, zapisywany jest w folderze `components`. Wszystkie wewnętrzne komponenty, które są wykorzystywane tylko wewnątrz innego komponentu, są zapisywane w folderze tego innego komponentu.
*Przykład:*
    components>
        Home> (komponent, który mieści w sobie całą podstronę)
            HomePictures> (komponent, który będzie wykorzystywany tylko wewnątrz komponentu *Home*)
        Banner> (komponent, który będzie wykorzystywany w wielu miejscach)
- Nazwy komponentów, komentarze, klasy są pisane w języku *angielskim*.
- Na dole komponentu trzeba napisać komentaż z *imieniem i nazwiskiem* autora tego komponentu. Z regułu każdy komponent ma jednego autora.

### Style
- Style są pisane w *scss*.
- Style wykorzystywane w komponencie są zapisywane w folderze tego komponentu. Nazwa pliku stylów taka sama, jak i nazwa pliku .js, które je wykorzystują.
*Przykład:*
    components>
        Home>
            Home.js
            Home.scss
- W pliku .js importuje się bezpośrednio plik .scss danego komponentu, np.:
`import './Home.scss'`
- Nazwy klas stylów są pisane w języku *angielskim*.
- Naswy klas stylów są pisane według *BEM*. Pierwsza część nazwy klasy **zawsze** zaczyna się z nazwy komponenta, który leży w folderze `components`.
*Przykład* (komponent `Banner`, znajdujący się w folderze `components`)
    .banner-container{
        *treść*
    }
    .banner-button-container{
        *treść*
    }

### Responsywność
- Minimalna szerokość ekranu na którym strona ma być pokazywana równa się `320px`.
- Treść każdej podstrony ma znajdować się w komponencie, który ma klasę `className="container"`. Klasa znajduje się w pliku `_media.scss`. Ta klasa stwarza @media dla całej treści.
*Przykład*
    <>
        <Banner photo={bannerPhoto} />
        <div className="container">
            *cała treść podstrony, włożone komponenty*
        </div>
    </>

### Style wspólne dla projektu
- Zmienne, które powtarzają się w całym projekcie, są zapisywane w pliku `_variables.scss`. Dotyczy to między innymi kolorów i breakpointów dla @media. Zawartość pliku `_variables.scss` można zmieniać (zwł. dodawać nowe zmienne) tylko po konsultacji w grupie *front-end* na Slacku.
- Wszystkie style, które mają być wspólne dla całego projektu (np. czcionki, style wszystkich elementów etc.) mają być ustalane tylko dla całego projektu (przede wszystkim w pliku `App.scss`), a nie w jednym komponencie. Zmiany pliku `App.scss` oraz innych plików wspólnych dla całego projektu można dokonać tylko po konsultacji w grupie *front-end* na Slacku.

### Ułatwienia dla czytników ekranów
- Każda podstona ma mieć **jeden** element `<h1>`.
- Jeżeli potrzebne są inne nagłówki, trzeba wykorzystywać `h2`, `h3` i tak dalej. **Nie można** robić "dziur" w numeracji nagłówków - nie można zrobić nagłówek `h2`, a potem `h4`, nie używając nagłówku `h3`.
- Żeby style nagłówka wyglądały tak samo bez różnicy na poziom nagłówka, trzeba wykorzystywać klasę `className="h"` (klasa znajduje się w pliku `App.scss`).

### Sprawdzanie kodu
- Po ukończeniu napisania branchu autor robi *pull request*.
- Zatwierdzić *pull request* może tylko inny programista po dokonaniu *review kodu*.
- Jeżeli review-er ma uwagi, ma napisać do autora kodu. Kod może edytować tylko jego autor, natomiast zatwierdzić zmiany może tylko review-er.

### Lista reguł nie jest wyczerpująca
- Jeżeli w procesie napisania kodu wynikło pytanie na temat, jak trzeba pisać poprawnie, a na danej liście nie ma odpowiedzi, to trzeba niezwłocznie napisać w grupie *front-end* na Slacku.
- Grupa *front-end* na Slacku jest jedynym miejscem, stworzonym specjalnie dla omówienia jakichkolwiek pytań, związanych z front-endem projektu, w ramach zespołu front-end developerów.






This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
