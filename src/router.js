import Vue from 'vue';
import Router from 'vue-router';
import MainHome from './views/MainHome.vue';
import WriteForm from './views/WriteForm';
import MyPage from './views/MyPage';
import MypageInformation from './views/MypageInformation'
import WrittenParty from './views/WrittenParty'
import ParticipatedPod from './views/ParticipatedPod'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes :[
  {
    path:'/',
    component: MainHome,
  },
  {
    path:'/writeform',
    component:WriteForm,
  },
  {
    path:'/mypage',
    component:MyPage,
  },
  {
    path:'/mypage/my-information',
    component:MypageInformation,
  },
  {
    path:'/mypage/written-party',
    component:WrittenParty,
  },
  {
    path:'/mypage/participated-party',
    component:ParticipatedPod,
  }
],
})