<template>
  <div>
    <div  class="recommend-title">
      <span class="iconfont icon-heart">&#xe607;</span>
      猜你喜欢
    </div>
    <ul>
      <li class="list-item" v-for='(item,index) of recommendList' :key='index'>
        <div class="item-img">
          <img :src="item.imgUrl">
          <!-- <img src="http://img1.qunarzz.com/sight/p0/1601/e1/e19f8470b726162d90.water.jpg_200x200_adc73629.jpg"> -->

        </div>
        <div class="item-img-tag">{{item.tag}}</div>
        <div class="item-info">
          <div class="inner-box">
            <div class="info-title">{{item.title}}</div>
            <div class="info-comment">
              <span class="iconfont icon-star">&#xe730;</span>
              <span class="iconfont icon-star">&#xe730;</span>
              <span class="iconfont icon-star">&#xe730;</span>
              <span class="iconfont icon-star">&#xe730;</span>
              <span class="iconfont">&#xe730;</span>
              <span class="comment-num">{{item.commentNum}}条评论</span>
            </div>
            <div class="info-price">
              <span class="price">￥<em>{{item.price}}</em></span>起
              <span class="district">{{item.district}}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>    
  </div>

</template>

<script>
export default {
  name: 'HomeRecommend',
  data: function () {
    return{
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1601/e1/e19f8470b726162d90.water.jpg_200x200_adc73629.jpg',
          tag: '可订明日',
          title: '韶关丹霞山',
          commentNum: '5750',
          price: '39',
          district: '浈江区'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/a4/a4b1bc5a3cc3c106.water.jpg_200x200_7d16ab94.jpg',
          tag: '可订明日',
          title: '云门山水上乐园',
          commentNum: '350',
          price: '209',
          district: '乳源县'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1711/9d/9da3e124fdcfd8c3a3.img.jpg_200x200_7f4ad548.jpg',
          tag: '可订明日',
          title: '韶关云门山',
          commentNum: '1242',
          price: '98',
          district: '乳源县'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1509/67/675bed756b42a5ab.water.jpg_200x200_4c5c4019.jpg',
          tag: '可订明日',
          title: '水上丹霞',
          commentNum: '222',
          price: '60',
          district: '韶关丹霞山'
        },
      ]
    }
  }

}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';
@import '~styles/mixins.styl';
div{
  box-sizing: border-box;
}
.recommend-title{
  width: 100%;
  line-height: 0.8rem;
  font-size: 0.32rem;
  background-color: #eee;
}

.recommend-title .icon-heart{
  color: red;
  margin-right: .08rem;
  margin-left: .13rem;
}

.list-item{
  position: relative;
  width: 100%;
  height: 2.4rem;  
}

.list-item .item-img{
  position: relative;
  float: left;
  width: 2.4rem;
  height: 2.4rem;  
  padding: 0.2rem;
}

.list-item .item-img-tag{
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  width: 1.02rem;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: .2rem;
  text-indent: 0.04rem;
  background-image: url(https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png);
  background-size: 100%;
}

.item-img img{
  width: 100%;
  height: 100% 
}

.list-item .item-info{
  float: left;
  width: 5.1rem;
  height: 2.4rem;
  padding: 0.4rem;
}

.item-info .inner-box{
  width: 100%;
  height: 100%;
}

.item-info .inner-box .info-title{
  height: .44rem;
  color: #212121;
  font-size: .32rem;
  line-height: .44rem;
  ellipsis();
}

.item-info .inner-box .info-comment{
  margin-top: .14rem;
  height: .34rem;
}

.item-info .inner-box .info-comment .icon-star{
  color: #ffb436;
  line-height: .4rem;
  font-size: .3rem;
}

.item-info .inner-box .info-comment .comment-num{
  color: $lightTxtColor;
}

.item-info .inner-box .info-price{
  position: relative;
  margin-top: .22rem;
  color: $lightTxtColor;
  font-size: .3rem;
  line-height: .6rem;
}

.item-info .inner-box .info-price span{
  color: orange;
}

.item-info .inner-box .info-price .price em{
  font-size: .4rem;
}

.item-info .inner-box .info-price .district{
  position: absolute;
  width: 1.2rem;
  bottom: 0;
  right: .4rem;
  color: $lightTxtColor;
  ellipsis();
}
</style>