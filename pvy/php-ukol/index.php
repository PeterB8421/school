
<!DOCTYPE html>
<html lang="cs">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Generátor barev</title>

        <!-- Bootstrap CSS -->
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="css/style.css">
        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.3/html5shiv.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body>
        <h1 class="text-center">Generátor barev v PHP</h1>
        <main class="container">
        <?php
            $r = isset($_POST['r'])?$_POST['r']:255;
            $g = isset($_POST['g'])?$_POST['g']:255;
            $b = isset($_POST['b'])?$_POST['b']:255;
        ?>
        <form method="POST" class="form-horizontal" role="form">
                <div class="form-group">
                    <legend>Minimální hodnoty</legend>
                </div>
                <div class="form-group">
                    <div class="col-xs-2">
                        <label for="r" class="r">Red</label>
                    </div>
                    <div class="col-xs-2">
                        <input type="number" name="r" class="r" value="<?php echo $r?>" class="form-control"step="5" min="0" max="255">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-xs-2">
                        <label for="g" class="g">Green</label>
                    </div>
                    <div class="col-xs-2">
                        <input type="number" name="g" class="g" value="<?php echo $g?>" class="form-control"step="5" min="0" max="255">
                    </div>
                </div>                
                <div class="form-group">
                    <div class="col-xs-2">
                        <label for="b" class="b">Blue</label>
                    </div>
                    <div class="col-xs-2">
                        <input type="number" name="b" class="b" value="<?php echo $b?>" class="form-control"step="5" min="0" max="255">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-10 col-sm-offset-2">
                        <button type="submit" class="btn btn-primary">Generuj</button>
                    </div>
                </div>
        </form>
        <?php 
            if($r == NULL)
                $r = 0;
            if($g == NULL)
                $g = 0;
            if($b == NULL)
                $b = 0;
            $red = rand($r,255);
            $green = rand($g,255);
            $blue = rand($b,255);
        ?>
        <div class="col-xs-12 col-sm-6" id="text" style="<?php echo "color: rgb($red,$green,$blue);"?>">
            <h2>Barva textu</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque at, ab animi deleniti veritatis ad nulla atque necessitatibus. Commodi sequi alias perferendis explicabo eum, veniam dicta? Porro doloribus laboriosam molestias.
            </p>
        </div>
        <div class="col-xs-12 col-sm-6" id="pozadi" style="<?php echo "background-color: rgb($red,$green,$blue);"?>">
            <h2>Barva pozadí</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ea quas officiis placeat est sint molestias cumque provident id nesciunt optio, sit quasi modi autem tenetur, nisi asperiores ut quisquam?
            </p>
        </div>
        <div class="col-xs-12">
            <h2>Aktuálně vygenerované hodnoty</h2>
            <?php
                echo "<p class=\"r\">Red: $red</p>";
                echo "<p class=\"g\">Green: $green</p>";
                echo "<p class=\"b\">Blue: $blue</p>";
            ?>
        </div>
        </main>
        <!-- jQuery -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <!-- Bootstrap JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    </body>
</html>
