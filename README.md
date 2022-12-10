# Ping CRM

A demo application to illustrate how [Inertia.js](https://inertiajs.com/) works with [Laravel](https://laravel.com/) and [Preact](https://preactjs.com/).

> This is a modified port of the original Laravel/Vue [Ping CRM](https://github.com/inertiajs/pingcrm) and the Laravel/React [Ping CRM](https://github.com/Landish/pingcrm-react).

![](https://raw.githubusercontent.com/jrson83/pingcrm-preact/main/screenshot.png)

## Conventions

The demo is using [Laravel Vite conventions](https://laravel-vite.dev/guide/extra-topics/inertia.html#using-the-preset) for a consistent and organized architecture.

- Main entrypoint is `resources/application/main.tsx`
- SSR entrypoint is `resources/application/ssr.tsx`
- Components will be placed in the folder `resources/views/components`
- Layouts will be placed in the folder `resources/views/layouts`
- Pages will be placed in the folder `resources/views/pages`

## Live demo

A live demo of the app is available at [https://pingcrm-preact.jrson.de/](https://pingcrm-preact.jrson.de/).

> The Ping CRM demo is hosted in Germany, and the database is reset every hour. Please be respectful when editing data.

## Installation

Clone the repo locally:

```bash
git clone https://github.com/jrson83/pingcrm-preact.git pingcrm-preact
cd pingcrm-preact
```

Install PHP dependencies:

```bash
composer install
```

Install NPM dependencies:

```bash
npm install
```

Setup configuration:

```bash
cp .env.example .env
```

Generate application key:

```bash
php artisan key:generate
```

Create an SQLite database. You can also use another database (MySQL, Postgres), simply update your configuration accordingly.

```bash
touch database/database.sqlite
```

Run database migrations:

```bash
php artisan migrate
```

Run database seeder:

```bash
php artisan db:seed
```

Run the dev server (the output will give the address):

```bash
php artisan serve
```

Build assets first time & preview SSR:

```bash
npm run preview
```

You're ready to go! Visit Ping CRM in your browser, and login with:

- **Username:** johndoe@example.com
- **Password:** secret

## Running tests

The tests are not working at the moment. ~~To run the Ping CRM tests, run:~~

```
phpunit
```

## Credits

- Original work by Jonathan Reinink (@reinink) and contributors
- Port to Ruby on Rails by Georg Ledermann (@ledermann)
- Port to React by Lado Lomidze (@landish)
