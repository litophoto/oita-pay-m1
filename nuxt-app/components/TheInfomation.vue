<script setup lang="ts">
interface InfomationList {
  date: String,
  title: String,
  url: String,
}
const props = defineProps<{
  infomationList: InfomationList[]
}>()
</script>

<template>
    <div class="card">
      <div class="card-body">
        <h2 class="card-title text-primary p-3">お知らせ</h2>
        <ul class="list-group list-group-flush infomation-list">
          <li class="list-group-item" v-for="infomation in props.infomationList">
            <div class="d-flex">
              <div class="text-muted me-3">{{ infomation.data }}</div>
              <div class="">{{ infomation.title }}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>