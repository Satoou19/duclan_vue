<script setup lang="ts">
const blogPosts = [
  {
    id: 1,
    title: 'Sơ Đồ Tìm Kiếm Sản Phẩm',
    image:
      'https://admin.duclan.vn/uploads/ckfinder/images/Mayvanphong/Tin-Tuc/so-do-tim-kiem-bao-gia-san-pham-01-01.jpg',
    category: 'Hỗ Trợ Đặt Hàng',
    date: '16-07-2020',
    link: 'https://duclan.vn/so-do-tim-kiem-bao-gia-san-pham-93.html',
  },
  {
    id: 2,
    title: 'Dây chuyền sản xuất mực tự động',
    image:
      'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Home/Tin_Tuc/day-chuyen-san-xuat-muc-tu-dong.jpg',
    category: 'Thông tin về Doanh Nghiệp',
    date: '05-04-2018',
    link: 'https://duclan.vn/day-chuyen-san-xuat-muc-tu-dong-cua-cong-ty-duc-lan-70.html',
  },
  {
    id: 3,
    title: 'In ấn là gì ?',
    image: 'https://admin.duclan.vn/uploads/ckfinder/images/Mayvanphong/Tin-Tuc/in-an-la-gi.jpg',
    category: 'Thông Tin Về Công Nghệ',
    date: '06-08-2018',
    link: 'https://duclan.vn/in-an-la-gi-80.html',
  },
  {
    id: 4,
    title: 'Kho Hàng Đức Lan',
    image:
      'https://admin.duclan.vn/uploads/ckfinder/images/Mayvanphong/Tin-Tuc/hinh-kho-duc-lan(1).jpg',
    category: 'Hỗ Trợ Khách Hàng',
    date: '19-12-2023',
    link: 'https://duclan.vn/duong-dan-vao-kho-hang-cong-ty-mvp-duc-lan-114.html',
  },
  {
    id: 5,
    title: 'Các Loại Công Nghệ In Ấn Hiện Nay',
    image:
      'https://admin.duclan.vn/uploads/ckfinder/images/Mayvanphong/Tin-Tuc/cac-cong-ngheo-in-an-hien-nay.jpg',
    category: 'Thông Tin Về Công Nghệ',
    date: '06-08-2018',
    link: 'https://duclan.vn/cac-loai-cong-nghe-in-an-hien-nay-81.html',
  },
  {
    id: 6,
    title: 'Mực in phun INKTECK',
    image:
      'https://admin.duclan.vn/uploads/ckfinder/images/Mayvanphong/Tin-Tuc/muc_in_phun_inktech.jpg',
    category: 'Thông Tin Về Công Nghệ',
    date: '19-06-2023',
    link: 'https://duclan.vn/muc-in-phun-inkteck-108.html',
  },
  {
    id: 7,
    title: 'Ai là người phát minh ra máy photocopy ?',
    image:
      'https://admin.duclan.vn/uploads/ckfinder/images/gioithieu/lien_ket/nguoi-phat-minh-may-photocopy-dau-tien.jpg',
    category: 'Thông Tin Về Công Nghệ',
    date: '06-08-2018',
    link: 'https://duclan.vn/ai-la-nguoi-phat-minh-ra-may-photocopy-83.html',
  },
  {
    id: 8,
    title: 'Top máy in đa chức năng đáng mua',
    image:
      'https://admin.duclan.vn/uploads/ckfinder/images/Mayvanphong/Tin-Tuc/top-cac-may-in-hien-nay.jpg',
    category: 'Thông Tin Về Công Nghệ',
    date: '04-01-2018',
    link: 'https://duclan.vn/top-5-may-in-da-chuc-nang-dang-mua-nhat-63.html',
  },
]
</script>

<template>
  <div class="bg-gray-50 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-xl font-bold text-gray-800 mb-6">Bài viết trang chủ</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <a
          v-for="post in blogPosts"
          :key="post.id"
          :href="post.link"
          class="bg-white rounded overflow-hidden shadow-sm hover:shadow-md transition group cursor-pointer"
        >
          <div class="relative h-36 overflow-hidden bg-gray-200">
            <img
              :src="post.image"
              :alt="post.title"
              class="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
          </div>

          <div class="p-3">
            <div class="flex items-center gap-1 text-xs text-gray-400 mb-1.5">
              <span>{{ post.date }}</span>
              <span>•</span>
              <span>{{ post.category }}</span>
            </div>
            <h3
              class="font-semibold text-gray-800 text-sm mb-2 line-clamp-2 group-hover:text-blue-600 transition"
            >
              {{ post.title }}
            </h3>
            <span class="text-blue-600 font-semibold text-xs hover:text-blue-700 transition">
              Xem thêm +
            </span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
