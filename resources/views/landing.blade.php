<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>MTG Card Editor</title>

        <link href="{{ url('css/styles.css')}}" rel="stylesheet">
    </head>
    <body>

        @foreach ($cardNames as $card)
            <img id="{{ $card }}" width="250px" style="position: absolute;" src="/storage/images/{{ $card }}.jpg">
        @endforeach
        <style>
            .sidebar {
                margin-top: 10%;
                float: right;
                background-color: rgb(39, 39, 39);
                width:200px;
                height: 500px;

            }

            .items {
                width: 100%;
                height: 100%;
                color: white;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
            }
        </style>
    </body>
</html>

<script src="{{ url('js/main.js') }}"></script>
