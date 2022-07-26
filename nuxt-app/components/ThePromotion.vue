<template>
  <div>
      <h1 class="bg-primary text-center mb-0 p-3 text-light">OitaPayでカンタン取引</h1>
    <div class="bg-info p-3">
      <div class="row">
        <div class="col-4">
          <img
            src="/img/app/oita-pay-how2use-1st.png"
            alt=""
            class="img-fluid"
          />
        </div>
        <div class="col-4">
          <img
            src="/img/app/oita-pay-how2use-2nd.png"
            alt=""
            class="img-fluid"
          />
        </div>
        <div class="col-4">
          <img
            src="/img/app/oita-pay-how2use-4th.png"
            alt=""
            class="img-fluid"
          />
        </div>
      </div>
      <div class="row mx-5 p-3">
        <img src="/img/oita-pay-coupon.png" alt="" class="img-fluid" />
      </div>
      <div class="row my-4">
        <div class="col-6">
          <nuxt-link class="btn btn-lg btn-primary w-100 text-light p-3 position-relative" to="/user/application">
            商品券に応募する
            <!-- <div class="position-absolute top-0 start-50 translate-middle fs-6 w-75 text-dark border border-3 border-secondary rounded bg-light">メールを送るだけ!</div> -->
          </nuxt-link>
        </div>
        <div class="col-6">
          <nuxt-link class="btn btn-primary btn-lg w-100 text-light p-3" to="/store/application">
            お店に導入する
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="info"></div>
  </div>
</template>
