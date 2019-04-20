<template>
  <mdb-card style="width: 22rem;" class="text-center">
    <mdb-card-header color="success-color">Featured</mdb-card-header>
    <mdb-card-body>
      <mdb-card-title>Special title treatment</mdb-card-title>
      <mdb-card-text>With supporting text below as a natural lead-in to additional content.</mdb-card-text>
      <mdb-btn color="success" size="sm">go somewhere</mdb-btn>
    </mdb-card-body>
    <mdb-card-footer color="success-color">2 days ago</mdb-card-footer>
  </mdb-card>
</template>

<script>
  import { mdbCard, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn, mdbCardHeader, mdbCardFooter } from 'mdbvue';
  export default {
    name: 'Panels',
    components: {
      mdbCard,
      mdbCardBody,
      mdbCardHeader,
      mdbCardTitle,
      mdbCardText,
      mdbBtn,
      mdbCardFooter
    }
  }
</script>