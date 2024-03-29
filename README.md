# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

<!-- todo ----------------------- -->

# Jobchaser-react

Avancerad frontendutveckling och Typescript

https://chasacademy.instructure.com/courses/289/assignments/1594

# Individuellt Reactprojekt: Jobchaser

## Del 1

### Om Jobchaser

Jobchaser är ett verktyg för YH-studenter att hitta LIA eller jobb på ett effektivt sätt. En första enkel skiss visas nedan.
Endast en userstory finns just nu tillgodo: "Som användare vill jag kunna se en lista av jobb".
Testdata för varje jobb finns att ladda hem här [text](https://github.com/chasacademy-sandra-larsson/react-jobchaser) to an external site.. Det går också bra att använda egen data, eller modifiera. Använd de dataattribut som passar ditt projekt!

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')

![Screenshot](./img/Screenshot%202024-03-04%20at%2017.47.19.png)

### Veckans uppgift

Skapa egen Trello (eller likande) för egen projektplanering
Skapa wireframe/prototyp i Figma
Använda dig av komponenter att bygga upp första sidan, och använd props för dataflödet.
Använda dig av conditional rendering, ex visa information om dataobjektet är tomt

### Veckans teoretiska frågor

Allmänt om ramverket React: Hur/Varför uppkom det? Vad är dess kännetecken?
Vad är JSX?
Vad är en komponent i React?
Vad är props i React?
Vad menas med one-way-dataflow?

### Veckans inlämning

Länken till ditt githubrepo
Ett dokument med svarar på frågorna

## Del 2

## Del 3

## Del 4

# Resources

https://arbetsformedlingen.se/om-webbplatsen/apier-och-oppna-data

https://arbetsformedlingen.my.site.com/apiportal/s/partner?language=sv&t=1710066176867
Ansöka om medlemskap i målgrupp.
API öppen data - Jobtech: Ansökan till målgrupp är avsett för personer tillhörande myndigheter eller organisation med API:er som är interna och stängda utan ansökan om medlemskap. För API:er med öppen data hänvisas till Jobtech.
Medlem myndighet/organisation: Vänligen välj nedan den målgruppen du vill ansöka om medlemskap till. Säkerhetsställ att e-postadress är kopplad till den myndighet/organisation du företräder (ej privat). När du blivit tillagd som medlem kommer du att få en bekräftelse via din e-post/användarkonto på Samverkansportalen.

https://www.jobtechdev.se/sv
https://www.jobtechdev.se/sv/components/jobsearch
Dokumentaion: https://gitlab.com/arbetsformedlingen/job-ads/jobsearch-apis/-/blob/main/docs/GettingStartedJobSearchSE.md

async function fetchPosts() {
try {
const response = await fetch('https://jobsearch.api.jobtechdev.se/search?q=muse');
const data = await response.json();
console.log(data)

} catch (error) {
console.error('Error fetching posts:', error);
}
}

fetchPosts();
