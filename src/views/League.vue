<template>
  <!--Main layout-->
  <main>
  <mdb-container class="mt-4">
    <div class="divider-new mt-0 mb-4">
        <h2 class="h3-responsive">
            <strong>Results</strong>
        </h2>
    </div>
    <!--Section: Intro-->
    <section class="mb-4">
      <Rounds />
    </section>
    <div class="divider-new mt-0 mb-4">
        <h2 class="h3-responsive">
            <strong>Standings</strong>
        </h2>
    </div>
    <!--Section: Posts-->
    <section class="text-center">
      <Standings />
    </section>
  </mdb-container>
  </main>
  <!--Main layout-->
</template>

<script>
import { mdbContainer } from 'mdbvue';
import Rounds from '@/components/league/Rounds';
import Standings from '@/components/league/Standings';
export default {
  name: "League",
  components: {
    mdbContainer,
    Rounds,
    Standings
  }
}
</script>
