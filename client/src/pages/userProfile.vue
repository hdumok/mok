<template>
	<!-- main container -->
    <div class="content">
        
        <!-- settings changer -->
        <div class="skins-nav">
            <a href="#" class="skin first_nav selected">
                <span class="icon"></span><span class="text">Default</span>
            </a>
            <a href="#" class="skin second_nav" data-file="/static/css/compiled/skins/dark.css">
                <span class="icon"></span><span class="text">Dark skin</span>
            </a>
        </div>
        
        <div id="pad-wrapper" class="user-profile">
            <!-- header -->
            <div class="row header">
                <div class="col-md-8">
                    <img src="/static/img/contact-profile.png" class="avatar img-circle">
                    <h3 class="name">Alejandra Galván Castillo</h3>
                    <span class="area">Graphic Designer</span>
                </div>
                <a class="btn-flat icon pull-right delete-user" data-toggle="tooltip" title="Delete user" data-placement="top">
                    <i class="icon-trash"></i>
                </a>
                 <a class="btn-flat icon large pull-right edit">
                    Edit this person
                </a>
            </div>

            <div class="row profile">
                <!-- bio, new note & orders column -->
                <div class="col-md-9 bio">
                    <div class="profile-box">
                        <!-- biography -->
                        <div class="col-md-12 section">
                            <h6>Biography</h6>
                            <p>There are many variations of passages of Lorem Ipsum available but the majority have humour suffered alteration in believable some formhumour , by injected humour, or randomised words which don't look even slightly believable. </p>
                        </div>

                        <h6>Recent orders</h6>
                        <br>
                        <!-- recent orders table -->
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th class="col-md-2">
                                        Order ID
                                    </th>
                                    <th class="col-md-3">
                                        <span class="line"></span>
                                        Date
                                    </th>
                                    <th class="col-md-3">
                                        <span class="line"></span>
                                        Items
                                    </th>
                                    <th class="col-md-3">
                                        <span class="line"></span>
                                        Total amount
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- row -->
                                <tr class="first">
                                    <td>
                                        <a href="#">#459</a>
                                    </td>
                                    <td>
                                        Jan 03, 2013
                                    </td>
                                    <td>
                                        3
                                    </td>
                                    <td>
                                        $ 3,500.00
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#">#510</a>
                                    </td>
                                    <td>
                                        Feb 22, 2013
                                    </td>
                                    <td>
                                        5
                                    </td>
                                    <td>
                                        $ 800.00
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#">#618</a>
                                    </td>
                                    <td>
                                        Jan 03, 2013
                                    </td>
                                    <td>
                                        8
                                    </td>
                                    <td>
                                        $ 3,499.99
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <!-- new comment form -->
                        <div class="col-md-12 section comment">
                            <h6>Add a quick note</h6>
                            <p>Add a note about this user to keep a history of your interactions.</p>
                            <textarea></textarea>
                            <a href="#">Attach files</a>
                            <div class="col-md-12 submit-box pull-right">
                                <input type="submit" class="btn-glow primary" value="Add Note">
                                <span>OR</span>
                                <input type="reset" value="Cancel" class="reset">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- side address column -->
                <div class="col-md-3 col-xs-12 address pull-right">
                    <h6>Address</h6>
                    <iframe width="300" height="133" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com.mx/?ie=UTF8&amp;t=m&amp;ll=19.715081,-155.071421&amp;spn=0.010746,0.025749&amp;z=14&amp;output=embed"></iframe>
                    <ul>
                        <li>2301 East Lamar Blvd. Suite 140. </li>
                        <li>City, Arlington. United States,</li>
                        <li>Zip Code, TX 76006.</li>
                        <li class="ico-li">
                            <i class="ico-phone"></i>
                            1817 274 2933
                        </li>
                         <li class="ico-li">
                            <i class="ico-mail"></i>
                            <a href="#">alejandra@detail.com</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- end main container -->
</template>

