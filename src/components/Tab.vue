<template>
  <mdb-container>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home"
          aria-selected="true">ROUNDS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"
          aria-selected="false">STANDINGS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="messages-tab" data-toggle="tab" href="#messages" role="tab" aria-controls="messages"
          aria-selected="false">STATS</a>
      </li>
    </ul>

  <div class="tab-content">
    <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
      <SlideHome />
    </div>
    <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
      <SlideStands />
    </div>
    <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">...</div>
  </div>
  </mdb-container>
</template>

<script>
  import { mdbContainer, mdbCol, mdbRow, mdbIcon, mdbTabs } from 'mdbvue';
  import SlideHome from '@/components/home/Slide';
  import SlideStands from "@/components/home/SlideStands.vue";
  window.$ = window.jQuery = require("jquery");
  export default {
    name: 'TabPage',
    components: {
      mdbContainer,
      mdbCol,
      mdbRow,
      mdbIcon,
      mdbTabs,
      SlideHome,
      SlideStands
    },
    mounted() {
      $('#myTab li:last-child a').tab('show')
    },
  }

  
  
</script>