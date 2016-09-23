<template>
	<!-- main container -->
    <div class="content">
        
        <!-- settings changer -->
        <div class="skins-nav">
            <a href="#" class="skin first_nav selected">
                <span class="icon"></span><span class="text">Default</span>
            </a>
            <a href="#" class="skin second_nav" data-file="css/compiled/skins/dark.css">
                <span class="icon"></span><span class="text">Dark skin</span>
            </a>
        </div>
        
        <div id="pad-wrapper" class="new-user">
            <div class="row header">
                <div class="col-md-12">
                    <h3>Create a new user</h3>
                </div>                
            </div>

            <div class="row form-wrapper">
                <!-- left column -->
                <div class="col-md-9 with-sidebar">
                    <div class="container">
                        <form class="new_user_form">
                            <div class="col-md-12 field-box">
                                <label>Name:</label>
                                <input class="form-control" type="text" />
                            </div>
                            <div class="col-md-12 field-box">
                                <label>State:</label>
                                <div class="ui-select span5">
                                    <select>
                                        <option value="AK">Alaska</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="CA">California</option>
                                        <option value="NV">Nevada</option>
                                        <option value="OR">Oregon</option>
                                        <option value="WA">Washington</option>
                                        <option value="AZ">Arizona</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-12 field-box">
                                <label>Company:</label>
                                <input class="col-md-9 form-control" type="text" />
                            </div>
                            <div class="col-md-12 field-box">
                                <label>Email:</label>
                                <input class="col-md-9 form-control" type="text" />
                            </div>
                            <div class="col-md-12 field-box">
                                <label>Phone:</label>
                                <input class="col-md-9 form-control" type="text" />
                            </div>
                            <div class="col-md-12 field-box">
                                <label>Website:</label>
                                <input class="col-md-9 form-control" type="text" />
                            </div>
                            <div class="col-md-12 field-box">
                                <label>Address:</label>
                                <div class="address-fields">
                                    <input class="form-control" type="text" placeholder="Street address" />
                                    <input class="small form-control" type="text" placeholder="City" />
                                    <input class="small form-control" type="text" placeholder="State" />
                                    <input class="small last form-control" type="text" placeholder="Postal Code" />
                                </div>
                            </div>
                            <div class="col-md-12 field-box textarea">
                                <label>Notes:</label>
                                <textarea class="col-md-9"></textarea>
                                <span class="charactersleft">90 characters remaining. Field limited to 100 characters</span>
                            </div>
                            <div class="col-md-11 field-box actions">
                                <input type="button" class="btn-glow primary" value="Create user">
                                <span>OR</span>
                                <input type="reset" value="Cancel" class="reset">
                            </div>
                        </form>
                    </div>
                </div>

                <!-- side right column -->
                <div class="col-md-3 form-sidebar pull-right">
                    <div class="btn-group toggle-inputs hidden-tablet">
                        <button class="glow left active" data-input="normal">NORMAL INPUTS</button>
                        <button class="glow right" data-input="inline">INLINE INPUTS</button>
                    </div>
                    <div class="alert alert-info hidden-tablet">
                        <i class="icon-lightbulb pull-left"></i>
                        Click above to see difference between inline and normal inputs on a form
                    </div>                        
                    <h6>Sidebar text for instructions</h6>
                    <p>Add multiple users at once</p>
                    <p>Choose one of the following file types:</p>
                    <ul>
                        <li><a href="#">Upload a vCard file</a></li>
                        <li><a href="#">Import from a CSV file</a></li>
                        <li><a href="#">Import from an Excel file</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- end main container -->


	<!-- scripts -->
    <script src="http://code.jquery.com/jquery-latest.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/theme.js"></script>

    <script type="text/javascript">
        $(function () {

            // toggle form between inline and normal inputs
            var $buttons = $(".toggle-inputs button");
            var $form = $("form.new_user_form");

            $buttons.click(function () {
                var mode = $(this).data("input");
                $buttons.removeClass("active");
                $(this).addClass("active");

                if (mode === "inline") {
                    $form.addClass("inline-input");
                } else {
                    $form.removeClass("inline-input");
                }
            });
        });
    </script>
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
    .new-user {
        /* form sidebar*/
    }
    .new-user .form-wrapper .with-sidebar {
        border-right: 1px solid #edeef1;
        box-shadow: 4px 0px 3px -1px rgba(226, 226, 226, 0.1);
    }
    .new-user .form-wrapper .container {
        width: 90%;
        float: left;
    }
    .new-user .form-wrapper .field-box {
        margin-bottom: 25px;
        margin-left: 0;
        float: left;
        width: 100%;
    }
    .new-user .form-wrapper label {
        display: inline-block;
        float: left;
        font-weight: 600;
        font-size: 13px;
        cursor: auto;
        width: 120px;
    }
    .new-user .form-wrapper input[type="text"] {
        margin: 0;
        padding: 3px 6px;
        width: 75%;
        display: inline-block;
    }
    .new-user .form-wrapper .address-fields {
        margin-left: 0px;
        float: left;
        width: 75%;
    }
    .new-user .form-wrapper .address-fields input[type="text"]:first-child {
        width: 100%;
    }
    .new-user .form-wrapper input.small {
        width: 27%;
        margin-top: 20px;
        margin-right: 20px;
    }
    .new-user .form-wrapper input.last {
        margin-right: 0;
    }
    .new-user .form-wrapper input:-moz-placeholder {
        font-style: italic;
    }
    .new-user .form-wrapper input:-ms-input-placeholder {
        font-style: italic;
    }
    .new-user .form-wrapper input::-webkit-input-placeholder {
        font-style: italic;
    }
    .new-user .form-wrapper textarea {
        height: 88px;
    }
    .new-user .textarea {
        margin-top: 27px;
    }
    .new-user .textarea span.charactersleft {
        color: #9ba0a5;
        display: inline-block;
        text-align: left;
        margin-left: 20%;
        margin-top: 8px;
        font-size: 13px;
        font-style: italic;
    }
    .new-user .actions {
        margin-top: 30px;
        text-align: right;
        padding-right: 40px;
    }
    .new-user .actions span {
        text-transform: uppercase;
        color: #7e91aa;
        font-weight: 600;
        display: inline-block;
        vertical-align: middle;
        margin: 0 2px 0 8px;
    }
    .new-user .actions input.reset {
        color: #7e91aa;
        font-weight: 500;
    }
    .new-user .form-sidebar .alert {
        margin: 20px 0px 60px 0px;
    }
    .new-user .form-sidebar .alert i {
        margin-bottom: 40px;
    }
    .new-user .form-sidebar h6 {
        font-weight: 600;
        text-transform: uppercase;
    }
    .new-user .form-sidebar p {
        color: #777e86;
    }
    .new-user .form-sidebar ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .new-user .form-sidebar ul a {
        text-decoration: underline;
    }

    /* responsive */
    @media (max-width: 767px) {
        .new-user .form-wrapper .container {
            width: 100%;
            padding-bottom: 20px;
            border-bottom: 1px solid #edeef1;
            box-shadow: 0px 4px 3px -1px rgba(226, 226, 226, 0.1);
        }
        .new-user .form-wrapper .with-sidebar {
            border-right: 0 none;
            box-shadow: none;
        }
        .new-user .form-wrapper label {
            margin: 0;
        }
        .new-user .form-wrapper .textarea label {
            width: 100%;
            text-align: left;
            margin-bottom: 10px;
        }
        .new-user .form-wrapper .textarea textarea {
            width: 97%;
        }
        .new-user .textarea span.charactersleft {
            display: inline-block;
            margin-left: 0;
        }
        .new-user .actions {
            margin-top: 0;
        }
        .new-user .form-sidebar {
            margin-top: 40px;
        }
    }
    @media (max-width: 979px) {
        .new-user .form-wrapper .address-fields {
            margin-top: 30px;
            width: 100%;
        }
        .new-user .form-wrapper input.small {
            width: inherit;
            margin: 20px 0px 0px 0px;
        }
    }
</style>