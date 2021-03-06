# Ping CRM

A demo application to illustrate how [Inertia.js](https://inertiajs.com/) works with [Laravel](https://laravel.com/) and [Preact](https://preactjs.com/).

> This is a port of the original Laravel/Vue [Ping CRM](https://github.com/inertiajs/pingcrm) and the Laravel/React [Ping CRM](https://github.com/Landish/pingcrm-react).

![](https://raw.githubusercontent.com/inertiajs/pingcrm/master/screenshot.png)

## Live demo

A live demo of the app is available at [https://pingcrm-preact.jrson.de/](https://pingcrm-preact.jrson.de/).

> The Ping CRM demo is hosted in Germany, and the database is reset every hour. Please be respectful when editing data.

## Installation

Clone the repo locally:

```sh
git clone https://github.com/jrson83/pingcrm-preact.git pingcrm-preact
cd pingcrm-preact
```

Install PHP dependencies:

```sh
composer install
```

Install NPM dependencies:

```sh
npm i
```

Build assets first time:

```sh
npm run init
```

For development with nodemon run:

```sh
npm run dev
```

Setup configuration:

```sh
cp .env.example .env
```

Generate application key:

```sh
php artisan key:generate
```

Create an SQLite database. You can also use another database (MySQL, Postgres), simply update your configuration accordingly.

```sh
touch database/database.sqlite
```

Run database migrations:

```sh
php artisan migrate
```

Run database seeder:

```sh
php artisan db:seed
```

Run the dev server (the output will give the address):

```sh
php artisan serve
```

You're ready to go! Visit Ping CRM in your browser, and login with:

- **Username:** johndoe@example.com
- **Password:** secret

## Running tests

To run the Ping CRM tests, run:

```
phpunit
```
## Credits

- Original work by Jonathan Reinink (@reinink) and contributors
- Port to Ruby on Rails by Georg Ledermann (@ledermann)
- Port to React by Lado Lomidze (@landish)
