<template>
    <div class="container">
        <div>
            <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="0"
            controls
            >

            <!-- Slides with custom text -->
            <b-carousel-slide>
                <template slot="img">
                    <b-row>
                        <b-col class="col-md-4">
                            <b-card
                                title="Card Title"
                                img-src="https://picsum.photos/600/300/?image=25"
                                img-alt="Image"
                                img-top
                                tag="article"
                                style="max-width: 20rem;"
                                class="mb-2">
                                <b-card-text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                </b-card-text>

                                <b-button href="#" variant="primary">Go somewhere</b-button>
                            </b-card>
                        </b-col>

                        <b-col class="col-md-4">
                            <b-card
                                title="Card Title"
                                :img-src=src
                                img-alt="Image"
                                img-top
                                tag="article"
                                style="max-width: 20rem;"
                                class="mb-2">
                                <b-card-text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                </b-card-text>

                                <b-button href="#" variant="primary">Go somewhere</b-button>
                            </b-card>
                        </b-col>
                        <b-col class="col-md-4">
                            <b-card
                                title="Card Title"
                                img-src="http://tong.visitkorea.or.kr/cms/resource/21/2657021_image2_1.jpg"
                                img-alt="Image"
                                img-top
                                tag="article"
                                style="max-width: 20rem; background-color:red;"
                                class="mb-2">
                                <b-card-text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                </b-card-text>

                                <b-button href="#" variant="primary">Go somewhere</b-button>
                            </b-card>
                        </b-col>
                    </b-row>
                </template>
            </b-carousel-slide>

            <b-carousel-slide>
                <template slot="img">
                    <b-row>
                        <b-col class="col-md-4">
                            <b-card
                                title="Card Title"
                                img-src="https://picsum.photos/600/300/?image=25"
                                img-alt="Image"
                                img-top
                                tag="article"
                                style="max-width: 20rem;"
                                class="mb-2">
                                <b-card-text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                </b-card-text>

                                <b-button href="#" variant="primary">Go somewhere</b-button>
                            </b-card>
                        </b-col>

                        <b-col class="col-md-4">
                            <b-card
                                title="Card Title"
                                :img-src=src
                                img-alt="Image"
                                img-top
                                tag="article"
                                style="max-width: 20rem;"
                                class="mb-2">
                                <b-card-text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                </b-card-text>

                                <b-button href="#" variant="primary">Go somewhere</b-button>
                            </b-card>
                        </b-col>
                        <b-col class="col-md-4">
                            <b-card
                                title="Card Title"
                                :img-src=src
                                img-alt="Image"
                                img-top
                                tag="article"
                                style="max-width: 20rem;"
                                class="mb-2">
                                <b-card-text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                </b-card-text>

                                <b-button href="#" variant="primary">Go somewhere</b-button>
                            </b-card>
                        </b-col>
                    </b-row>
                </template>
            </b-carousel-slide>
            
            </b-carousel>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            src:"https://picsum.photos/600/300/?image=27"
        };
    }
}
</script>

<style>
    .container {
        font-family: arial;
        font-size: 10px;
        margin: 0px auto;
    }
    
</style>

