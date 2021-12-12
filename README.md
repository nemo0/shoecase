# Wise Frontend Challenge

## Installation and Setup

### Project Setup

This is a basic Vue project created with `vue cli`. To install the dependencies, run the following command,

```bash
npm install
```

### Compiles and Hot-reload

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Lints and fixes files

```bash
npm run lint
```

## Time Taken

The project took almost 8 to 10 hours to complete. The `/buy` route took the longest. Trying to build the form layout from vanilla CSS was a tough decision. This took very long. The form validation process also took a long. Ultimately I use [Vuelidate](https://vuelidate-next.netlify.app/) to implement the validation. The validation still has many issues. The input fields are not correctly designed. They can be designed better.

## Assumptions Made

- Using a CSS framework like Tailwind could have made the task comparatively easier. But it was also an excellent opportunity to work with vanilla CSS.
- Form handling in Vue.js is tough. Using a validator library like Vuelidate can help.
- Form designing is much easier with bootstrap or Tailwind.

## Requires Improvements

The form page requires improvement. The validation is currently fundamental. The media queries are also elementary, and the page was also not created with a mobile-first approach in mind. This should be improved. The CSS needs refactoring. The form page can also be made smaller using states.

Changing the color of the navbar depending on the route is also not implemented here. This is also something that needs urgent attention and should be implemented.

## Achievement

I am proud of building the product showcase area. I enjoyed making this part the most.

![Showcase](https://i.ibb.co/kyXYpxw/Untitled.png)

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
