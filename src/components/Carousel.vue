<template>
  <mdb-carousel :interval="8000" showControls showIndicators>
    <mdb-carousel-item img src="https://firebasestorage.googleapis.com/v0/b/rhinocupchampionsleaguemz.appspot.com/o/rhino_slide%2Frccl_people_v.jpg?alt=media&token=c5ef7cbc-53bf-4a81-9779-b4758246006e" mask="" alt="First slide">
      <mdb-carousel-caption title="Light mask" text="First text"></mdb-carousel-caption>
    </mdb-carousel-item>
    <mdb-carousel-item img src="https://firebasestorage.googleapis.com/v0/b/rhinocupchampionsleaguemz.appspot.com/o/rhino_slide%2Fsupport1.jpg?alt=media&token=5e81b626-62fd-43b7-b2d8-972ced903135" mask="" alt="Second slide">
      <mdb-carousel-caption title="" text=""></mdb-carousel-caption>
    </mdb-carousel-item>
    <mdb-carousel-item img src="https://firebasestorage.googleapis.com/v0/b/rhinocupchampionsleaguemz.appspot.com/o/rhino_slide%2Fkickstart.jpg?alt=media&token=c45d5e28-e532-4591-a156-7ebb4e019846" mask="black-slight" alt="Third slide">
      <mdb-carousel-caption title="Super light mask" text="Third text"></mdb-carousel-caption>
    </mdb-carousel-item>
  </mdb-carousel>
</template>

<script>
  import { mdbCarousel, mdbCarouselItem, mdbCarouselCaption } from 'mdbvue';
  export default {
    name: 'CarouselPage',
    components: {
      mdbCarousel,
      mdbCarouselItem,
      mdbCarouselCaption
    }
  }
</script>