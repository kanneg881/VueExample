import About from './About.vue';
import App from './App.vue';
import Booking from './Booking.vue';
import CourseDetail from './CourseDetail.vue';
import CourseList from './CourseList.vue';
import Courses from './Courses.vue';
import Vue from "vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    // history 路徑沒有 #
    // hash 路徑有 #
    mode: 'history',
    routes: [
        {
            children: [
                {
                    component: About,
                    path: 'about',
                },
                {
                    component: Booking,
                    path: 'booking',
                },
                {
                    children: [
                        {
                            component: CourseList,
                            path: '',
                        },
                        {
                            component: CourseDetail,
                            path: ':id',
                        },
                    ],
                    component: Courses,
                    path: 'courses',
                },
            ],
            component: App,
            path: '/',
        },
    ],
});
