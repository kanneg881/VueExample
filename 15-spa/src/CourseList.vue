<template>
    <div>
        <h1>CourseList</h1>
        <div>
            <div v-for="course in courses">
                <router-link :to="`/courses/${course.id}`">
                    <img :src="course.image">
                    {{course.name}}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import basicCourseImage from './assets/image/basicCourseImage.jpg';
    import advancedCourseImage from './assets/image/advancedCourseImage.jpg';
    import extremeCourseImage from './assets/image/extremeCourseImage.jpg';

    export default {
        data() {
            return {
                courses: [
                    {
                        id: 1,
                        image: basicCourseImage,
                        name: 'Basic Course',
                    },
                    {
                        id: 2,
                        image: advancedCourseImage,
                        name: 'Advanced Course',
                    },
                    {
                        id: 3,
                        image: extremeCourseImage,
                        name: 'Extreme Course',
                    },
                ],
            };
        },
    };
</script>
