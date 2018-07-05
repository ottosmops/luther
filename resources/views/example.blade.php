<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Api Lutherübersetzung 1912</title>
        <link rel="stylesheet" type="text/css" href="tooltipster/dist/css/tooltipster.bundle.min.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script type="text/javascript" src="tooltipster/dist/js/tooltipster.bundle.min.js"></script>

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
                <div class="links">
                    <h4>Example</h4>
                        <span class='tooltip'>Gen 1.1</span><br>
                        <span class='tooltip'>Gen 1.3</span><br>
                        <span class='tooltip'>Ex 1.1</span><br>
                        <span class='tooltip'>Exo 1.1</span>
                    <br><br><br>
                    <small>Questions, support: <a href="mailto:luther@k-r.ch">luther@k-r.ch</a></small>
                </div>
            </div>
        </div>

    </body>

<script type="text/javascript">
 $(document).ready(function() {
    $('.tooltip').tooltipster({
        content: 'Loading...',

        // 'instance' is basically the tooltip. More details in the "Object-oriented Tooltipster" section.
        functionBefore: function(instance, helper) {
            val = $(instance.elementOrigin()).text()
            parts = val.split(" ")
            book = parts[0]
            chap = parts[1].split('.')[0]
            verse = parts[1].split('.')[1]
            url = '/'+[book, chap, verse].join('/');

            var $origin = $(helper.origin);
            // we set a variable so the data is only loaded once via Ajax, not every time the tooltip opens
            if ($origin.data('loaded') !== true) {
                $.get(url, function(data) {
                    console.log(data.data[0].text)
                    // call the 'content' method to update the content of our tooltip with the returned data.
                    // note: this content update will trigger an update animation (see the updateAnimation option)
                    instance.content(data.data[0].text);
                    // to remember that the data has been loaded
                    $origin.data('loaded', true);
                });
            }
        }
    });
});
</script>
</html>
