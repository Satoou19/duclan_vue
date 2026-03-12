<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)
const cartCount = ref(0)
const printCount = ref(0)
const searchQuery = ref('')
const searchType = ref('product')
const expandedCategories = ref<{ [key: string]: boolean }>({})

const categories = [
  {
    id: 'may-van-phong',
    name: 'Máy văn phòng',
    subcategories: [
      { name: 'Máy photo đa năng', link: 'https://duclan.vn/may-photo-da-nang-47.cat' },
      { name: 'Máy In Laser', link: 'https://duclan.vn/may-in-laser-739.cat' },
      { name: 'Máy In Phun', link: 'https://duclan.vn/may-in-phun-702.cat' },
      { name: 'Máy Scan', link: 'https://duclan.vn/may-scan-822.cat' },
      { name: 'Máy hút bụi', link: 'https://duclan.vn/may-hut-bui-730.cat' },
      { name: 'Chân Máy', link: 'https://duclan.vn/chan-may-547.cat' },
    ],
  },
  {
    id: 'vat-tu-photocopy',
    name: 'Vật tư photocopy',
    subcategories: [
      { name: 'Mực', link: 'https://duclan.vn/muc-631.cat' },
      { name: 'Cụm Từ', link: 'https://duclan.vn/cum-tu-276.cat' },
      { name: 'Cụm Trống', link: 'https://duclan.vn/cum-drum-275.cat' },
      { name: 'Cụm Băng Tải', link: 'https://duclan.vn/cum-bang-tai-277.cat' },
      { name: 'Cụm Sấy', link: 'https://duclan.vn/cum-say-274.cat' },
      { name: 'Chíp', link: 'https://duclan.vn/chip-muc-747.cat' },
      { name: 'Dây Curoa', link: 'https://duclan.vn/day-curoa-143.cat' },
      { name: 'Lấy Giấy', link: 'https://duclan.vn/lay-giay-36.cat' },
      { name: 'Linh Kiện Khác', link: 'https://duclan.vn/linh-kien-khac-833.cat' },
    ],
  },
  {
    id: 'vat-tu-in-laser',
    name: 'Vật tư in laser',
    subcategories: [
      { name: 'Mực Nạp', link: 'https://duclan.vn/muc-nap-734.cat' },
      { name: 'Hộp Mực Máy In', link: 'https://duclan.vn/hop-muc-may-in-123.cat' },
      { name: 'Linh Kiện Máy in', link: 'https://duclan.vn/linh-kien-may-in-611.cat' },
      { name: 'Linh Kiện Hộp Mực', link: 'https://duclan.vn/linh-kien-hop-muc-93.cat' },
    ],
  },
  {
    id: 'vat-tu-in-phun',
    name: 'Vật tư in phun',
    subcategories: [
      { name: 'Mực Nước (Dye)', link: 'https://duclan.vn/muc-nuoc-689.cat' },
      { name: 'Mực Nhiệt (Sublimation)', link: 'https://duclan.vn/muc-nhiet-697.cat' },
      { name: 'Mực Dầu (Pigment)', link: 'https://duclan.vn/muc-dau-pigment-690.cat' },
      { name: 'Mực UV', link: 'https://duclan.vn/muc-uv-590.cat' },
    ],
  },
  {
    id: 'vat-tu-in-barcode',
    name: 'Vật tư in barcode',
    subcategories: [
      { name: 'Ruy Băng Mực', link: 'https://duclan.vn/ruy-bang-809.cat' },
      { name: 'Giấy In Barcode/ Bill', link: 'https://duclan.vn/giay-in-barcode-bill-810.cat' },
    ],
  },
  {
    id: 'vat-tu-in-kim',
    name: 'Vật tư in kim',
    subcategories: [
      { name: 'Ruy Băng', link: 'https://duclan.vn/ruy-bang-100.cat' },
      { name: 'Linh Kiện', link: 'https://duclan.vn/linh-kien-180.cat' },
    ],
  },
]

const toggleCategory = (id: string) => {
  expandedCategories.value[id] = !expandedCategories.value[id]
}
const handleSearch = () => {
  if (searchQuery.value.trim()) console.log('Search:', searchQuery.value)
}
</script>

