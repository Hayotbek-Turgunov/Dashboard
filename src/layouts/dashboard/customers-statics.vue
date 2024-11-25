<template>
  <div class="customers-statics">
    <div class="customer-statics-card">
      <div class="customer-statics-icon">
        <img :src="customerUser" alt="" />
      </div>
      <div class="customer-statics-info">
        <p>Total Customers</p>
        <h2>5,423</h2>
        <h3>
          <img :src="customerArrowUp" alt="" />
          <span>16%</span>
          this month
        </h3>
      </div>
    </div>

    <div class="customer-statics-card">
      <div class="customer-statics-icon">
        <img :src="customerProfile" alt="" />
      </div>
      <div class="customer-statics-info">
        <p>Members</p>
        <h2>1,893</h2>
        <h3>
          <img :src="customerArrowDown" alt="" />
          <span>1%</span>
          this month
        </h3>
      </div>
    </div>

    <div class="customer-statics-card">
      <div class="customer-statics-icon">
        <img :src="customerUser" alt="" />
      </div>
      <div class="customer-statics-info">
        <p>Active Now</p>
        <h2>189</h2>
        <h3>
          <img :src="customerArrowUp" alt="" />
          <span>16%</span>
          this month
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import customerUser from '../../assets/customer-user.svg'
import customerProfile from '../../assets/profile-tick.svg'
import customerArrowUp from '../../assets/arrow-up 1.svg'
import customerArrowDown from '../../assets/arrow-down.svg'
</script>

<style lang="scss" scoped>
.customers-statics {
  margin-top: 100px;
  margin-bottom: 40px;
  width: 100%;
  height: 151px;
  padding: 31px 60px;
  background-color: #fff;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;

  .customer-statics-card {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .customer-statics-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #d3ffe7;

    display: flex;
    align-items: center;
    justify-content: center;

    & img {
      display: flex;
    }
  }

  .customer-statics-info {
    & p {
      font-family: Poppins;
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      letter-spacing: -0.01em;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: #acacac;
    }

    & h3 {
      font-family: Poppins;
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: -0.01em;
      display: flex;
      align-items: center;

      & span {
        font-weight: 700;
        color: #00ac4f;
        display: flex;
        margin-right: 2px;
      }

      & img {
        display: flex;
        width: 20px;
        height: 20px;
        position: relative;
        top: -2px;
        margin-right: 4px;
      }
    }
  }
}
</style>
