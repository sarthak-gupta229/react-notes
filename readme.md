#starting react projects
npm create vite@latest
npm install
npm run dev

------------------------------------------------------------------------------------------------------------------------------------------

Installing Tailwind CSS as a Vite plugin is the most seamless way to integrate it with frameworks like Laravel, SvelteKit, React Router, Nuxt, and SolidJS.

01
Create your project
Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.

<!-- Terminal

npm create vite@latest my-project
cd my-project -->

02
Install Tailwind CSS
Install tailwindcss and @tailwindcss/vite via npm.

Terminal

<!-- npm install tailwindcss @tailwindcss/vite -->
03
Configure the Vite plugin
Add the @tailwindcss/vite plugin to your Vite configuration.

vite.config.ts

<!-- import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
}) -->
04
Import Tailwind CSS
Add an @import to your CSS file that imports Tailwind CSS.

CSS

<!-- @import "tailwindcss"; -->

05
Start your build process
Run your build process with npm run dev or whatever command is configured in your package.json file.

Terminal

<!-- npm run dev -->
06
Start using Tailwind in your HTML
Make sure your compiled CSS is included in the <head> (your framework might handle this for you), then start using Tailwind’s utility classes to style your content.

HTML

<!-- <!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/src/style.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html> -->

------------------------------------------------------------------------------------------------------------------------------------------

installing react router
npm install react-router-dom


        <NavLink to="/"
            className={({isActive}) =>
                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                 ${isActive ? "text-orange-700" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
        >
        Home
        </NavLink>
