<template>
<div>
  <!--Navbar-->
  <mdb-navbar color="grey darken-3" dark>
    <!-- Navbar brand -->
    <mdb-navbar-brand href="/">
      <img src="https://firebasestorage.googleapis.com/v0/b/rhinocupchampionsleaguemz.appspot.com/o/system-images%2Fwff_logo.png?alt=media&token=c22ba929-99e4-4aec-b091-b47c354de82f" height="30" alt="">
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        <mdb-nav-item router to="/">HOME</mdb-nav-item>
        <mdb-nav-item router to="/news">NEWS</mdb-nav-item>
        <mdb-nav-item router to="/league">LEAGUE</mdb-nav-item>
        <mdb-nav-item href="/about">ABOUT</mdb-nav-item>
      </mdb-navbar-nav>
      <!-- Search form -->
      <ul class="navbar-nav ml-auto nav-flex-icons">
          <li class="nav-item">
            <a class="nav-link waves-effect waves-light"><i class="fab fa-twitter"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link waves-effect waves-light"><i class="fab fa-google-plus"></i></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-user"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right dropdown-unique" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item waves-effect waves-light" href="#">Action</a>
              <a class="dropdown-item waves-effect waves-light" href="#">Another action</a>
              <a class="dropdown-item waves-effect waves-light" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" style="color:#ff6f00; font-weight: bold" target="_blank" href="https://www.flipcause.com/secure/cause_pdetails/NDA0MTQ=">
              <!-- <i class="badge badge-pill badge-dark pink"> Donate</i> -->
              <mdb-badge pill color="pink">Donate</mdb-badge>
            </a>
          </li>
        </ul>
    </mdb-navbar-toggler>
  </mdb-navbar>
  </div>
</template>

<script>
  import { mdbNavbar,mdbContainer, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbDropdown, mdbDropdownMenu, mdbDropdownToggle, mdbInput, mdbDropdownItem, mdbFormInline, mdbBadge } from 'mdbvue';
  export default {
    name: 'NavbarPage',
    components: {
      mdbNavbar,
      mdbContainer,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
      mdbDropdown,
      mdbDropdownMenu,
      mdbDropdownToggle,
      mdbDropdownItem,
      mdbFormInline,
      mdbInput,
      mdbBadge
    }
  }
</script>

<style>
    .navbar.navbar-dark .navbar-nav .nav-item .nav-link {
        color: #ff6d00;
        font-weight: bold;
    }

    .navbar.navbar-dark .navbar-nav .nav-item .nav-link.active {
        color: #ffe0b2;
    }
</style>