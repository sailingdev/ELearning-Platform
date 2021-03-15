<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- The above 4 meta tags *must* come first in the head; any other head content must come *after* these tags-->
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Title-->
    <title>E-Learning platform</title>
    <!-- Favicon-->
    <link rel="icon" href="img/core-img/favicon.ico">
<!-- Core Stylesheet-->
    <link rel="stylesheet" href="{{asset(mix('frontend/css/bootstrap.min.css'))}}">
    <link rel="stylesheet" href="{{asset(mix('frontend/css/default/classy-nav.min.css'))}}">
    <link rel="stylesheet" href="{{asset(mix('frontend/css/animate.css'))}}">
    {{--    <link rel="stylesheet" href="{{asset(mix('frontend/css/owl.carousel.min.css'))}}">--}}
    <link rel="stylesheet" href="{{asset(mix('frontend/css/magnific-popup.css'))}}">
    <link rel="stylesheet" href="{{asset(mix('frontend/css/jquery.animatedheadline.css'))}}">
    <link rel="stylesheet" href="{{asset(mix('frontend/css/default/lineicons.min.css'))}}">
    <link rel="stylesheet" href="{{asset(mix('frontend/css/font-awesome.min.css'))}}">
    <link rel="stylesheet" href="{{asset(mix('frontend/css/flag-icon.min.css'))}}">
    <link rel="stylesheet" href="{{ asset(mix('frontend/css/style.css')) }}">
</head>
<body>

<!-- Preloader-->
<div class="preloader" id="preloader">
    <div class="spinner-grow text-light" role="status"><span class="sr-only">Loading...</span></div>
</div>
<div id="frontend">

</div>

<!-- All JavaScript Files-->
<script src="{{asset(mix('js/frontend/frontend.js'))}}"></script>

<script src="{{asset(mix('frontend/js/popper.min.js'))}}"></script>
<script src="{{asset(mix('frontend/js/bootstrap.min.js'))}}"></script>
<script src="{{asset(mix('frontend/js/jquery.min.js'))}}"></script>
<script src="{{asset(mix('frontend/js/default/classy-nav.min.js'))}}"></script>
<script src="{{asset(mix('frontend/js/waypoints.min.js'))}}"></script>
<script src="{{asset(mix('frontend/js/jquery.easing.min.js'))}}"></script>
<script src="{{asset(mix('frontend/js/default/jquery.scrollup.min.js'))}}"></script>
<script src="{{asset(mix('frontend/js/owl.carousel.min.js'))}}"></script>
<script src="{{asset(mix('frontend/js/wow.min.js'))}}"></script>
{{--<script src="{{asset(mix('frontend/js/jarallax.min.js'))}}"></script>--}}
{{--<script src="{{asset(mix('frontend/js/jarallax-video.min.js'))}}"></script>--}}
<script src="{{asset(mix('frontend/js/default/cookiealert.js'))}}"></script>
<script src="{{asset(mix('frontend/js/default/jquery.passwordstrength.js'))}}"></script>
<script src="{{asset(mix('frontend/js/jquery.countdown.min.js'))}}"></script>
<script src="{{asset(mix('frontend/js/default/active.js'))}}"></script>
<script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>
</body>
</html>
