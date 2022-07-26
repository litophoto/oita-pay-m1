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
          alt="" class="my-3"
        />
        <p class="text-muted">規約に同意の上、登録用メールアドレスを送信する</p>
      </div>
      <div class="col-4 d-flex flex-column align-items-center">
        <div class="mb-2">特設フォーム入力</div>
        <img
          src="/img/store-application/oita-pay-store-step2.svg"
          width="50"
          height="50"
          alt="" class="my-3"
        />
        <p class="text-muted">
          メール内のリンクから特設フォームで必要事項を入力する
        </p>
      </div>
      <div class="col-4 d-flex flex-column align-items-center">
        <div class="mb-2">審査結果の確認</div>
        <img
          src="/img/store-application/oita-pay-store-step3.svg"
          width="50"
          height="50"
          alt="" class="my-3"
        />
        <p class="text-muted">
          商工会議所で審査を行い、結果をメールで送信します
        </p>
      </div>
    </div>

    <div class="card my-5">
      <div class="card-body">
        <h2 class="card-title text-primary my-2 mb-4">
          登録用メールアドレスを入力
        </h2>
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

    <div class="card my-5">
      <div class="card-body">
        <h2 class="card-title text-primary"></h2>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="text-muted">加盟店募集期間</div>
            <span class="fs-3">2022</span>
            年
            <span class="fs-3">5</span>
            月
            <span class="fs-3">1</span>
            日(日) ~
            <span class="fs-3">8</span>
            月
            <span class="fs-3">31</span>
            日(水)
          </li>
          <li class="list-group-item">
            <div class="text-muted">登録費用</div>
            無料
          </li>
          <li class="list-group-item">
            <div class="text-muted">登録可能業種</div>
            大分市内にある小売業、飲食業、サービス業、建設業、運輸業等で、加盟店として認められた店舗
          </li>
          <li class="list-group-item">
            <div class="text-muted">登録決定通知</div>
            メールまたは文章のいずれかのご希望に沿って通知します
          </li>
          <li class="list-group-item">
            <div class="text-muted">注意事項</div>
            <ol class="">
              <li class="">
                登録が決まった店舗には、マニュアル、QRコード、ステッカー、ポスター等を別途送付します。
              </li>
              <li class="">
                換金については、おおむね1週間程度を予定しています。換金手数料は、無料です。
              </li>
              <li class="">
                登録方法は、専用ホームページからの申請のみとなります。
                インターネット入力に不安の方は窓口サポートセンターにて入力代行・登録支援を行います。
              </li>
            </ol>
          </li>
        </ul>
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
