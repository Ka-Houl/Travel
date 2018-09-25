<template>
  <div class="icons-wrapper">
    <swiper  :options="swiperOption">
      <swiper-slide v-for='(page,index) of pages' :key='index'>
		  	<div class="icon-box" v-for='item of page' :key='item.id'>
		  		<div class="icon-img-box">
		  			<img class="icon-img" :src="item.imgUrl"/>
		  		</div>
		  		<p class="icon-description">{{item.description}}</p>
		  	</div>
	  	</swiper-slide>

	  	<div class="swiper-pagination"  slot="pagination"></div>
  	</swiper>
  </div>
</template>

<script type="text/javascript">
export default {
	name: 'HomeIcons',
	data: function () {
  	return {
  		iconsList: [
  		{ 
  			id: '001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        description: '景点门票',
  		},
   		{ 
  			id: '002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
        description: '丹霞山',
  		},
  		{ 
  			id: '003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/87/20656da0ac042002.png',
        description: '玻璃栈道',
  		},
  		{ 
  			id: '004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
        description: '夏日玩水',
  		},
  		{ 
  			id: '005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
        description: '自然风光',
  		},
  		{ 
  			id: '006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
        description: '水上乐园',
  		},
  		{ 
  			id: '007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/95/8d02011d149bdb02.png',
        description: '汽车票',
  		},
  		{ 
  			id: '008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        description: '名胜古迹',
  		},
  		{ 
  			id: '009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
        description: '温泉',
  		},
  		{ 
  			id: '010',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
        description: '全部玩乐',
  		}  		
 		],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true,
        keyboard : true,
      },
  	}
  },
  computed: {
    pages: function () {
      var pages = [];
      this.iconsList.forEach(function (item,index) {
      	var page = Math.floor(index / 8)   //向下取整，设置成两页

      	if(!pages[page]) {
      		pages[page] = [];
      	}
      	pages[page].push(item)  //把每个iconpush进去页中
      })
      return pages

    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';
@import '~styles/mixins.styl';
.icons-wrapper >>> .swiper-container{
	overflow: hidden;
  width: 100%;   
  height: 0;
  padding-bottom: 50%;
}

.icons-wrapper{
  margin: .2rem 0;
}

.icons-wrapper >>> .swiper-pagination-bullet-active{
  background-color: orange  !important
}
.icons-wrapper .icon-box{
	position: relative;
	float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
}

.icons-wrapper .icon-box .icon-img-box{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0.44rem;
}

.icons-wrapper .icon-box .icon-img{
	display: block;
	margin: 0 auto;
	height: 100%;
}

.icons-wrapper .icon-box .icon-description{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0.44rem;
  line-height: 0.44rem;
  text-align: center;
  color: $darkTxtColor;
  ellipsis();  /*导入mixins.styl里边的样式*/
}
</style>

