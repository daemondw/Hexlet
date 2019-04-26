<?php
use Slim\Views\PhpRenderer;
include "vendor/autoload.php";

$app = new Slim\App();
$container = $app->getContainer();
$container['renderer'] = new PhpRenderer("./templates");

$app->get('/about', function ($request, $response, $args) {
      return $this->renderer->render($response, "/about.phtml", $args);
  });

// $app->get('/hello/{name}', function ($request, $response, $args) {
//     return $this->renderer->render($response, "hello.php", $args);
// });
require __DIR__ . '/../vendor/autoload.php';

$app->run();