<template>
  <div style="width: 100%; background: white; font-family: Arial, sans-serif">
    <!-- ROW 1: Kính chào + SĐT — nền xanh đậm -->
    <div
      style="
        background: #1a8fd1;
        color: white;
        font-size: 14px;
        font-weight: 500;
        padding: 7px 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      "
    >
      <span>Kính chào quý khách</span>
      <a href="tel:02839306464" style="color: white; text-decoration: none; font-weight: 600">
        028.39306464 ( Tổng đài )
      </a>
    </div>

    <!-- ROW 2: Tuyển dụng | Giờ làm | Theo dõi đơn hàng -->
    <div
      style="
        background: white;
        border-bottom: 1px solid #e0e0e0;
        font-size: 14px;
        color: #444;
        padding: 8px 24px;
        display: flex;
        align-items: center;
        gap: 0;
      "
    >
      <a
        href="https://duclan.vn/tuyen-dung-24.cat.html"
        style="
          color: #333;
          text-decoration: none;
          font-weight: 700;
          padding-right: 16px;
          border-right: 1px solid #ccc;
          margin-right: 16px;
          white-space: nowrap;
        "
      >
        Thông Tin Tuyển Dụng
      </a>
      <span style="flex: 1; white-space: nowrap">
        Thứ 2 đến Thứ 6: 7h45 – 17h30, Thứ 7: 7h45 – 12h5
      </span>
      <a href="#" style="color: #444; text-decoration: none; white-space: nowrap">
        Theo dõi trạng thái đơn hàng
      </a>
    </div>

    <!-- ROW 3: Logo + Search + Actions -->
    <div
      style="
        background: white;
        padding: 14px 24px;
        display: flex;
        align-items: center;
        gap: 16px;
        border-bottom: 1px solid #e8e8e8;
      "
    >
      <!-- Logo -->
      <a
        href="/"
        style="
          text-decoration: none;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-right: 12px;
        "
      >
        <div
          style="
            background: #d32f2f;
            color: white;
            font-size: 28px;
            font-weight: 900;
            width: 46px;
            height: 46px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
            font-family: Georgia, 'Times New Roman', serif;
            flex-shrink: 0;
          "
        >
          M
        </div>
        <span
          style="
            color: #d32f2f;
            font-size: 32px;
            font-weight: 900;
            letter-spacing: 2px;
            white-space: nowrap;
          "
          >ĐỨC LAN</span
        >
      </a>

      <!-- Danh mục sản phẩm button -->
      <div style="position: relative; flex-shrink: 0" class="cat-wrap">
        <button
          class="cat-btn"
          style="
            border: 2px solid #1a8fd1;
            color: #1a8fd1;
            background: white;
            border-radius: 6px;
            padding: 10px 18px;
            font-size: 15px;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;
            height: 54px;
            min-width: 190px;
            line-height: 1.35;
            text-align: left;
            white-space: nowrap;
          "
        >
          <svg
            width="20"
            height="16"
            fill="none"
            stroke="#1a8fd1"
            stroke-width="2.5"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span>Danh mục sản<br />phẩm</span>
        </button>

        <!-- Dropdown menu -->
        <div
          class="cat-dropdown"
          style="
            position: absolute;
            left: 0;
            top: 100%;
            z-index: 1000;
            width: 280px;
            background: white;
            border: 1px solid #ddd;
            border-radius: 6px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
            display: none;
          "
        >
          <div v-for="cat in categories" :key="cat.id" style="border-bottom: 1px solid #f0f0f0">
            <button
              @click="toggleCategory(cat.id)"
              style="
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 11px 16px;
                font-size: 14px;
                font-weight: 700;
                color: #333;
                background: none;
                border: none;
                cursor: pointer;
                text-align: left;
              "
              onmouseover="this.style.background='#e8f4fd'; this.style.color='#1a8fd1'"
              onmouseout="this.style.background='white'; this.style.color='#333'"
            >
              <span>{{ cat.name }}</span>
              <span style="font-size: 18px; color: #aaa; font-weight: 400">
                {{ expandedCategories[cat.id] ? '−' : '+' }}
              </span>
            </button>
            <div v-if="expandedCategories[cat.id]" style="background: #f8f8f8">
              <a
                v-for="sub in cat.subcategories"
                :key="sub.name"
                :href="sub.link"
                style="
                  display: block;
                  padding: 8px 30px;
                  font-size: 13.5px;
                  color: #555;
                  text-decoration: none;
                "
                onmouseover="this.style.color='#1a8fd1'; this.style.background='white'"
                onmouseout="this.style.color='#555'; this.style.background='transparent'"
                >{{ sub.name }}</a
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Search bar -->
      <div style="flex: 1; display: flex; height: 54px; max-width: 540px">
        <div style="position: relative; flex-shrink: 0">
          <select
            v-model="searchType"
            style="
              border: 1px solid #ccc;
              border-right: none;
              border-radius: 6px 0 0 6px;
              height: 54px;
              padding: 0 36px 0 14px;
              font-size: 15px;
              color: #444;
              background: white;
              cursor: pointer;
              appearance: none;
              -webkit-appearance: none;
              min-width: 150px;
            "
          >
            <option value="product">Tim sản phẩm</option>
            <option value="machine">Tìm mã máy</option>
          </select>
          <svg
            style="
              position: absolute;
              right: 10px;
              top: 50%;
              transform: translateY(-50%);
              pointer-events: none;
            "
            width="13"
            height="13"
            fill="#888"
            viewBox="0 0 20 20"
          >
            <path
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            />
          </svg>
        </div>
        <input
          v-model="searchQuery"
          @keyup.enter="handleSearch"
          type="text"
          placeholder="Nhập sản phẩm cần tìm kiếm..."
          style="
            flex: 1;
            border: 1px solid #ccc;
            border-right: none;
            height: 54px;
            padding: 0 14px;
            font-size: 15px;
            outline: none;
          "
        />
        <button
          @click="handleSearch"
          style="
            background: #1a8fd1;
            color: white;
            border: none;
            border-radius: 0 6px 6px 0;
            height: 54px;
            padding: 0 28px;
            font-size: 15px;
            font-weight: 700;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            flex-shrink: 0;
          "
          onmouseover="this.style.background='#1565c0'"
          onmouseout="this.style.background='#1a8fd1'"
        >
          Tìm
          <svg
            width="18"
            height="18"
            fill="none"
            stroke="white"
            stroke-width="2.5"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </div>

      <!-- Right actions: Tài khoản | In báo giá | Giỏ hàng -->
      <div style="display: flex; align-items: center; gap: 8px; margin-left: auto; flex-shrink: 0">
        <!-- Tài khoản -->
        <a
          href="https://duclan.vn/dang-nhap"
          style="
            display: flex;
            align-items: center;
            gap: 8px;
            color: #333;
            text-decoration: none;
            font-size: 15px;
            font-weight: 600;
            padding: 10px 16px;
            border: 1px solid #ddd;
            border-radius: 6px;
            white-space: nowrap;
          "
          onmouseover="this.style.background='#f5f5f5'"
          onmouseout="this.style.background='white'"
        >
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          Tài khoản
        </a>

        <!-- In báo giá -->
        <a
          href="https://duclan.vn/xem-bao-gia"
          style="
            display: flex;
            align-items: center;
            gap: 8px;
            color: #333;
            text-decoration: none;
            font-size: 15px;
            font-weight: 600;
            padding: 10px 16px;
            border: 1px solid #ddd;
            border-radius: 6px;
            position: relative;
            white-space: nowrap;
          "
          onmouseover="this.style.background='#f5f5f5'"
          onmouseout="this.style.background='white'"
        >
          <div style="position: relative">
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <polyline points="6 9 6 2 18 2 18 9" />
              <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
              <rect x="6" y="14" width="12" height="8" />
            </svg>
            <span
              style="
                position: absolute;
                top: -9px;
                right: -9px;
                background: #1a8fd1;
                color: white;
                border-radius: 50%;
                width: 18px;
                height: 18px;
                font-size: 11px;
                font-weight: 800;
                display: flex;
                align-items: center;
                justify-content: center;
              "
              >{{ printCount }}</span
            >
          </div>
          In báo giá
        </a>

        <!-- Giỏ hàng -->
        <button
          style="
            display: flex;
            align-items: center;
            gap: 8px;
            color: #333;
            background: white;
            font-size: 15px;
            font-weight: 600;
            padding: 10px 16px;
            border: 1px solid #ddd;
            border-radius: 6px;
            cursor: pointer;
            white-space: nowrap;
            position: relative;
          "
          onmouseover="this.style.background='#f5f5f5'"
          onmouseout="this.style.background='white'"
        >
          <div style="position: relative">
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            <span
              style="
                position: absolute;
                top: -9px;
                right: -9px;
                background: #1a8fd1;
                color: white;
                border-radius: 50%;
                width: 18px;
                height: 18px;
                font-size: 11px;
                font-weight: 800;
                display: flex;
                align-items: center;
                justify-content: center;
              "
              >{{ cartCount }}</span
            >
          </div>
          Giỏ hàng
        </button>

        <!-- Mobile toggle -->
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden"
          style="
            padding: 10px;
            background: none;
            border: 1px solid #ddd;
            border-radius: 6px;
            cursor: pointer;
          "
        >
          <svg
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- NAV BAR -->
    <nav
      style="
        background: #eeeeee;
        border-bottom: 1px solid #ddd;
        position: sticky;
        top: 0;
        z-index: 100;
        /* always on top */
      "
    >
      <div style="padding: 0 24px; display: flex; align-items: center">
        <!-- Home icon -->
        <router-link
          to="/"
          style="
            padding: 14px 14px;
            display: flex;
            align-items: center;
            color: #333;
            text-decoration: none;
            flex-shrink: 0;
          "
          onmouseover="this.style.color='#1a8fd1'"
          onmouseout="this.style.color='#333'"
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
            />
          </svg>
        </router-link>

        <!-- Sản phẩm -->
        <div style="position: relative" class="nav-item">
          <button
            class="nav-btn"
            style="
              padding: 14px 16px;
              background: none;
              border: none;
              cursor: pointer;
              font-size: 15px;
              font-weight: 700;
              color: #333;
              display: flex;
              align-items: center;
              gap: 5px;
              white-space: nowrap;
            "
          >
            Sản phẩm
            <svg width="11" height="11" fill="#666" viewBox="0 0 20 20">
              <path
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              />
            </svg>
          </button>
          <div
            class="nav-dropdown"
            style="
              position: absolute;
              left: 0;
              top: 100%;
              width: 210px;
              background: white;
              border: 1px solid #ddd;
              border-radius: 4px;
              box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
              z-index: 999;
              display: none;
            "
          >
            <a href="https://duclan.vn/san-pham-moi" class="nav-dd-item">Sản phẩm mới</a>
            <a href="https://duclan.vn/san-pham-noi-bat" class="nav-dd-item">Sản phẩm nổi bật</a>
          </div>
        </div>

        <!-- Thương hiệu -->
        <div style="position: relative" class="nav-item">
          <button
            class="nav-btn"
            style="
              padding: 14px 16px;
              background: none;
              border: none;
              cursor: pointer;
              font-size: 15px;
              font-weight: 700;
              color: #333;
              display: flex;
              align-items: center;
              gap: 5px;
              white-space: nowrap;
            "
          >
            Thương hiệu
            <svg width="11" height="11" fill="#666" viewBox="0 0 20 20">
              <path
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              />
            </svg>
          </button>
          <div
            class="nav-dropdown"
            style="
              position: absolute;
              left: 0;
              top: 100%;
              width: 210px;
              background: white;
              border: 1px solid #ddd;
              border-radius: 4px;
              box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
              z-index: 999;
              display: none;
            "
          >
            <a
              v-for="b in [
                'Ricoh',
                'Toshiba',
                'Canon',
                'Sharp',
                'Fuji-Xerox',
                'Kyocera Mita',
                'Konica-Minolta',
                'HP',
                'SamSung',
                'Epson',
                'Brother',
                'Pantum',
              ]"
              :key="b"
              href="#"
              class="nav-dd-item"
              >{{ b }}</a
            >
          </div>
        </div>

        <!-- Chính Sách Bán Hàng -->
        <div style="position: relative" class="nav-item">
          <button
            class="nav-btn"
            style="
              padding: 14px 16px;
              background: none;
              border: none;
              cursor: pointer;
              font-size: 15px;
              font-weight: 700;
              color: #333;
              display: flex;
              align-items: center;
              gap: 5px;
              white-space: nowrap;
            "
          >
            Chính Sách Bán Hàng
            <svg width="11" height="11" fill="#666" viewBox="0 0 20 20">
              <path
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              />
            </svg>
          </button>
          <div
            class="nav-dropdown"
            style="
              position: absolute;
              left: 0;
              top: 100%;
              width: 220px;
              background: white;
              border: 1px solid #ddd;
              border-radius: 4px;
              box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
              z-index: 999;
              display: none;
            "
          >
            <a href="https://duclan.vn/tieu-chi-ban-hang-31.cat.html" class="nav-dd-item"
              >Tiêu Chí Bán Hàng</a
            >
            <a href="https://duclan.vn/bao-mat-thong-tin-34.cat.html" class="nav-dd-item"
              >Bảo Mật Thông Tin</a
            >
            <a href="https://duclan.vn/he-thong-phan-phoi-33.cat.html" class="nav-dd-item"
              >Hệ thống phân phối</a
            >
            <a href="https://duclan.vn/chinh-sach-doi-tra-32.cat.html" class="nav-dd-item"
              >Chính sách đổi trả</a
            >
          </div>
        </div>

        <!-- Chính Sách Mua Hàng -->
        <div style="position: relative" class="nav-item">
          <button
            class="nav-btn"
            style="
              padding: 14px 16px;
              background: none;
              border: none;
              cursor: pointer;
              font-size: 15px;
              font-weight: 700;
              color: #333;
              display: flex;
              align-items: center;
              gap: 5px;
              white-space: nowrap;
            "
          >
            Chính Sách Mua Hàng
            <svg width="11" height="11" fill="#666" viewBox="0 0 20 20">
              <path
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              />
            </svg>
          </button>
          <div
            class="nav-dropdown"
            style="
              position: absolute;
              left: 0;
              top: 100%;
              width: 220px;
              background: white;
              border: 1px solid #ddd;
              border-radius: 4px;
              box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
              z-index: 999;
              display: none;
            "
          >
            <a href="https://duclan.vn/ho-tro-khach-hang-14.cat.html" class="nav-dd-item"
              >Hỗ Trợ Khách Hàng</a
            >
            <a href="https://duclan.vn/ho-tro-dat-hang-15.cat.html" class="nav-dd-item"
              >Hỗ Trợ Đặt Hàng</a
            >
            <a href="https://duclan.vn/bang-tra-ma-hang-27.cat.html" class="nav-dd-item"
              >Bảng Tra Mã Hàng</a
            >
          </div>
        </div>

        <!-- Tin Tức -->
        <div style="position: relative" class="nav-item">
          <button
            class="nav-btn"
            style="
              padding: 14px 16px;
              background: none;
              border: none;
              cursor: pointer;
              font-size: 15px;
              font-weight: 700;
              color: #333;
              display: flex;
              align-items: center;
              gap: 5px;
              white-space: nowrap;
            "
          >
            Tin Tức
            <svg width="11" height="11" fill="#666" viewBox="0 0 20 20">
              <path
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              />
            </svg>
          </button>
          <div
            class="nav-dropdown"
            style="
              position: absolute;
              left: 0;
              top: 100%;
              width: 220px;
              background: white;
              border: 1px solid #ddd;
              border-radius: 4px;
              box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
              z-index: 999;
              display: none;
            "
          >
            <a href="https://duclan.vn/thong-tin-ve-cong-nghe-20.cat.html" class="nav-dd-item"
              >Thông Tin Về Công Nghệ</a
            >
          </div>
        </div>

        <a
          href="https://duclan.vn/bao-gia"
          class="nav-link"
          style="
            padding: 14px 16px;
            color: #333;
            text-decoration: none;
            font-size: 15px;
            font-weight: 700;
            white-space: nowrap;
          "
          >Báo Giá</a
        >
        <a
          href="/lien-he"
          class="nav-link"
          style="
            padding: 14px 16px;
            color: #333;
            text-decoration: none;
            font-size: 15px;
            font-weight: 700;
            white-space: nowrap;
          "
          >Liên hệ</a
        >
        <a
          href="https://duclan.vn/lien-he-kinh-doanh"
          class="nav-link"
          style="
            padding: 14px 16px;
            color: #333;
            text-decoration: none;
            font-size: 15px;
            font-weight: 700;
            white-space: nowrap;
          "
          >Đội ngũ kinh doanh</a
        >

        <!-- Khuyến mãi badge: "Giảm tận 30%" + "Khuyến mãi" — cuối nav, y chang ảnh -->
        <div style="margin-left: auto; flex-shrink: 0; display: flex; height: 100%">
          <a
            href="#"
            style="display: flex; align-items: center; text-decoration: none; height: 50px"
          >
            <!-- Phần "Giảm tận 30%" — xanh đậm + arrow phải -->
            <div
              style="
                background: #1565c0;
                color: white;
                font-size: 14px;
                font-weight: 800;
                padding: 0 20px 0 20px;
                height: 50px;
                display: flex;
                align-items: center;
                white-space: nowrap;
                clip-path: polygon(
                  0 0,
                  calc(100% - 12px) 0,
                  100% 50%,
                  calc(100% - 12px) 100%,
                  0 100%
                );
                padding-right: 28px;
              "
            >
              Giảm tận 30%
            </div>
            <!-- Phần "Khuyến mãi" — xanh nhạt + arrow trái -->
            <div
              style="
                background: #1a8fd1;
                color: white;
                font-size: 14px;
                font-weight: 800;
                padding: 0 20px;
                height: 50px;
                display: flex;
                align-items: center;
                white-space: nowrap;
                clip-path: polygon(12px 0, 100% 0, 100% 100%, 12px 100%, 0 50%);
                margin-left: -2px;
                padding-left: 22px;
              "
            >
              Khuyến mãi
            </div>
          </a>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div
      v-show="isMenuOpen"
      style="background: white; border-top: 1px solid #eee; max-height: 350px; overflow-y: auto"
    >
      <div style="padding: 8px 16px">
        <router-link
          to="/"
          @click="isMenuOpen = false"
          style="
            display: block;
            padding: 12px 8px;
            color: #333;
            text-decoration: none;
            font-size: 15px;
            border-bottom: 1px solid #f5f5f5;
          "
          >🏠 Trang chủ</router-link
        >
        <a
          href="https://duclan.vn/san-pham-moi"
          style="
            display: block;
            padding: 12px 8px;
            color: #333;
            text-decoration: none;
            font-size: 15px;
            border-bottom: 1px solid #f5f5f5;
          "
          >Sản phẩm mới</a
        >
        <a
          href="https://duclan.vn/san-pham-noi-bat"
          style="
            display: block;
            padding: 12px 8px;
            color: #333;
            text-decoration: none;
            font-size: 15px;
            border-bottom: 1px solid #f5f5f5;
          "
          >Sản phẩm nổi bật</a
        >
        <a
          href="https://duclan.vn/bao-gia"
          style="
            display: block;
            padding: 12px 8px;
            color: #333;
            text-decoration: none;
            font-size: 15px;
            border-bottom: 1px solid #f5f5f5;
          "
          >Báo giá</a
        >
        <a
          href="/lien-he"
          style="
            display: block;
            padding: 12px 8px;
            color: #333;
            text-decoration: none;
            font-size: 15px;
            border-bottom: 1px solid #f5f5f5;
          "
          >Liên hệ</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Cat dropdown hiện khi hover nút */
.cat-wrap:hover .cat-dropdown {
  display: block !important;
}
.cat-wrap:hover .cat-btn {
  color: #1a8fd1 !important;
}

/* Nav dropdown hiện khi hover */
.nav-item:hover .nav-dropdown {
  display: block !important;
}
.nav-item:hover .nav-btn {
  color: #1a8fd1 !important;
}

/* Link thường trong nav */
.nav-link:hover {
  color: #1a8fd1 !important;
}

/* Items trong dropdown */
.nav-dd-item {
  display: block;
  padding: 10px 18px;
  font-size: 14px;
  color: #333;
  text-decoration: none;
}
.nav-dd-item:hover {
  background: #f0f0f0;
  color: #1a8fd1;
}
</style>
