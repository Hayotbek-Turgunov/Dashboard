<template>
  <aside>
    <a href="" class="logo">
      <img :src="navigationLogo" alt="" />
    </a>
    <ul class="list" v-if="navLinks.length">
      <li v-for="el in navLinks" class="list-item">
        <router-link class="list-item-link" :to="el.path">
          <div v-html="el.icon" class="icon"></div>
          <span>{{ el.name }}</span>
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { navLinks } from '../../constants/index.js'
import navigationLogo from '../../assets/navigation-logo.svg'
</script>

<style lang="scss" scoped src="./_style.scss"></style>
