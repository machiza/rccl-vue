<template>
  <!--Main layout-->
  <main>
  <mdb-container class="mt-4">
    <!--Section: Intro-->
    <section>
      <!--Grid row-->
      <div class="row">
        <!--Grid column-->
        <div class="col-md-8 mb-4">
          <CarouselPage />
        </div>
        <div class="col-md-4 mb-4">
          <TabPage />
        </div>
      </div>
    </section>
    <div class="divider-new mt-0 mb-4">
        <h2 class="h3-responsive">
            <strong>What's new?</strong>
        </h2>
    </div>
    <!--Section: Posts-->
    <section class="text-center">
      <Posts />
    </section>
  </mdb-container>
  </main>
  <!--Main layout-->
</template>

<script>
// @ is an alias to /src
import { mdbContainer } from 'mdbvue';
import CarouselPage from "@/components/Carousel.vue";
import TabPage from '@/components/Tab.vue';
import Posts from '@/components/home/Posts.vue';

export default {
  name: "home",
  components: {
    mdbContainer,
    CarouselPage,
    TabPage,
    Posts
  }
};
</script>
