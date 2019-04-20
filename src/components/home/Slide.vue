<template>
<div class="card col-md-12">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="100000">
        <div class="w-100 carousel-inner" role="listbox">
        <div class="carousel-item active">
            <div class="carousel-caption">
                <span class="badge badge-pill pink mb-2">ROUND 1</span>
                <ul class="list-inline mx-auto justify-content-center">
                    <li class="mb-1">
                        <div class="row">
                            <div class="text-right" style="width: 44%; color:"><small id="220casaN" class="smallest mute mr-2" style="color: red;">Mavungwana FC</small></div>
                            <div class="text-center" style="width: 12%;"><small class="smallest mute"><span class="badge badge-dark"> 14:30 </span></small></div>
                            <div class="text-left" style="width: 44%; color:"><small id="220foraN" class="smallest mute ml-2" style="color: green;">Mucacaza FC</small></div> 
                        </div>
                    </li>
                    <li class="mb-1">
                        <div class="row">
                            <div class="text-right" style="width: 44%; color:"><small id="220casaN" class="smallest mute mr-2" style="color: red;">Mavungwana FC</small></div>
                            <div class="text-center" style="width: 12%;"><small class="smallest mute"><span class="badge badge-dark"> 14:30 </span></small></div>
                            <div class="text-left" style="width: 44%; color:"><small id="220foraN" class="smallest mute ml-2" style="color: green;">Mucacaza FC</small></div> 
                        </div>
                    </li>
                    <li class="mb-1">
                        <div class="row">
                            <div class="text-right" style="width: 44%; color:"><small id="220casaN" class="smallest mute mr-2" style="color: red;">Mavungwana FC</small></div>
                            <div class="text-center" style="width: 12%;"><small class="smallest mute"><span class="badge badge-dark"> 14:30 </span></small></div>
                            <div class="text-left" style="width: 44%; color:"><small id="220foraN" class="smallest mute ml-2" style="color: green;">Mucacaza FC</small></div> 
                        </div>
                    </li>
                    <li class="mb-1">
                        <div class="row">
                            <div class="text-right" style="width: 44%; color:"><small id="220casaN" class="smallest mute mr-2" style="color: red;">Mavungwana FC</small></div>
                            <div class="text-center" style="width: 12%;"><small class="smallest mute"><span class="badge badge-dark"> 14:30 </span></small></div>
                            <div class="text-left" style="width: 44%; color:"><small id="220foraN" class="smallest mute ml-2" style="color: green;">Mucacaza FC</small></div> 
                        </div>
                    </li>
                    <li class="mb-1">
                        <div class="row">
                            <div class="text-right" style="width: 44%; color:"><small id="220casaN" class="smallest mute mr-2" style="color: red;">Mavungwana FC</small></div>
                            <div class="text-center" style="width: 12%;"><small class="smallest mute"><span class="badge badge-dark"> 14:30 </span></small></div>
                            <div class="text-left" style="width: 44%; color:"><small id="220foraN" class="smallest mute ml-2" style="color: green;">Mucacaza FC</small></div> 
                        </div>
                    </li>
                    <li class="mb-1">
                        <div class="row">
                            <div class="text-right" style="width: 44%; color:"><small id="220casaN" class="smallest mute mr-2" style="color: red;">Mavungwana FC</small></div>
                            <div class="text-center" style="width: 12%;"><small class="smallest mute"><span class="badge badge-dark"> 14:30 </span></small></div>
                            <div class="text-left" style="width: 44%; color:"><small id="220foraN" class="smallest mute ml-2" style="color: green;">Mucacaza FC</small></div> 
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="carousel-item">
            <div class="carousel-caption">
            <div class="row">
                <div class="col-sm-3">
                <img src="http://via.placeholder.com/200x200" alt="" class="rounded-circle img-fluid">
                </div>
                <div class="col-sm-9">
                <h3>You will love it.</h3>
                <small>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</small>
                <small class="smallest mute">- Yayo Dudemous</small>
                </div>
            </div>
            </div>
        </div>
        <div class="carousel-item">
            <div class="carousel-caption">
            <div class="row">
                <div class="col-sm-3">
                <img src="http://via.placeholder.com/200x200" alt="" class="rounded-circle img-fluid">
                </div>
                <div class="col-sm-9">
                <h3>Velvet pouch!</h3>
                <small>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</small>
                <small class="smallest mute">- Yayo Dudemous</small>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div class="float-right navi">
        <a class="" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon ico" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
        </a>
        <a class="" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon ico" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
        </a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'SlideHome'
}
</script>

<style>
.card {
  margin: 0 auto;
}

.card.col-md-6 {
  max-width: 100%;
}
.card .carousel-item {
  height: 252px;
}
.card .carousel-caption {
  padding: 0;
  right: 0;
  left: 0;
  color: #3d3d3d;
}
.card .carousel-caption h3 {
  color: #3d3d3d;
}
.card .carousel-caption p {
  line-height: 30px;
}
.card .carousel-caption .col-sm-3 {
  display: flex;
  align-items: center;
}
.card .carousel-caption .col-sm-9 {
  text-align: left;
}
.navi a {
    text-decoration:none;
}
a > .ico {
    background-color: grey;
    padding: 10px;
    
}
a:hover > .ico {
    background-color: #666;
}


</style>
