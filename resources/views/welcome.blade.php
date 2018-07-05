<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Api Lutherübersetzung 1912</title>

        <!-- Fonts
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
         -->

        <!-- Styles -->
        <style>
            @import url('https://fonts.googleapis.com/css?family=Ubuntu');
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Raleway', sans-serif;
                font-weight: 100;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 80vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
                -webkit-flex-direction: column;
                flex-direction: column;
            }
            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: left;
            }

            .title {
                font-size: 30px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
            }

            h4 {
                padding: 0px;
                margin-bottom: 5px
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            <div class="content">
                <div class="title m-b-md">
                   Luther's German Bible-Translation (1912)
                </div>
                An Api to get verses from Luther's translation from 1912.
                <div class="links">
                    <h4>Examples</h4>
                    To get Genesis 1.1:<br>
                    <a href="{{ url('/gen/1/1') }}">{{ url('/gen/1/1') }}</a><br>
                    To get Genesis 1.1-3:<br>
                    <a href="{{ url('/gen/1/1-3') }}">{{ url('/gen/1/1-3') }}</a><br>
                    To get Genesis 1.1 and Genesis 1.2:<br>
                    <a href="{{ url('/gen/1/1,3') }}">{{ url('/gen/1/1,3') }}</a>

                    <h4>Books</h4>
                    List of books <br>
                    <a href="{{ url('/books') }}">{{ url('/books') }}</a><br>
                    You can use "book" or "alt_abb" to hit the Verses:<br>
                    <a href="{{ url('/ex/1/1,3') }}">{{ url('/ex/1/1,3') }}</a><br><a href="{{ url('/exo/1/1,3') }}">{{ url('/exo/1/1,3') }}</a> <br>
<!-- http://www.albatrus.org/english/technical/info/bible_books_abbreviation.htm
    http://www.biblija.net/abbrevs.all.php
-->
                    <h4>About</h4>
                    The text for this Api is taken from<br>
                    <a href="http://www.sermon-online.de/search.pl?lang=de&id=6068">www.sermon-online.de</a><br>

                    The Api is a Prototype and very rudimentary. <br>
                    No links, no relations, no errors, just pure or poor data.<br>
                    <br><br><br>
                    <small>Questions, support: <a href="mailto:luther@k-r.ch">luther@k-r.ch</a></small>
                </div>
            </div>
        </div>

    </body>
</html>
