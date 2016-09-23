<template>
    <div class="content">
        
        <div id="pad-wrapper">
            <!-- grid examples -->
            <div class="grid-wrapper">
                <div class="row head">
                    <div class="col-md-12">
                        <h4>Grid <small>Example: Stacked-to-horizontal</small></h4>
                    </div>
                </div>

                <div class="row show-grid">
                    <div class="col-md-1">.col-md-1</div>
                    <div class="col-md-1">.col-md-1</div>
                    <div class="col-md-1">.col-md-1</div>
                    <div class="col-md-1">.col-md-1</div>
                    <div class="col-md-1">.col-md-1</div>
                    <div class="col-md-1">.col-md-1</div>
                    <div class="col-md-1">.col-md-1</div>
                    <div class="col-md-1">.col-md-1</div>
                    <div class="col-md-1">.col-md-1</div>
                    <div class="col-md-1">.col-md-1</div>
                    <div class="col-md-1">.col-md-1</div>
                    <div class="col-md-1">.col-md-1</div>
                </div>

                <div class="row show-grid">
                    <div class="col-md-8">.col-md-8</div>
                    <div class="col-md-4">.col-md-4</div>
                </div>

                <div class="row show-grid">
                    <div class="col-md-4">.col-md-4</div>
                    <div class="col-md-4">.col-md-4</div>
                    <div class="col-md-4">.col-md-4</div>
                </div>

                <div class="row show-grid">
                    <div class="col-md-6">.col-md-6</div>
                    <div class="col-md-6">.col-md-6</div>
                </div>                
            </div>

            <div class="grid-wrapper">
                <div class="row head">
                    <div class="col-md-12">
                        <h4>Grid <small>Example: Mobile and desktop</small></h4>
                    </div>
                </div>

                <div class="row show-grid">
                    <div class="col-xs-12 col-md-8">.col-xs-12 col-md-8</div>
                    <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
                </div>

                <div class="row show-grid">
                    <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
                    <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
                    <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
                </div>

                <div class="row show-grid"> 
                    <div class="col-xs-6">.col-xs-6</div>
                    <div class="col-xs-6">.col-xs-6</div>
                </div>
            </div>

        </div>
    </div>
    <!-- end main container -->


	<!-- scripts -->
    <script src="http://code.jquery.com/jquery-latest.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/theme.js"></script>
</template>

<script>
    export default {
        ready () {},
        data () {
            return {
                title: 'mok管理系统'
            }
        },
        components: {},
        methods: {}
    }
</script>

<style scoped>
    .grid-wrapper {
        margin-bottom: 60px;
    }
    .grid-wrapper .head {
        margin-bottom: 30px;
    }

    .show-grid {
        margin-top: 10px;
        margin-bottom: 20px;
    }
    .show-grid [class*="col-"] {
        background-color: #eee;
        text-align: center;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        min-height: 40px;
        line-height: 40px;
        border: 1px solid rgba(86, 61, 124, 0.2);
    }
</style>