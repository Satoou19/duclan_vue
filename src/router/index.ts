import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/HomePage.vue'
import Placeholder from '@/pages/PlaceholderPage.vue'
import ProductCategory from '@/pages/ProductCategoryPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/san-pham',
    name: 'Products',
    component: ProductCategory,
  },
  {
    path: '/huong-dan-mua-hang',
    name: 'BuyingGuide',
    component: Placeholder,
  },
  {
    path: '/chinh-sach-ban-hang',
    name: 'SellingPolicy',
    component: Placeholder,
  },
  {
    path: '/tin-tuc',
    name: 'News',
    component: Placeholder,
  },
  {
    path: '/lien-he',
    name: 'Contact',
    component: Placeholder,
  },
  {
    path: '/doi-ngu-kinh-doanh',
    name: 'SalesTeam',
    component: Placeholder,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
