# Laravel, React with Inertia v2 with TypeScript and SSR

Full Stack starter kit with Laravel, React with TypeScript, Inertia V2 with Server Side Rendering and with roles and permissions using [Spatie Laravel Permission](https://spatie.be/docs/laravel-permission/v6/installation-laravel) package.

> To see every step how I created this project and deployed it on [larareact.com](https://larareact.com) with server side rendering check the following [YouTube Tutorial](https://youtu.be/lqKbDEBa2B0)

## Demo

https://larareact.com

**Admin User**
```
Email: admin@example.com
Password: password
```

**Commenter User**
```
Email: commenter@example.com
Password: password
```

**Regular User**
```
Email: user@example.com
Password: password
```

## Local Setup

> [!TIP]
> Make sure you have installed php, composer, node.js and the following commands are available in terminal. `php`, `node`, `npm`, `composer`.

1. Clone the project
2. Go to the project's root directory from terminal
3. Copy `.env.example` into `.env` file (`cp .env.example .env`)
4. Open and adjust your `.env` parameters
5. Run `composer install`
6. Run `php artisan key:generate --ansi`
7. Execute migrations with seed data: `php artisan migrate --seed`
8. Run `npm install`
9. Run `composer run dev` for local development

## Setup SSR
Follow the steps above including step 8, after which
1. Open terminal and execute `npm run build` to build react assets
2. Then start artisan server: `php artisan serve`
3. Open another terminal and execute `php artisan inertia:start-ssr` to start server side rendering server

## Deploy on Production

To see every step how to setup the project on production, assign domain to it and setup supervisor to start and monitor server side sendering server check the following [YouTube tutorial](https://youtu.be/lqKbDEBa2B0).




