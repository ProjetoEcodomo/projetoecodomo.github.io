<template>
  <button class="button">{{label}}</button>
</template>

<script>
export default {
  props: {
    label: String,
    action: Function,
  },
};
</script>

<style>
.button {
  border: 1px solid #487E20;
  color: #366A2A;
  background-color: white;
  text-align: center;
  padding: 7px 0;
  font-size: 16px;
  margin: 10px 15px 0px 0px;
  width: 150px;
}
.button:hover{
  background-color: #366A2A;
  color: white;
  cursor: pointer;
}
</style>
