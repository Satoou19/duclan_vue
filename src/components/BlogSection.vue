<script setup lang="ts">
const blogPosts = [
  {
    id: 1,
    title: 'Sơ Đồ Tìm Kiếm Báo Giá - Sản Phẩm',
    image: 'https://via.placeholder.com/250x150/E0E0E0/666666?text=Bai+1',
    category: 'Hướng dẫn',
    date: '2024-01-15',
  },
  {
    id: 2,
    title: 'Các Loại Công Nghệ In Ấn Hiện Nay',
    image: 'https://via.placeholder.com/250x150/E0E0E0/666666?text=Bai+2',
    category: 'Kiến thức',
    date: '2024-01-10',
  },
  {
    id: 3,
    title: 'Mực in phun INKTEK / INKTECH',
    image: 'https://via.placeholder.com/250x150/E0E0E0/666666?text=Bai+3',
    category: 'Sản phẩm',
    date: '2024-01-05',
  },
  {
    id: 4,
    title: 'In ấn là gì?',
    image: 'https://via.placeholder.com/250x150/E0E0E0/666666?text=Bai+4',
    category: 'Kiến thức',
    date: '2023-12-28',
  },
  {
    id: 5,
    title: 'Kho Hàng Đức Lan',
    image: 'https://via.placeholder.com/250x150/E0E0E0/666666?text=Bai+5',
    category: 'Công ty',
    date: '2023-12-20',
  },
  {
    id: 6,
    title: 'Top máy in đa chức năng đáng mua nhất',
    image: 'https://via.placeholder.com/250x150/E0E0E0/666666?text=Bai+6',
    category: 'Review',
    date: '2023-12-15',
  },
  {
    id: 7,
    title: 'Dây chuyền sản xuất mực tự động',
    image: 'https://via.placeholder.com/250x150/E0E0E0/666666?text=Bai+7',
    category: 'Công nghệ',
    date: '2023-12-10',
  },
  {
    id: 8,
    title: 'Ai là người phát minh ra máy photocopy?',
    image: 'https://via.placeholder.com/250x150/E0E0E0/666666?text=Bai+8',
    category: 'Lịch sử',
    date: '2023-12-05',
  },
]
</script>

<template>
  <div class="bg-gray-50 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <h2 class="text-2xl font-bold text-gray-800 mb-8">Bài viết trang chủ</h2>

      <!-- Blog Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <a
          v-for="post in blogPosts"
          :key="post.id"
          href="#"
          class="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition group cursor-pointer"
        >
          <!-- Image -->
          <div class="relative h-40 overflow-hidden bg-gray-200">
            <img :src="post.image" :alt="post.title" class="w-full h-full object-cover group-hover:scale-110 transition" />
          </div>

          <!-- Content -->
          <div class="p-4">
            <!-- Meta -->
            <div class="flex items-center gap-2 text-xs text-gray-500 mb-2">
              <span>📁 {{ post.category }}</span>
            </div>

            <!-- Title -->
            <h3 class="font-semibold text-gray-800 text-sm mb-3 line-clamp-2 group-hover:text-blue-600 transition">
              {{ post.title }}
            </h3>

            <!-- CTA -->
            <button class="text-blue-600 font-semibold text-sm hover:text-blue-700 transition flex items-center gap-2">
              Xem thêm
              <span class="text-lg">+</span>
            </button>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
