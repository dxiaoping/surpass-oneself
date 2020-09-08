import Vue from 'vue'
import App from './App'
// import ViewUI from 'view-design';

// // import style
// import 'view-design/dist/styles/iview.css';

// Vue.use(ViewUI);

// Vue.config.productionTip = false
// App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
    config:{
        pages:[],
        window:{
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: '第一个小程序',
            navigationBarTextStyle: 'black'
        }
    }
}
