<template>
    <div>
        <div class="container">
            <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
            >
                <b-carousel-slide :img-src="require('@/assets/img/광화문.jpg')">
                <h1>FFYCNIC</h1>
                <h2>FFYNIC과 함께 여행을 시작 할까요?</h2><br>
                </b-carousel-slide>

                <b-carousel-slide :img-src="require('@/assets/img/부산.jpg')">
                <h1>부산</h1>
                <h2>어디가 좋노</h2><br>
                </b-carousel-slide>

                <b-carousel-slide :img-src="require('@/assets/img/제주도.jpg')">
                <h1>새로운 제주 발견!</h1>
                <h2>제주도 올레길</h2><br>
                <h4>함께 걸어보실까요?</h4>
                </b-carousel-slide>

                <b-carousel-slide :img-src="require('@/assets/img/속초.jpg')">
                <h3>속초</h3>
                <h2>어떤 단풍보다도</h2><br>
                <h1>다채로운 속초 여행</h1>
                </b-carousel-slide>

                <b-carousel-slide :img-src="require('@/assets/img/전라도.jpg')">
                <h3>전주</h3>
                <h2>한옥 마을</h2><br>
                <h1>지금, 전라도를 즐기기 참 좋은 날</h1>
                </b-carousel-slide>
            </b-carousel>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
            slide: 0,
            sliding: null
            }
        },
        methods: {
            onSlideStart() {
            this.sliding = true
            },
            onSlideEnd() {
            this.sliding = false
            }
        }
    }
</script>

<style>

</style>