<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="public/js/app.js" defer></script>
    <link href="public/css/app.css" rel="stylesheet">
    <link href="public/favicon.ico" rel="icon">
    <title>@yield('title')</title>
</head>
<body>
    <div id="app">
        @yield('content')
    </div>
</body>
</html>
