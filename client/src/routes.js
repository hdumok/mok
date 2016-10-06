'use strict'

export default {
  '/': {
    component (resolve) {
      require(['pages/index.vue'], resolve)
    }
  },
  '/signin': {
    component (resolve) {
      require(['pages/signin.vue'], resolve)
    }
  },
  '/signup': {
    component (resolve) {
      require(['pages/signup.vue'], resolve)
    }
  },
  '/wechat': {
    component (resolve) {
      require(['pages/wechat.vue'], resolve)
    }
  },
  '/userList': {
    component (resolve) {
      require(['pages/userList.vue'], resolve)
    }
  },
  '/newUser': {
    component (resolve) {
      require(['pages/newUser.vue'], resolve)
    }
  },
  '/userProfile': {
    component (resolve) {
      require(['pages/userProfile.vue'], resolve)
    }
  },
  '/chartShowcase': {
    component (resolve) {
      require(['pages/chartShowcase.vue'], resolve)
    }
  },
  '/datatables': {
    component (resolve) {
      require(['pages/datatables.vue'], resolve)
    }
  },
  '/formShowcase': {
    component (resolve) {
      require(['pages/formShowcase.vue'], resolve)
    }
  },
  '/formWizard': {
    component (resolve) {
      require(['pages/formWizard.vue'], resolve)
    }
  },
  '/gallery': {
    component (resolve) {
      require(['pages/gallery.vue'], resolve)
    }
  },
  '/grids': {
    component (resolve) {
      require(['pages/grids.vue'], resolve)
    }
  },
  '/icons': {
    component (resolve) {
      require(['pages/icons.vue'], resolve)
    }
  },
  '/personalInfo': {
    component (resolve) {
      require(['pages/personalInfo.vue'], resolve)
    }
  },
  '/tables': {
    component (resolve) {
      require(['pages/tables.vue'], resolve)
    }
  }
}
