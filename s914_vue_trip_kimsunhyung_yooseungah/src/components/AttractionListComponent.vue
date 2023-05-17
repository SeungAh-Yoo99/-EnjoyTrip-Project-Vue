<template>
    <div class="container">
        <div class="pad"></div>
        <div>
            <div>
                <h3>{{this.form.sido}} • {{this.form.type}}의 여행지</h3>
            </div>
        
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            form: {
                    sido: null,
                    type:null
                }
        };
    },
    created(){
       
        this.getList(this.$route.params.form);
    },
    methods:{
        getList(form){

            this.form.sido=form.sido;
            this.form.type=form.type;
        }
    }
    
}
</script>

<style>
</style>