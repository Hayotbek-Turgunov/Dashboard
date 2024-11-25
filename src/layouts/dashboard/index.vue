<template>
  <Header />

  <main>
    <Navigation />
    <section class="routing">
      <customersStatics />
      <router-view></router-view>
    </section>
  </main>
</template>

<script setup>
import Header from '../../components/header/index.vue'
import Footer from '../../components/footer/index.vue'
import Navigation from '../../components/navigation/index.vue'
import customersStatics from './customers-statics.vue'
</script>

<style lang="scss" scoped src="./_style.scss"></style>
