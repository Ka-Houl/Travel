<template>
  <div >
    <div class="recommend-title">
      周末去哪儿
    </div>
    <ul>
      <li class="list-item" v-for='(item,index) of WeekendList' :key='index'>
        <div class="item-img">
          <img :src="item.imgUrl">
        </div>
        <div class="item-info">
          <div class="inner-box">
            <div class="info-title">{{item.title}}</div>
            <!-- <div class="info-comment">{{item.comment}}</div> -->
            <div class="info-comment">
              <span class="comment-num">{{item.commentNum}}</span>
            </div>
            <div class="info-price">
            </div>
          </div>
        </div>
      </li>
    </ul>    
  </div>

</template>

<script>
export default {
  name: 'HomeWeekend',
  data: function () {
    return{
      WeekendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1510/ff/1adb78807877bb.jpg_r_640x214_4a2ed504.jpg',
          tag: '可订明日',
          title: '韶关必游TOP5',
          commentNum: '带你玩转山清水秀，民族风情浓厚的韶关',
          price: '39',
          district: '浈江区'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1511/f7/90c1c5f6f3dd59.jpg_r_640x214_3cb4974e.jpg',
          tag: '可订明日',
          title: '河源必游TOP10',
          commentNum: '走进客家古邑，感受万绿河源',
          price: '209',
          district: '乳源县'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1506/45/313877f3917dbe.jpg_r_640x214_1c113e46.jpg',
          tag: '可订明日',
          title: '江门必游TOP10',
          commentNum: '你不可错过的休闲度假之地',
          price: '98',
          district: '乳源县'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/4a/ac007012d54bd4.jpg_r_640x214_eefa6ade.jpg',
          tag: '可订明日',
          title: '惠州必游TOP5',
          commentNum: '毓秀山水，继续着四季轮回的交替',
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
  height: 0.8rem;
  padding-left: 0.2rem;
  line-height: 0.8rem;
  font-size: 0.32rem;
  background-color: #eee;
}


.list-item .item-img{
  overflow: hidden;
  width: 100%;
  height: 0;  
  padding-bottom: 37.8%;
  background-color: pink;
}

.list-item .item-img img{
  width: 100%;
}

.list-item .item-info{
  width: 100%;  
  float: left;
  width: 5.1rem;
  padding: .14rem .2rem 0rem .2rem;
}

.item-info .inner-box{
}

.item-info .inner-box .info-title{
  width: 100%;
  height: .44rem;
  color: #212121;
  font-size: .28rem;
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
  width: 100%;
  height: 0.2rem;
  color: $lightTxtColor;
  line-height: .42rem;
  font-size: .24rem;
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