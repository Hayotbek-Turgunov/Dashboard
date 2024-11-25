<template>
  <div class="customer">
    <div class="customer-top">
      <div class="customer-top-text">
        <h1>All Customers</h1>
        <p>Active Members</p>
      </div>

      <div class="customer-top-search">
        <form action="">
          <input type="text" placeholder="Search" />
          <div class="sort-dropdown">
            <label for="sort-options">Short by:</label>
            <select id="sort-options" v-model="selectedOption" @change="onSortChange">
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="alphabetical">Alphabetical</option>
            </select>
          </div>
        </form>
      </div>
    </div>

    <div class="customer-table-wrapper">
      <table class="customer-table">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Company</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(customer, index) in customers" :key="index">
            <td>{{ customer.name }}</td>
            <td>{{ customer.company }}</td>
            <td>{{ customer.phone }}</td>
            <td>{{ customer.email }}</td>
            <td>{{ customer.country }}</td>
            <td>
              <span
                :class="{
                  'status-active': customer.status === 'Active',
                  'status-inactive': customer.status === 'Inactive',
                }"
              >
                {{ customer.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="customer-table-footer">
      <p>Showing data 1 to 8 of 256K entries</p>

      <div class="table-footer-buttons">
        <button><img :src="rightArrow" alt="" /></button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <span>....</span>
        <button>40</button>
        <button><img :src="leftArrow" alt="" /></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import rightArrow from '../../assets/right.svg'
import leftArrow from '../../assets/left.svg'

// Customers ma'lumotlari
const customers = ref([
  {
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225) 555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    status: 'Active',
  },
  {
    name: 'Floyd Miles',
    company: 'Yahoo',
    phone: '(205) 555-0100',
    email: 'floyd@yahoo.com',
    country: 'Kiribati',
    status: 'Inactive',
  },
  {
    name: 'Ronald Richards',
    company: 'Adobe',
    phone: '(302) 555-0107',
    email: 'ronald@adobe.com',
    country: 'Israel',
    status: 'Inactive',
  },
  {
    name: 'Marvin McKinney',
    company: 'Tesla',
    phone: '(252) 555-0126',
    email: 'marvin@tesla.com',
    country: 'Iran',
    status: 'Active',
  },
  {
    name: 'Jerome Bell',
    company: 'Google',
    phone: '(629) 555-0129',
    email: 'jerome@google.com',
    country: 'Réunion',
    status: 'Active',
  },
  {
    name: 'Kathryn Murphy',
    company: 'Microsoft',
    phone: '(406) 555-0120',
    email: 'kathryn@microsoft.com',
    country: 'Curaçao',
    status: 'Active',
  },
  {
    name: 'Jacob Jones',
    company: 'Yahoo',
    phone: '(208) 555-0112',
    email: 'jacob@yahoo.com',
    country: 'Brazil',
    status: 'Active',
  },
  {
    name: 'Kristin Watson',
    company: 'Facebook',
    phone: '(704) 555-0127',
    email: 'kristin@facebook.com',
    country: 'Åland Islands',
    status: 'Inactive',
  },
])
</script>

<style lang="scss" scoped src="./_style.scss"></style>
