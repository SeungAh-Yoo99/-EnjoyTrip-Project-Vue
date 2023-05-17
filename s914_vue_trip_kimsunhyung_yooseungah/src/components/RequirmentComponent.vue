<template>
  <div>
    <div class="d-flex justify-content-center">
      <b-button-group size="lg">
        <router-link to="/join/general">
          <b-button class="mb-2 button" variant="outline-secondary">
            <b-icon
              icon="person-fill"
              aria-hidden="true"
              font-scale="7.5"
            ></b-icon
            ><br />
            <h3>일반 회원</h3>
          </b-button>
        </router-link>
        <router-link to="/join/business">
          <b-button class="mb-2 button" variant="outline-secondary">
            <b-icon
              icon="people-fill"
              aria-hidden="true"
              font-scale="7.5"
            ></b-icon
            ><br />
            <h3>사업자</h3>
          </b-button>
        </router-link>
      </b-button-group>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  height: 200px;
  width: 240px;
}
</style>