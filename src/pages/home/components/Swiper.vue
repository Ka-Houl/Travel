<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for='item of swiperList' :key='item.id'>
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>


      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
<!--       <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data: function () {
  	return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true,
        keyboard : true,
      },

      swiperList: [
        {
          id: '001',
          imgUrl: "http://img1.qunarzz.com/piao/fusion/1809/50/670c61165170f902.jpg_750x200_c4b8d1dc.jpg" 
        },
        {
          id: '002',
          imgUrl: "http://img1.qunarzz.com/piao/fusion/1806/1c/4847ea66072c7b02.jpg_750x200_c32457fb.jpg" 
        },
        {
          id: '003',
          imgUrl: "http://img1.qunarzz.com/piao/fusion/1808/70/5603e6a535062402.jpg_750x200_2c552f2c.jpg" 
        }        
      ],

  	}
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active{
    background-color: #fff 
  }
  .wrapper{
    width: 7.5rem;
    height: 2.04rem;
    background-color: #eee;
  }

  .swiper-img{
    width: 100%;
    height: 100%;
  }
</style>