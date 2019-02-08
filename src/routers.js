import showBLogs from './components/showBlogs.vue'
import formHelper from './components/formHelper.vue'
import Home from './Home.vue'
import singleBlog from './components/singleBlog.vue'

export default [
    { path: '/', component: Home},
    { path: '/show', component: showBLogs},
    { path: '/form', component: formHelper},
    { path: '/blog/:id', component: singleBlog }    
]