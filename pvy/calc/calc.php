<!DOCTYPE html>
<html lang="cs">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Formulář</title>

    <!-- Bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.3/html5shiv.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
</head>

<body>
    <header class="jumbotron">
        <h1 class="text-center">Kalkulačka v PHP</h1>
    </header>
    <main class="container">
    <?php
        $vysledek = 0;
        $x = isset($_POST['x']) ? $_POST['x'] : 0;
        $y = isset($_POST['y']) ? $_POST['y'] : 0;
        $op = isset($_POST['operace']) ? $_POST['operace'] : "+";

    ?>
        <form action="" method="POST" class="form-horizontal" role="form">
            <div class="form-group">
                <legend>Jednoduchá kalkulačka</legend>
            </div>

            <div class="form-group">
                <label for="x" class="col-sm-2 control-label">X:</label>
                <div class="col-sm-2">
                    <input type="text" name="x" id="x" class="form-control" value="<?php echo $x ?>" required="required">
                </div>
            </div>
            <div class="form-group">
                <label for="y" class="col-sm-2 control-label">Y:</label>
                <div class="col-sm-2">
                    <input type="text" name="y" id="y" class="form-control" value="<?php echo $y ?>" required="required">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label">Operace</label>
                <div class="col-sm-8">

                    <div class="radio">
                        <label>
                            <input type="radio" name="operace" id="add" value="+" <?php if($op == "+") echo "checked" ?>>
                            +
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="operace" id="substract" value="-" <?php if($op == "-") echo "checked" ?>>
                            -
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="operace" id="multiply" value="*" <?php if($op == "*") echo "checked" ?>>
                            *
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="operace" id="divide" value="/" <?php if($op == "/") echo "checked" ?>>
                            /
                        </label>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="col-sm-10 col-sm-offset-2">
                    <button type="submit" class="btn btn-primary">Vypočítat</button>
                </div>
            </div>
        </form>
        <?php
        $vysledek = 0;
        $x = isset($_POST['x']) ? $_POST['x'] : 0;
        $y = isset($_POST['y']) ? $_POST['y'] : 0;
        $op = isset($_POST['operace']) ? $_POST['operace'] : "+";
        switch ($op) {
            case "+" :
                $vysledek = $x + $y;
                break;
            case "-" :
                $vysledek = $x - $y;
                break;
            case "*" :
                $vysledek = $x * $y;
                break;
            case "/" :
                $vysledek = ($y != 0) ? $x / $y : "<b>Nulou nelze dělit!</b>";
                break;
        }
        echo "<h3>Výsledek = " . $vysledek . "</h3>";
        ?>
    </main>
    <!-- jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Bootstrap JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</body>

</html>