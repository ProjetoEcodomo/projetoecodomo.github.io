<template>
  <div>
    <b-card overlay
          :img-src="img"
          img-alt="Cúpula"
          text-variant="#E6FFDE"
          :title="name">
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    img: String,
  },
};
</script>

<style>
.card {
  width: 240px;
  overflow: hidden;
}

.card-img {
  max-height: 8rem;
}

.card-img-overlay {
  background: rgba(75, 92, 64, .73);
}

.card-title {
  position: absolute;
  bottom: 8px;
  text-align: left;
  font-size: 20px;
  color: #E6FFDE;
}

@media screen and (max-width: 768px) {
  .card {
    width: 240px;
    margin: auto;
  }
}
</style>
