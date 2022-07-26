<script setup lang="ts">
const canApplication = ref(false);
const email = ref("");
const emailConfilm = ref("");
const check = ref(false);

const checkConfilm = computed(() => {
  if (email.value !== "") {
    canApplication.value = false;
  } else if (email.value === emailConfilm.value && check.value === true) {
    canApplication.value = true;
  } else {
    canApplication.value = false;
  }
});
</script>

<template>
  <div class="container mt-4">
    <h1 class="text-primary my-3">申請の手順</h1>
    <div class="row my-3">
      <div class="col-4 d-flex flex-column align-items-center">
        <div class="mb-2">メールアドレス入力</div>
        <img
          src="/img/store-application/oita-pay-store-step1.svg"
          width="50"
          height="50"
          alt=""
        />
        <p class="text-muted">規約に同意の上、登録用メールアドレスを送信する</p>
      </div>
      <div class="col-4 d-flex flex-column align-items-center">
        <div class="mb-2">特設フォーム入力</div>
        <img
          src="/img/store-application/oita-pay-store-step2.svg"
          width="50"
          height="50"
          alt=""
        />
        <p class="text-muted">メール内のリンクから特設フォームで必要事項を入力する</p>
      </div>
      <div class="col-4 d-flex flex-column align-items-center">
        <div class="mb-2">審査結果の確認</div>
        <img
          src="/img/store-application/oita-pay-store-step3.svg"
          width="50"
          height="50"
          alt=""
        />
        <p class="text-muted">商工会議所で審査を行い、結果をメールで送信します</p>
      </div>
    </div>
    <div class="card my-5">
      <div class="card-body">
        <h2 class="card-title text-primary my-2 mb-4">登録用メールアドレスを入力</h2>
        <form action="" @submit.prevent>
          <div class="row">
            <div class="col-12 col-md-6">
              <label for="store-application-email" class="label mb-1">
                メールアドレス
                <span class="badge bg-primary">必須</span>
              </label>
              <input
                type="email"
                id="store-application-email"
                class="form-control mb-3"
              />
            </div>
            <div class="col-12 col-md-6">
              <label for="store-application-email-confilm" class="label mb-1">
                メールアドレス(確認用)
                <span class="badge bg-primary">必須</span>
              </label>
              <input
                type="email"
                id="store-application-email-confilm"
                class="form-control mb-3"
              />
            </div>
          </div>
          <div class="col-12 my-3">
            <h3 class="mb-2">加盟店規約</h3>
            <div class="store-promiss border border-dark border-2 rounded-2">
              <PromissStorePromiss />
            </div>
            <div class="form-check">
              <div class="form-check"></div>
              <input
                type="checkbox"
                name=""
                id="store-application-check"
                class="form-check-input"
                v-model="check"
              />
              <label for="store-application-check" class="form-check-label"
                >加盟店規約に同意する</label
              >
            </div>
          </div>
          <button
            type="submit"
            class="btn btn-primary text-light w-100"
            :class="{ disabled: !canApplication }"
          >
            送信
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.store-promiss {
  height: 250px;
  overflow: scroll;
}
</style>
