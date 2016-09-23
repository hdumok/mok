<template>
  <div class="content">
        <div id="pad-wrapper">
            
            <!-- products table-->
            <!-- the script for the toggle all checkboxes from header is located in js/theme.js -->
            <div class="table-wrapper products-table section">
                <div class="row head">
                    <div class="col-md-12">
                        <h4>Products</h4>
                    </div>
                </div>

                <div class="row filter-block">
                    <div class="pull-right">
                        <div class="ui-select">
                            <select>
                              <option>Filter users</option>
                              <option>Signed last 30 days</option>
                              <option>Active users</option>
                            </select>
                        </div>
                        <input type="text" class="search">
                        <a class="btn-flat success new-product">+ Add product</a>
                    </div>
                </div>

                <div class="row">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th class="col-md-3">
                                    <input type="checkbox">
                                    Product
                                </th>
                                <th class="col-md-3">
                                    <span class="line"></span>Description
                                </th>
                                <th class="col-md-3">
                                    <span class="line"></span>Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- row -->
                            <tr class="first">
                                <td>
                                    <input type="checkbox">
                                    <div class="img">
                                        <img src="/static/img/table-img.png">
                                    </div>
                                    <a href="#" class="name">Generate Lorem </a>
                                </td>
                                <td class="description">
                                    if you are going to use a passage of Lorem Ipsum.
                                </td>
                                <td>
                                    <span class="label label-success">Active</span>
                                    <ul class="actions">
                                        <li><a href="#">Edit</a></li>
                                        <li class="last"><a href="#">Delete</a></li>
                                    </ul>
                                </td>
                            </tr>
                            <!-- row -->
                            <tr>
                                <td>
                                    <input type="checkbox">
                                    <div class="img">
                                        <img src="/static/img/table-img.png">
                                    </div>
                                    <a href="#" class="name">Internet tend</a>
                                </td>
                                <td class="description">
                                    There are many variations of passages.
                                </td>
                                <td>
                                    <ul class="actions">
                                        <li><a href="#">Edit</a></li>
                                        <li class="last"><a href="#">Delete</a></li>
                                    </ul>
                                </td>
                            </tr>
                            <!-- row -->
                            <tr>
                                <td>
                                    <input type="checkbox">
                                    <div class="img">
                                        <img src="/static/img/table-img.png">
                                    </div>
                                    <a href="#" class="name">Generate Lorem </a>
                                </td>
                                <td class="description">
                                    if you are going to use a passage of Lorem Ipsum.
                                </td>
                                <td>
                                    <ul class="actions">
                                        <li><a href="#">Edit</a></li>
                                        <li class="last"><a href="#">Delete</a></li>
                                    </ul>
                                </td>
                            </tr>
                            <!-- row -->
                            <tr>
                                <td>
                                    <input type="checkbox">
                                    <div class="img">
                                        <img src="/static/img/table-img.png">
                                    </div>
                                    <a href="#" class="name">Internet tend</a>
                                </td>
                                <td class="description">
                                    There are many variations of passages.
                                </td>
                                <td>
                                    <span class="label label-info">Standby</span>
                                    <ul class="actions">
                                        <li><a href="#">Edit</a></li>
                                        <li class="last"><a href="#">Delete</a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox">
                                    <div class="img">
                                        <img src="/static/img/table-img.png">
                                    </div>
                                    <a href="#" class="name">Generate Lorem </a>
                                </td>
                                <td class="description">
                                    if you are going to use a passage of Lorem Ipsum.
                                </td>
                                <td>
                                    <span class="label label-success">Active</span>
                                    <ul class="actions">
                                        <li><a href="#">Edit</a></li>
                                        <li class="last"><a href="#">Delete</a></li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- end products table -->

            <!-- orders table -->
            <div class="table-wrapper orders-table section">
                <div class="row head">
                    <div class="col-md-12">
                        <h4>Orders</h4>
                    </div>
                </div>

                <div class="row filter-block">
                    <div class="pull-right">
                        <div class="btn-group pull-right">
                            <button class="glow left large">All</button>
                            <button class="glow middle large">Pending</button>
                            <button class="glow right large">Completed</button>
                        </div>
                        <input type="text" class="search order-search" placeholder="Search for an order.." />
                    </div>
                </div>

                <div class="row">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th class="col-md-2">
                                    Order ID
                                </th>
                                <th class="col-md-2">
                                    <span class="line"></span>
                                    Date
                                </th>
                                <th class="col-md-2">
                                    <span class="line"></span>
                                    Name
                                </th>
                                <th class="col-md-2">
                                    <span class="line"></span>
                                    Status
                                </th>
                                <th class="col-md-2">
                                    <span class="line"></span>
                                    Items
                                </th>
                                <th class="col-md-2">
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
                                    <a href="#">John Smith</a>
                                </td>
                                <td>
                                    <span class="label label-success">Completed</span>
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
                                    <a href="#">Anna Richards</a>
                                </td>
                                <td>
                                    <span class="label label-info">Pending</span>
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
                                    <a href="#">#590</a>
                                </td>
                                <td>
                                    Mar 03, 2013
                                </td>
                                <td>
                                    <a href="#">Steven McFly</a>
                                </td>
                                <td>
                                    <span class="label label-success">Completed</span>
                                </td>
                                <td>
                                    2
                                </td>
                                <td>
                                    $ 1,350.00
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
                                    <a href="#">George Williams</a>
                                </td>
                                <td>
                                    <span class="label">Canceled</span>
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
                </div>
            </div>
            <!-- end orders table -->

            <!-- users table -->
            <div class="table-wrapper users-table section">
                <div class="row head">
                    <div class="col-md-12">
                        <h4>Users</h4>
                    </div>
                </div>

                <div class="row filter-block">
                    <div class="pull-right">
                        <a class="btn-flat pull-right success new-product add-user">+ Add user</a>
                        <input type="text" class="search user-search" placeholder="Search for users.." />
                    </div>
                </div>

                <div class="row">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th class="col-md-4">
                                    Name
                                </th>
                                <th class="col-md-3">
                                    <span class="line"></span>Signed up
                                </th>
                                <th class="col-md-2">
                                    <span class="line"></span>Total spent
                                </th>
                                <th class="col-md-3 align-right">
                                    <span class="line"></span>Email
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- row -->
                            <tr class="first">
                                <td>
                                    <img src="/static/img/contact-img.png" class="img-circle avatar hidden-phone" />
                                    <a href="user-profile.html" class="name">Alejandra Galvan Castillo</a>
                                    <span class="subtext">Graphic Design</span>
                                </td>
                                <td>
                                    Jan 11, 2012
                                </td>
                                <td>
                                    $ 500.00
                                </td>
                                <td class="align-right">
                                    <a href="#">alejandra@gmail.com</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="/static/img/contact-img2.png" class="img-circle avatar hidden-phone" />
                                    <a href="user-profile.html" class="name">Alejandra Galvan Castillo</a>
                                    <span class="subtext">Graphic Design</span>
                                </td>
                                <td>
                                    Apr 23, 2012
                                </td>
                                <td>
                                    $ 3,210.00
                                </td>
                                <td class="align-right">
                                    <a href="#">alejandra@gmail.com</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="/static/img/contact-img.png" class="img-circle avatar hidden-phone" />
                                    <a href="user-profile.html" class="name">Alejandra Galvan Castillo</a>
                                    <span class="subtext">Graphic Design</span>
                                </td>
                                <td>
                                    Feb 03, 2013
                                </td>
                                <td>
                                    $ 890.00
                                </td>
                                <td class="align-right">
                                    <a href="#">alejandra@gmail.com</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="/static/img/contact-img2.png" class="img-circle avatar hidden-phone" />
                                    <a href="user-profile.html" class="name">Alejandra Galvan Castillo</a>
                                    <span class="subtext">Graphic Design</span>
                                </td>
                                <td>
                                    Sep 19, 2012
                                </td>
                                <td>
                                    $ 899.99
                                </td>
                                <td class="align-right">
                                    <a href="#">alejandra@gmail.com</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- end users table -->
        </div>
    </div>
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
    /* general table styles */
    .table-wrapper {
        width: 100%;
        margin-bottom: 100px;
    }
    .table-wrapper .filter-block {
        margin-bottom: 34px;
    }
    .table-wrapper .filter-block .ui-select {
        margin-right: 20px;
        top: 1px;
        height: 24px;
        width: 150px;
    }
    .table-wrapper .filter-block .search {
        margin: 0 60px 0 0;
    }
    .table-wrapper .filter-block .new-product {
        padding: 4px 14px;
    }
    .table-wrapper .table th input[type="checkbox"] {
        margin-top: 4px;
    }
    .table-wrapper .table input[type="checkbox"] {
        float: left;
        margin-top: 11px;
        margin-right: 23px;
    }
    .table-wrapper .table .img {
        height: 31px;
        float: left;
        background: white;
        width: 31px;
        border: 1px solid #dfe4eb;
        text-align: center;
        cursor: pointer;
        margin-right: 23px;
    }
    .table-wrapper .table .img img {
        margin-top: 4px;
    }
    .table-wrapper .table tr.first td {
        border-top: 0 none;
    }
    .table-wrapper .table td a {
        text-decoration: underline;
        display: inline-block;
    }
    .table-wrapper .table td.description {
        vertical-align: middle;
        color: #516372;
    }
    .table-wrapper .table ul.actions {
        margin: 5px 0 0 0;
        padding: 0;
        float: right;
    }
    .table-wrapper .table ul.actions li {
        display: inline;
        padding: 5px 6px 0px 3px;
    }
    .table-wrapper .table ul.actions li.last {
        border: 0 none;
    }
    .table-wrapper .table ul.actions i {
        cursor: pointer;
        opacity: 0.6;
        transition: opacity .1s linear;
        -moz-transition: opacity .1s linear;
        -webkit-transition: opacity .1s linear;
        -o-transition: opacity .1s linear;
    }
    .table-wrapper .table ul.actions i:hover {
        opacity: 1;
    }
    .table-wrapper .label {
        position: relative;
    }

    /* products table specific styles */
    .table-wrapper.products-table a.name {
        position: relative;
        top: 6px;
    }

    /* orders table specific styles */
    .table-wrapper.orders-table td {
        padding: 12px 8px;
    }

    /* users table specific styles */
    .table-wrapper.users-table .table td {
        vertical-align: middle;
        font-size: 13px;
    }
    .table-wrapper.users-table .table img.avatar {
        float: left;
        margin-right: 14px;
        max-width: 45px;
        position: relative;
        top: 8px;
    }
    .table-wrapper.users-table .table a.name {
        color: #3389d1;
        display: block;
        font-weight: 600;
        font-size: 14px;
        margin: 15px 0 0 0;
    }
    .table-wrapper.users-table .table .subtext {
        font-size: 12px;
        margin-left: 0;
        color: #778391;
        font-style: italic;
        margin-top: 0;
    }

    /*Responsive*/
    @media (max-width: 979px) {
        .pointer {
            top: 26.8%;
        }
    }
    @media (max-width: 768px) {
        .table-wrapper {
            padding: 0px 15px;
        }
        .table-wrapper .table .img,
        .table-wrapper .table .avatar {
            display: none;
        }
        .table-wrapper .table input[type="checkbox"] {
            margin-right: 10px;
        }
        .table-wrapper .table .label {
            display: none;
        }
        .table-wrapper .filter-block .search {
            width: 30%;
            margin: 0 10px 0 0;
        }
        .table-wrapper .filter-block .order-search {
            float: left;
            margin: 0;
            width: 40%;
        }
        .table-wrapper .filter-block .user-search {
            float: left;
            margin: 0;
            width: 55%;
        }
        .table-wrapper .filter-block .add-user {
            margin-top: 0;
        }
    }
    @media (max-width: 480px) {
        .table-wrapper .filter-block .search {
            float: right;
            width: 48%;
            margin: 0;
        }
        .table-wrapper .filter-block .new-product {
            float: right;
            margin-top: 15px;
        }
        .table-wrapper .filter-block .order-search {
            float: left;
            width: 43%;
        }
        .table-wrapper .filter-block .add-user {
            margin-top: 0;
        }
        .table-wrapper .filter-block .user-search {
            float: left;
            margin: 0;
            width: 55%;
        }
    }
</style>