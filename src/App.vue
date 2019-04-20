<template>
  <div id="app">
    <!--Main Navigation-->
    <header>
      <NavbarPage />
    </header>

    <ListTeams />
    
    <router-view />
    
    <!--Footer-->
    <FooterPage />
    <!--/.Footer-->
  </div>
</template>

<script>
import NavbarPage from '@/components/navbar';
import ListTeams from '@/components/ListTeams';
import FooterPage from '@/components/footer';
export default {
  components: {
    NavbarPage,
    ListTeams,
    FooterPage
  }
}
</script>

<style>
  /* #nav a.router-link-exact-active {
    color: #42b983;
  } */
</style>
