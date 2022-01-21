<!DOCTYPE html>
<html class="h-full bg-gray-100" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#F1F5F9">
    <link rel="manifest" href="/manifest.webmanifest">
    <link rel="apple-touch-icon" href="/pwa/icon-192x192.png">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    
    {{-- Inertia --}}
    <script src="https://polyfill.io/v3/polyfill.min.js?features=smoothscroll,NodeList.prototype.forEach,Promise,Object.values,Object.assign" defer></script>

    {{-- Ping CRM --}}
    <script src="https://polyfill.io/v3/polyfill.min.js?features=String.prototype.startsWith" defer></script>

    <script src="{{ mix('/js/app.js') }}" defer></script>
    @inertiaHead
  </head>
  <body class="font-sans antialiased leading-none text-gray-700">
    @inertia
  </body>
</html>
