<script setup lang="ts">
const TheHeader = resolveComponent("TheHeader");

const infomationList = ref([
  { data: '2022/07/22', title: 'サイトを公開しました', url: '' },
  { data: '2022/07/22', title: 'サイトを公開しました', url: '' },
  { data: '2022/07/22', title: 'サイトを公開しました', url: '' },
  { data: '2022/07/22', title: 'サイトを公開しました', url: '' },
  { data: '2022/07/22', title: 'サイトを公開しました', url: '' },
])
</script>

<template>
  <div>
    <ThePromotion></ThePromotion>
    <div class="bg-primary text-light text-center">
      <p class="m-0 p-3 h2">\OitaPayは大分のお店を応援します/</p>
    </div>
    <!-- <div class="p-3 bg-secondary text-light text-center">
      <p class="mx-5 p-2 bg-light rounded-5 h3 text-primary ">
        OitaPayを検討中のオーナー様へ
      </p>
    </div> -->
    <TheInfomation :infomationList="infomationList" class="m-3 border-0"></TheInfomation>
    
  </div>
</template>

<style lang="scss">
  .infomation-list {
    overflow: scroll;
    max-height: 150px;
  }
</style>