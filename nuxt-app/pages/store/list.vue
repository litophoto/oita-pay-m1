<script setup lang="ts">
interface Store {
  id?: number,
  name: String,
  address: String,
  hours: String,
  phone: number,
  category: String,
  subcategory: String,
  couponclass: String,
  isLarge: boolean,
  canPaper: boolean,
  canElect: boolean,
  link?: String,
}

const storeList:Store[] = ref([])
</script>
<template>
  <div>
    <!-- Store Search for Store list -->
    <div class="card">
      <div class="card-body">
        <form action="">
          <div class="form-group">
            <label for="searchStoreName" class="label"> 店舗名 </label>
            <input type="text" class="form-control" id="searchStoreName" />
          </div>
          <div class="form-group">
            <label for="searchStoreCategory" class="label"> カテゴリー </label>
            <select name="" id="searchStoreCategory" class="form-select">
              <option value="1">One</option>
              <option value="2">Two</option>
            </select>
          </div>
        </form>
      </div>
    </div>

    <!-- Store list selected Search -->
    <div class="card">
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item" v-for="store in storeList" :key="store.id"></li>
        </ul>
      </div>
    </div>
  </div>
</template>
