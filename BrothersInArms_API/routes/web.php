<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/


//matches localhost:8888/BrothersInArms_API/public/
$router->get('/', function () use ($router) {
    return  $router->app->version() . ' - Lumen API connected!';
});

$router->get('/donors', 'DonorController@getAll');
$router->get('/donors/{id}', 'DonorController@getOne');
$router->get('/donors/{id}/donations', 'DonorController@getDonationByDonor');
$router->get('/donations', 'DonorController@getDonation');
$router->get('/donations/milestones', 'DonorController@getMilestone');
$router->get('/blogs', 'BlogController@getAll');
$router->get('/blogs/{id}', 'BlogController@getOne');
$router->get('/events', 'EventController@getAll');
$router->get('/events/{id}', 'EventController@getOne');
$router->get('/victorias', 'VictoriaController@getAll');
$router->get('/warletters', 'WarLetterController@getAll');
$router->get('/sponsorships', 'SponsorController@getAll');











