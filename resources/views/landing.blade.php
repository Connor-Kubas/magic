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
            <img class= "{{ $card }}" id="{{ $card }}" width="250px" style="position: absolute;" src="/storage/images/{{ $card }}.jpg">
        @endforeach
        
    </body>
</html>

<script src="{{ url('js/main.js') }}"></script>
