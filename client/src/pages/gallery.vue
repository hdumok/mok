<template>
    <div class="content">

        <div id="pad-wrapper" class="gallery">
            <div class="row header">
                <div class="col-md-12">
                    <h3>Gallery</h3>
                </div>                
            </div>

            <!-- gallery wrapper -->
            <div class="gallery-wrapper">
                <div class="row gallery-row">
                    <!-- single image -->
                    <div class="col-md-3 img-container">
                        <div class="img-box">
                            <span class="icon edit">
                                <a data-toggle="modal" href="#myModal"><i class="gallery-edit"></i></a>
                            </span>
                            <span class="icon trash">
                                <i class="gallery-trash"></i>
                            </span>
                            <img src="/static/img/gallery3.jpg" class="img-responsive" />
                            <p class="title">
                                Beach pic title
                            </p>
                        </div>
                    </div>
                    <!-- single image -->
                    <div class="col-md-3 img-container">
                        <div class="img-box">
                            <span class="icon edit">
                                <a data-toggle="modal" href="#myModal"><i class="gallery-edit"></i></a>
                            </span>
                            <span class="icon trash">
                                <i class="gallery-trash"></i>
                            </span>
                            <img src="/static/img/gallery2.jpg" class="img-responsive" />
                            <p class="title">
                                Beach pic title 2 
                            </p>
                        </div>
                    </div>
                    <!-- single image -->
                    <div class="col-md-3 img-container">
                        <div class="img-box">
                            <span class="icon edit">
                                <a data-toggle="modal" href="#myModal"><i class="gallery-edit"></i></a>
                            </span>
                            <span class="icon trash">
                                <i class="gallery-trash"></i>
                            </span>
                            <img src="/static/img/gallery1.jpg" class="img-responsive" />
                            <p class="title">
                                Beach pic title 3
                            </p>
                        </div>
                    </div>
                    <!-- single image -->
                    <div class="col-md-3 img-container">
                        <div class="img-box">
                            <span class="icon edit">
                                <a data-toggle="modal" href="#myModal"><i class="gallery-edit"></i></a>
                            </span>
                            <span class="icon trash">
                                <i class="gallery-trash"></i>
                            </span>
                            <img src="/static/img/gallery3.jpg" class="img-responsive" />
                            <p class="title">
                                Beach pic title
                            </p>
                        </div>
                    </div> 
                </div>
                <div class="row gallery-row">
                    <!-- single image -->
                    <div class="col-md-3 img-container">
                        <div class="img-box">
                            <span class="icon edit">
                                <a data-toggle="modal" href="#myModal"><i class="gallery-edit"></i></a>
                            </span>
                            <span class="icon trash">
                                <i class="gallery-trash"></i>
                            </span>
                            <img src="/static/img/gallery2.jpg" class="img-responsive" />
                            <p class="title">
                                Beach pic title 2 
                            </p>
                        </div>
                    </div>
                    <!-- single image -->
                    <div class="col-md-3 img-container">
                        <div class="img-box">
                            <span class="icon edit">
                                <a data-toggle="modal" href="#myModal"><i class="gallery-edit"></i></a>
                            </span>
                            <span class="icon trash">
                                <i class="gallery-trash"></i>
                            </span>
                            <img src="/static/img/gallery1.jpg" class="img-responsive" />
                            <p class="title">
                                Beach pic title 3
                            </p>
                        </div>
                    </div>

                    <!-- new image button -->
                    <div class="col-md-3 new-img">
                        <a data-toggle="modal" href="#myModal">
                            <img src="/static/img/new-gallery-img.png" class="img-responsive" />
                        </a>
                    </div>                    
                </div>
            </div>
            <!-- end gallery wrapper -->

            <!-- blank state -->
            <div class="no-gallery">
                <div class="row header">
                    <div class="col-md-12">
                        <h3>Gallery Blank State</h3>
                    </div>
                </div>
                <div class="center">
                    <img src="/static/img/no-img-gallery.png">
                    <h6>You don't have any images</h6>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                    <a data-toggle="modal" href="#myModal" class="btn-glow primary">Add new image</a>
                </div>
            </div>
            <!-- end blank state -->
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 class="modal-title">Add new image</h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal" role="form">
                    <div class="form-group">
                        <label for="input1" class="col-lg-2 control-label">Image:</label>
                        <div class="col-lg-10">
                            <input type="file" id="input1" class="pull-left" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="input1" class="col-lg-2 control-label">Description:</label>
                        <div class="col-lg-10">
                          <input type="text" class="form-control" id="inputPassword1" placeholder="Description">
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
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
    .gallery .gallery-wrapper {
        text-align: center;
        position: relative;
    }
    .gallery .img-container {
        margin-bottom: 50px;
    }
    .gallery .img-container .img-box {
        display: inline-block;
        position: relative;
    }
    .gallery .img-container .img-box:hover span {
        visibility: visible;
    }
    .gallery .img-container img {
        border: 4px solid #dff0fd;
        border-radius: 3px;
        cursor: pointer;
    }
    .gallery .img-container .title {
        margin-top: 5px;
        font-size: 13px;
    }
    .gallery .img-container .icon {
        position: absolute;
        background: rgba(56, 156, 240, 0.8);
        height: 48px;
        width: 48px;
        visibility: hidden;
        left: 41%;
        border-radius: 100%;
        cursor: pointer;
        text-align: center;
    }
    .gallery .img-container i {
        display: inline-block;
        margin-top: 14px;
    }
    .gallery .img-container span.edit {
        top: 23%;
    }
    .gallery .img-container span.trash {
        top: 48%;
    }
    .gallery .new-img {
        display: inline-block;
    }
    .gallery .new-img img {
        border: 2px dashed #dee3e8;
        cursor: pointer;
        margin-bottom: 50px;
    }
    .gallery .new-img img:hover {
        opacity: 0.8;
        border-color: #ccc;
    }

    /* gallery blank state */
    .no-gallery {
        border-top: 1px solid #edeff1;
        padding-top: 40px;
        box-shadow: 0px 4px 9px -6px rgba(0, 0, 0, 0.12) inset;
        margin-bottom: 100px;
    }
    .no-gallery .center {
        margin: 0 auto;
        text-align: center;
        width: 42%;
    }
    .no-gallery .center h6 {
        color: #364453;
        font-weight: 600;
        margin: 30px 0 9px;
        font-size: 15px;
    }
    .no-gallery .center p {
        color: #364453;
        font-size: 13px;
    }
    .no-gallery .center a {
        margin-top: 30px;
    }

    /*Responsive*/
    @media (max-width: 979px) {
        .gallery .popup {
            display: none;
        }
    }

</style>