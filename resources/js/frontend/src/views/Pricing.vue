<template>
    <!-- Pricing Plan Area-->
    <section class="saasbox-pricing-plan-area price2 section-padding-120 bg-gray">
        <div class="container">
            <div class="row justify-content-center wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1000ms">
                <div class="col-12 col-md-9 col-lg-7 col-xxl-6">
                    <div class="section-heading text-center">
                        <h2>{{$t('Pricing.title')}}</h2>
                    </div>
                </div>
            </div>
            <div class="row wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1000ms">
                <div class="col-12">
                    <div class="pricing-table-switch mb-100">
                        <ul class="nav nav-tabs border-bottom-0 justify-content-center" id="priceTab" role="tablist">
                            <li class="nav-item"><a :class="{'nav-link':true, 'cursor-on':true, active: isMonthly }" v-on:click="setMonthly(true)" id="month--tab" data-toggle="tab" aria-controls="monthly" aria-selected="true">{{$tc('Pricing.type', 1)}}</a></li>
                            <li class="nav-item"><a :class="{'nav-link':true, 'cursor-on':true, active: !isMonthly }" v-on:click="setMonthly(false)" id="yearly--tab" data-toggle="tab" aria-controls="profile" aria-selected="false"><span class="popular-badge">{{$tc('Pricing.save', 1, { count: savedCount })}}</span>{{$tc('Pricing.type', 2)}}</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-12">
                    <div class="tab-content" id="priceTabContent">
                        <div :class="{'tab-pane wow fadeInUp':true, 'show active':isMonthly}" data-wow-delay="30ms" data-wow-duration="1000ms" id="monthly" role="tabpanel" aria-labelledby="month--tab">
                            <div class="row g-0 justify-content-center">
                                <!-- Single Pricing Plan-->
                                <div v-for="n in 3" :key="n" class="col-12 col-sm-8 col-md-7 col-lg-4">
                                    <div :class="{'card pricing-card mb-30':true, active: n===2}">
                                        <div class="pricing-heading d-flex align-items-center">
                                            <div class="price-icon"><i :class="price_icon[n-1]"></i></div>
                                            <div class="price">
                                                <h5>{{$tc('Pricing.level', n-1)}}</h5>
                                                <h2>${{amount['m'][n-1]}}</h2><span>{{$tc('Pricing.per_type', 1)}}</span>
                                            </div>
                                        </div>
                                        <div class="pricing-desc">
                                            <ul class="pl-0">
                                                <li>{{$t('Pricing.functions[0]')}}</li>
                                                <li>{{$t('Pricing.functions[1]')}}</li>
                                                <li :class="{'times':n===1}">{{$t('Pricing.functions[2]')}}</li>
                                                <li :class="{'times':n!=3}">{{$t('Pricing.functions[3]')}}</li>
                                                <li :class="{'times':n!=3}">{{$t('Pricing.functions[4]')}}</li>
                                            </ul>
                                        </div>
                                        <div class="pricing-btn"><a class="btn saasbox-btn" href="#">{{$t('Pricing.btn_choose')}}</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div :class="{'tab-pane  wow fadeInUp':true, 'show active':!isMonthly}" data-wow-delay="30ms" data-wow-duration="1000ms" id="profile" role="tabpanel" aria-labelledby="yearly--tab">
                            <div class="row g-0 justify-content-center">
                                <!-- Single Pricing Plan-->
                                <div v-for="n in 3" :key="n" class="col-12 col-sm-8 col-md-7 col-lg-4">
                                    <div :class="{'card pricing-card mb-30':true, active: n===2}">
                                        <div class="pricing-heading d-flex align-items-center">
                                            <div class="price-icon"><i :class="price_icon[n-1]"></i></div>
                                            <div class="price">
                                                <h5>{{$tc('Pricing.level', n-1)}}</h5>
                                                <h2>${{amount['y'][n-1]}}</h2><span>{{$tc('Pricing.per_type', 2)}}</span>
                                            </div>
                                        </div>
                                        <div class="pricing-desc">
                                            <ul class="pl-0">
                                                <li>{{$t('Pricing.functions[0]')}}</li>
                                                <li>{{$t('Pricing.functions[1]')}}</li>
                                                <li :class="{'times':n===1}">{{$t('Pricing.functions[2]')}}</li>
                                                <li :class="{'times':n!=3}">{{$t('Pricing.functions[3]')}}</li>
                                                <li :class="{'times':n!=3}">{{$t('Pricing.functions[4]')}}</li>
                                            </ul>
                                        </div>
                                        <div class="pricing-btn"><a class="btn saasbox-btn" href="#">{{$t('Pricing.btn_choose')}}</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  export default {
    name: 'Pricing',
      data(){
        return {
            plan: {
                amounts: {
                    m: [19,29,49],
                    y: [100,200,400]
                },
                percentage: 20
            },
            monthly: true,
            price_icon: [
                'lni-pizza', 'lni-offer', 'lni-burger'
            ]
        }
      },
      computed: {
          savedCount(){
            return this.plan.percentage
          },
          amount(){
               return this.plan.amounts
          },
          isMonthly(){
              return this.monthly
          }
      },
      methods:{
          setMonthly(val){
              this.monthly = val
          }
      }
  }
</script>

<style scoped>

</style>
