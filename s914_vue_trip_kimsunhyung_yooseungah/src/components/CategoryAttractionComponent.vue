    <template>
        <div class="container">
            <div class="pad">

            </div>
            
            <div>
                
                <div>
                    <h3>여행지 찾기ddd</h3>
                </div>
                <div class="parent">
                    <b-form v-if="show">
                    <b-row>
                        <b-col class="col-md-5">
                            <b-form-group id="input-group-1" label-for="input-1">
                                <b-form-select
                                    id="input-1"
                                    v-model="form.sido"
                                    :options="sidos"
                                    required
                                ></b-form-select>
                            </b-form-group>
                        </b-col>
                    
                    <b-col class="col-md-5">
                    <b-form-group id="input-group-2" label-for="input-2">
                        <b-form-select
                            id="input-2"
                            v-model="form.type"
                            :options="types"
                            required
                        ></b-form-select>
                    </b-form-group>
                    </b-col>
                   <b-col class="col-md-2">
                    <b-button type="button" @click="goAttractionList">검색</b-button>
                   </b-col>
                    </b-row>
                    </b-form>
                </div>

                <div class="pad"></div>
            </div>

        </div>
    </template>
 
    <script>
    export default {
        data() {
            return {
                form: {
                    sido: null,
                    type:null
                },
                sidos: [{ text: '시/도', value: null },'서울','인천','대전','대구','광주','부산','울산','세종특별자치시','경기도','강원도','충청북도','충청남도','경상북도','경상남도','전라북도','전라남도','제주도'],
                types:[{text:'카테고리',value:null},'관광지','문화시설','축제공연행사','여행코스','레포츠','숙박','쇼핑','음식점'],
                show: true
            }
        },
        methods:{
            goAttractionList(){
                if(this.form.sido==null){
                    alert("시/도를 선택하세요.");
                }
                else if(this.form.type==null){
                    alert("카테고리를 선택하세요.");
                }else{
                    this.$router.push({name:"list", query:{ sido_name : this.form.sido, content_type_name: this.form.type}});
                }
            }
        }
    }
    </script>
    
    <style>
    .container {
        font-family: arial;
        font-size: 24px;
        margin: 100px auto;
    }
    .parent {
        margin: auto;
        justify-content: center;
        width:100%;
    }
    .pad {
        margin-top:5%;
    }
    </style>