<script>
    export default {
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
    .user-profile .header .avatar {
        float: left;
        margin-right: 25px;
        border: 2px solid #e9ecee;
        position: relative;
        top: 3px;
    }
    .user-profile .header .name {
        font-weight: 600;
        margin: 20px 0 8px 0;
        line-height: 26px;
        margin-bottom: 10px;
        float: none;
    }
    .user-profile .header span.area {
        color: #7d848c;
        font-style: italic;
        font-size: 14px;
    }
    .user-profile .header a.btn-flat {
        margin-top: 18px;
    }
    .user-profile .header a.delete-user {
        margin-left: 10px;
        font-size: 14px;
    }
    .user-profile .profile .profile-box {
        border-top: 1px solid #dde2e9;
        padding-top: 23px;
        width: 90%;
    }
    .user-profile .profile .section {
        margin-bottom: 80px;
    }
    .user-profile .profile .section.comment {
        margin-bottom: 100px;
        margin-top: 60px;
    }
    .user-profile .profile .bio {
        box-shadow: 4px 0px 3px -1px rgba(226, 226, 226, 0.1);
        border-right: 1px solid #edeef1;
    }
    .user-profile .profile .bio .span12 {
        margin-left: 0;
    }
    .user-profile .profile .bio h6 {
        font-weight: 600;
        font-size: 14px;
    }
    .user-profile .profile .bio p {
        color: #777e86;
    }
    .user-profile .profile .bio textarea {
        width: 97%;
        margin-bottom: 13px;
        height: 80px;
    }
    .user-profile .profile .bio .submit-box {
        text-align: right;
    }
    .user-profile .profile .bio .submit-box input.btn-flat {
        font-weight: 500;
    }
    .user-profile .profile .bio .submit-box span {
        text-transform: uppercase;
        color: #7e91aa;
        font-weight: 600;
        display: inline-block;
        vertical-align: middle;
        margin: 0 2px 0 8px;
    }
    .user-profile .profile .bio .submit-box input.reset {
        color: #7e91aa;
        font-weight: 500;
    }
    .user-profile .address h6 {
        font-weight: 600;
        font-size: 14px;
        margin-bottom: 30px;
        margin-left: 30px;
    }
    .user-profile .address iframe {
        width: 90%;
        margin-bottom: 30px;
        float: right;
    }
    .user-profile .address ul {
        padding: 0;
        margin-left: 30px;
        list-style: none;
    }
    .user-profile .address ul li {
        font-size: 13px;
        line-height: 21px;
    }
    .user-profile .address ul li.ico-li {
        margin: 7px 0 7px;
    }
    .user-profile .address ul i {
        display: inline-block;
        position: relative;
        top: 4px;
        margin-right: 7px;
    }
    .user-profile .address ul i.ico-mail {
        margin-right: 5px;
    }

    /* responsive */
    @media (min-width: 768px) and (max-width: 979px) {
        .user-profile .address ul {
            margin-left: 18px;
        }
        .user-profile .address ul i {
            display: none;
        }
        .user-profile .address ul li.ico-li {
            font-weight: bold;
        }
        .user-profile .address ul li.ico-li a {
            font-weight: normal;
        }
    }
    @media (max-width: 768px) {
        .user-profile .profile .bio {
            border-right: 0 none;
            border-bottom: 1px solid #edeef1;
            box-shadow: 0px 4px 3px -1px rgba(226, 226, 226, 0.1);
        }
        .user-profile .profile .bio .span12 {
            width: auto;
        }
        .user-profile .profile .profile-box {
            width: 100%;
        }
        .user-profile .address {
            margin-top: 44px;
        }
        .user-profile .address iframe {
            width: 100%;
        }
        .user-profile .address h6 {
            margin-left: 0;
        }
        .user-profile .address ul {
            margin: 0;
        }
        .user-profile .header a.btn-flat {
            margin: 0;
        }
        .user-profile .header a.edit {
            margin-right: 10px;
        }
    }
    @media (max-width: 480px) {
        .user-profile .header a.btn-flat {
            margin: 0;
        }
        .user-profile .header a.edit {
            margin-right: 10px;
        }
    }
</style>