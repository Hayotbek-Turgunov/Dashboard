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

    <div class="aside-item">
      <h3>Upgrade to PRO to get access all Features!</h3>
      <div class="aside-item-btn">
        <button>Get Pro Now!</button>
      </div>
    </div>

    <div class="aside-profile">
      <div class="profile-image">
        <img :src="profileImg" alt="" />
      </div>
      <div class="profile-info">
        <h3>Evano</h3>
        <p>Project Manager</p>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { navLinks } from '../../constants/index.js'
import navigationLogo from '../../assets/navigation-logo.svg'

import profileImg from '../../assets/Profile-img.svg'
</script>

<style lang="scss" scoped src="./_style.scss"></style>
