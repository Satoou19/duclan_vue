<script setup lang="ts">
const brands = [
  {
    name: 'Ricoh',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Home/Logo/Manufacturers/Ricoh.png',
    link: 'https://duclan.vn/ricoh-3.manu',
  },
  {
    name: 'Toshiba',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Home/Logo/Manufacturers/TOSHIBA.png',
    link: 'https://duclan.vn/toshiba-1.manu',
  },
  {
    name: 'Canon',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Home/Logo/Manufacturers/Canon.png',
    link: 'https://duclan.vn/canon-4.manu',
  },
  {
    name: 'Sharp',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Home/Logo/Manufacturers/sharp.png',
    link: 'https://duclan.vn/sharp-6.manu',
  },
  {
    name: 'Fuji-Xerox',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Model/FUJI-XEROX.png',
    link: 'https://duclan.vn/fuji-xerox-7.manu',
  },
  {
    name: 'Kyocera Mita',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Home/Logo/Manufacturers/KYOCERA.png',
    link: 'https://duclan.vn/kyocera-mita-8.manu',
  },
  {
    name: 'Konica Minolta',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Home/Logo/Manufacturers/minolta.png',
    link: 'https://duclan.vn/konica-minolta-11.manu',
  },
  {
    name: 'HP',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Home/Logo/Manufacturers/hp.png',
    link: 'https://duclan.vn/hp-5.manu',
  },
  {
    name: 'SamSung',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Model/SAMSUNG.png',
    link: 'https://duclan.vn/samsung-13.manu',
  },
  {
    name: 'Epson',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Home/Logo/Manufacturers/EPSON.png',
    link: 'https://duclan.vn/epson-10.manu',
  },
  {
    name: 'Brother',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Home/Logo/Manufacturers/Brother.png',
    link: 'https://duclan.vn/brother-16.manu',
  },
  {
    name: 'Pantum',
    logo: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Model/PANTUM-1.png',
    link: 'https://duclan.vn/pantum-180.manu',
  },
]
</script>

<template>
  <div style="background: white; padding: 20px 24px 24px">
    <div style="display: flex; gap: 20px; align-items: flex-start">
      <!-- ===== LEFT: Tìm theo máy ===== -->
      <div
        style="
          width: 260px;
          flex-shrink: 0;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 18px 16px 20px;
          background: white;
        "
      >
        <!-- Title -->
        <div
          style="
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 16px;
            color: #d32f2f;
            font-size: 15px;
            font-weight: 800;
          "
        >
          <!-- Printer icon -->
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="#d32f2f"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <polyline points="6 9 6 2 18 2 18 9" />
            <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
            <rect x="6" y="14" width="12" height="8" />
          </svg>
          Tìm theo máy
        </div>

        <!-- Select 1: Thương hiệu -->
        <div style="position: relative; margin-bottom: 12px">
          <select
            style="
              width: 100%;
              border: 1px solid #ccc;
              border-radius: 4px;
              padding: 10px 32px 10px 12px;
              font-size: 14px;
              color: #555;
              background: white;
              cursor: pointer;
              appearance: none;
              -webkit-appearance: none;
            "
          >
            <option>-- Chọn thương hiệu --</option>
            <option>Ricoh</option>
            <option>Toshiba</option>
            <option>Canon</option>
            <option>Sharp</option>
            <option>Fuji-Xerox</option>
            <option>Kyocera Mita</option>
            <option>Konica-Minolta</option>
            <option>HP</option>
            <option>SamSung</option>
            <option>Epson</option>
            <option>Brother</option>
            <option>Pantum</option>
          </select>
          <svg
            style="
              position: absolute;
              right: 10px;
              top: 50%;
              transform: translateY(-50%);
              pointer-events: none;
            "
            width="12"
            height="12"
            fill="#888"
            viewBox="0 0 20 20"
          >
            <path
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            />
          </svg>
        </div>

        <!-- Select 2: Phần tử -->
        <div style="position: relative; margin-bottom: 12px">
          <select
            style="
              width: 100%;
              border: 1px solid #ccc;
              border-radius: 4px;
              padding: 10px 32px 10px 12px;
              font-size: 14px;
              color: #555;
              background: white;
              cursor: pointer;
              appearance: none;
              -webkit-appearance: none;
            "
          >
            <option>-- Chọn phần tử --</option>
          </select>
          <svg
            style="
              position: absolute;
              right: 10px;
              top: 50%;
              transform: translateY(-50%);
              pointer-events: none;
            "
            width="12"
            height="12"
            fill="#888"
            viewBox="0 0 20 20"
          >
            <path
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            />
          </svg>
        </div>

        <!-- Select 3: Phần tử -->
        <div style="position: relative; margin-bottom: 16px">
          <select
            style="
              width: 100%;
              border: 1px solid #ccc;
              border-radius: 4px;
              padding: 10px 32px 10px 12px;
              font-size: 14px;
              color: #555;
              background: white;
              cursor: pointer;
              appearance: none;
              -webkit-appearance: none;
            "
          >
            <option>-- Chọn phần tử --</option>
          </select>
          <svg
            style="
              position: absolute;
              right: 10px;
              top: 50%;
              transform: translateY(-50%);
              pointer-events: none;
            "
            width="12"
            height="12"
            fill="#888"
            viewBox="0 0 20 20"
          >
            <path
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            />
          </svg>
        </div>

        <!-- Tìm kiếm button -->
        <button
          style="
            width: 100%;
            background: #1a8fd1;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 12px;
            font-size: 15px;
            font-weight: 700;
            cursor: pointer;
          "
          onmouseover="this.style.background='#1565c0'"
          onmouseout="this.style.background='#1a8fd1'"
        >
          Tìm kiếm
        </button>
      </div>

      <!-- ===== RIGHT: Brand logos grid ===== -->
      <div style="flex: 1">
        <!--
          Layout y chang ảnh:
          Row 1: 5 logo (Ricoh, Toshiba, Canon, Sharp, Fuji-Xerox)
          Row 2: 5 logo (Kyocera, Konica, HP, Samsung, Epson)
          Row 3: 2 logo (Brother, Pantum)
        -->
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px">
          <a
            v-for="brand in brands"
            :key="brand.name"
            :href="brand.link"
            style="
              display: flex;
              align-items: center;
              justify-content: center;
              border: 1px solid #e0e0e0;
              border-radius: 6px;
              padding: 18px 12px;
              background: white;
              transition: border-color 0.15s;
              min-height: 80px;
            "
            onmouseover="this.style.borderColor='#1a8fd1'; this.style.boxShadow='0 2px 10px rgba(26,143,209,0.18)'"
            onmouseout="this.style.borderColor='#e0e0e0'; this.style.boxShadow='none'"
          >
            <img
              :src="brand.logo"
              :alt="brand.name"
              style="max-height: 44px; max-width: 100%; object-fit: contain"
              onerror="this.style.display='none'; this.parentElement.innerHTML += '<span style=&quot;font-size:13px;font-weight:700;color:#555;&quot;>' + this.alt + '</span>'"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
