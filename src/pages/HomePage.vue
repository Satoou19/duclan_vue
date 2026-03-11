<script setup lang="ts">
import Header from '@/components/AppHeader.vue'
import Footer from '@/components/AppFooter.vue'
import HeroBanner from '@/components/HeroBanner.vue'
import FeatureCategories from '@/components/FeatureCategories.vue'
import BrandLogos from '@/components/BrandLogos.vue'
import ProductCarousel from '@/components/ProductCarousel.vue'
import BlogSection from '@/components/BlogSection.vue'

const banners = [
  {
    id: 1,
    image: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Home/Banner/banner-home-1.jpg',
    title: '',
    cta: 'Xem ngay',
    link: '#',
  },
  {
    id: 2,
    image: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Home/Banner/banner-home-2.jpg',
    title: '',
    cta: 'Mua ngay',
    link: 'https://mayvanphongduclan.com/may-in-laser-739.cat',
  },
  {
    id: 3,
    image: 'https://admin.duclan.vn/uploads/ckfinder/images/duclan/Home/Banner/banner-home-3.jpg',
    title: '',
    cta: 'Gọi Ngay',
    link: 'https://mayvanphongduclan.com/may-in-laser-739.cat',
  },
]

const mayVanPhong = [
  {
    id: 1,
    name: 'Máy in HP LaserJet Enterprise M611dn (Nhập khẩu)',
    code: 'OEM_52447',
    price: '18.815.000 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/MAYINHM501DN-7585.jpg',
    link: 'https://duclan.vn/may-in-hp-laserjet-pro-m501dn-j8h61a--7585',
  },
  {
    id: 2,
    name: 'Máy in màu đa chức năng Canon Laser MF651CW (Nhập Khẩu)',
    code: 'OEM_50480',
    price: '9.275.000 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/50480-8180.jpg',
    link: 'https://duclan.vn/may-in-mau-da-chuc-nang-canon-laser-mf651cw-8180',
  },
  {
    id: 3,
    name: 'Máy in màu đa chức năng Canon Laser MF754Cdw (Nhập khẩu)',
    code: 'OEM_52113',
    price: '12.720.000 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52113(1)-8399.jpg',
    link: 'https://duclan.vn/may-in-mau-da-chuc-nang-canon-laser-mf754cdw-8399',
  },
  {
    id: 4,
    name: 'Máy in đa chức năng HP LaserJet MFP M236sdw (9YG09A)- (Chính Hãng)',
    code: 'Chính Hãng_1289',
    price: '6.095.000 đ',
    image:
      'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/neverstop_laser_mfp_1200w-(1)-7624.jpg',
    link: 'https://duclan.vn/may-in-hp-neverstop-laser-mfp-1200a-7624',
  },
  {
    id: 5,
    name: 'Máy in đa chức năng HP laser Neverstop MFP 1200a(4QD21A)- (Chính Hãng)',
    code: 'Chính Hãng_51497',
    price: '3.180.000 đ',
    image:
      'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/neverstop_laser_mfp_1200w-(1)-7624.jpg',
    link: 'https://duclan.vn/may-in-hp-neverstop-laser-mfp-1200a-7624',
  },
  {
    id: 6,
    name: 'Máy in màu đa chức năng Canon Laser MF657CDW (Nhập Khẩu)',
    code: 'OEM_50346',
    price: '10.600.000 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/50346-5375.jpg',
    link: 'https://duclan.vn/may-in-mau-da-chuc-nang-canon-laser-mf657cdw-5375',
  },
  {
    id: 7,
    name: 'Máy in màu Canon Laser LBP 722Cdw (Nhập khẩu)',
    code: 'OEM_52498',
    price: '9.805.000 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52498-1200x1200-8758.jpg',
    link: 'https://duclan.vn/may-in-mau-canon-laser-lbp-722cdw-8758',
  },
  {
    id: 8,
    name: 'Máy in màu đa chức năng Canon Laser MF752Cdw (Nhập khẩu)',
    code: 'OEM_50576',
    price: '11.660.000 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/50576-8133.jpg',
    link: 'https://duclan.vn/may-in-mau-canon-laser-lbp-752cdw-8133',
  },
  {
    id: 9,
    name: 'Máy in đa chức năng Canon laser MF275dw (Nhập khẩu)',
    code: 'OEM_52561',
    price: '7.420.000 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52561-1200x1200-8819.jpg',
    link: 'https://duclan.vn/máy-in-da-chúc-nang-canon-laser-mf275dw-8819',
  },
  {
    id: 10,
    name: 'Máy in màu đa chức năng HP LaserJet Pro M283fdw (Nhập Khẩu)',
    code: 'OEM_50371',
    price: '13.515.000 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/50371-8109.jpg',
    link: 'https://duclan.vn/may-in-mau-da-chuc-nang-hp-laserjet-pro-m283fdw-7kw75a--8109',
  },
  {
    id: 11,
    name: 'Máy in HP LaserJet Enterprise M507dn (1PV87A) (Nhập Khẩu)',
    code: 'OEM_50798',
    price: '14.045.000 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/50798-7069.jpg',
    link: 'https://duclan.vn/may-in-hp-laserjet-enterprise-m507dn-7069',
  },
  {
    id: 12,
    name: 'Máy in màu Canon Laser LBP 633CDW (Nhập Khẩu)',
    code: 'OEM_50481',
    price: '6.572.000 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/50481-1200x1200--8125.jpg',
    link: 'https://duclan.vn/may-in-mau-canon-laser-lbp-633cdw-8125',
  },
]

const vatTuPhotocopy = [
  {
    id: 101,
    name: 'Mực gói Ricoh MP2554/3054/3554/4054/5054(1Kg)',
    code: 'WA_50892',
    price: '350.000 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/50892-7290.jpg',
    link: 'https://duclan.vn/muc-goi-ricoh-6054-7290',
  },
  {
    id: 102,
    name: 'Mực gói Ricoh Aficio MPC 3002/4502/5502(M) 500g',
    code: 'WA_52316',
    price: '610.000 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52316-1200x1200-8577.jpg',
    link: 'https://duclan.vn/muc-goi-ricoh-mp-c-3002-3502-4502-5502-m-500g-8577',
  },
  {
    id: 103,
    name: 'Trống Ricoh MP C8002/C6502 (ES-MP8002)',
    code: 'ES_51577',
    price: '769.000 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/51577-7687.jpg',
    link: 'https://duclan.vn/trong-ricoh-mp-c8002-c6502-es-mp8002--7687',
  },
  {
    id: 104,
    name: 'Mực gói Ricoh E 4500C/5500C/ MP C6000/7500 -xanh',
    code: 'JJ_50983',
    price: '464.000 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/50983-7254.jpg',
    link: 'https://duclan.vn/muc-goi-ricoh-e-4500c-5500c-mp-c6000-7500-xanh-7254',
  },
  {
    id: 105,
    name: 'Mực gói Ricoh MP2554/3054/3554/4054/5054 (1Kg)',
    code: 'HY_51792',
    price: '260.000 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/51792-7894.jpg',
    link: 'https://duclan.vn/muc-goi-rioch-mp2554-7894',
  },
  {
    id: 106,
    name: 'Trống Ricoh MP 4000/5000/4002/5002(PN61312)',
    code: 'Katun_52489',
    price: '583.000 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52489-1200x1200-8751.jpg',
    link: 'https://duclan.vn/trong-ricoh-aficio-mp-4000-8751',
  },
  {
    id: 107,
    name: 'Trống Toshiba E-Studio 550/650/810 (CET1893)',
    code: 'CET_8502',
    price: '782.000 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/8502-1200x1200-1-8824.jpg',
    link: 'https://duclan.vn/trong-toshiba-e-studio-550-650-810-cet1893--8824',
  },
  {
    id: 108,
    name: 'Gạt mực Minolta Bizhub C451/C452/C654/C754 - color',
    code: 'CET_52803',
    price: '68.900 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52803-1200x1200-9048.jpg',
    link: 'https://duclan.vn/gat-muc-minolta-bizhub-c451-c452-c654-c754-color-9048',
  },
  {
    id: 109,
    name: 'Mực gói Ricoh E 4500C/5500C/ MP C6000/7500 -vàng',
    code: 'JJ_50985',
    price: '464.000 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/50985-7256.jpg',
    link: 'https://duclan.vn/muc-goi-ricoh-e-4500c-5500c-mp-c6000-7500-vang-7256',
  },
  {
    id: 110,
    name: 'Trống Ricoh Aficio 550/650/1060/1075',
    code: 'SI_4221',
    price: '689.000 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/4221_1200x1200-8231.jpg',
    link: 'https://duclan.vn/trong-ricoh-aficio-550-650-1060-1075-8231',
  },
  {
    id: 111,
    name: 'Mực gói Ricoh MPC 3503/4503/3504/4504/6004 M (500g)',
    code: 'JJ_4265',
    price: '464.000 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/4265--8144.jpg',
    link: 'https://duclan.vn/muc-goi-ricoh-mpc-3503-4503-3504-4504-6502-8002-m-500g--8144',
  },
  {
    id: 112,
    name: 'Trống Ricoh MPC 6000/7500 (Katun Access)',
    code: 'Katun_52229',
    price: '901.000 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52229_1200x1200-8500.jpg',
    link: 'https://duclan.vn/trong-ricoh-mpc-6000-7500-katun-access--8500',
  },
]

const vatTuInLaser = [
  {
    id: 201,
    name: 'Mực chai HP1300 Universal (140g)',
    code: 'CO_52214',
    price: '28.900 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52214_1200x1200-1-8487.jpg',
    link: 'https://duclan.vn/muc-chai-hp1300-universal-140g--8487',
  },
  {
    id: 202,
    name: 'Hộp mực in HP 1010 * Canon 2900 (Q2612A/CRG303/FX9) 2K',
    code: 'RT_52728',
    price: '124.000 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52728-1200x1200-8968.jpg',
    link: 'https://duclan.vn/hop-muc-in-hp-1010-canon-2900-q2612a-crg303-fx9-2k-8968',
  },
  {
    id: 203,
    name: 'Hộp mực in HP 1010*Canon 2900 (Q2612A/CRG303) 2K',
    code: 'OM_1084',
    price: '160.000 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/1084_01-24.jpg',
    link: 'https://duclan.vn/muc-cartridge-estar-q2612a-24',
  },
  {
    id: 204,
    name: 'Trống HP MFP E72525dn/E72530dn/E72425dn (W9006MC)',
    code: 'SG_52312',
    price: '159.000 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/523121200x1200-8574.jpg',
    link: 'https://duclan.vn/trong-hp-mfp-e72525dn-e72530dn-e72425dn-w9006mc--8574',
  },
  {
    id: 205,
    name: 'Mực chai Hp M402 (OEM/ 80g)',
    code: '52450',
    price: '25.400 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52450_1200x1200-2-8706.jpg',
    link: 'https://duclan.vn/muc-chai-hp-m402-oem-80g--8706',
  },
  {
    id: 206,
    name: 'Trống máy in HP MFP M150a/M178NW',
    code: 'SG_269',
    price: '305.000 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/269-1200x1200-8146.jpg',
    link: 'https://duclan.vn/trong-hp-mfp-m150a-8146',
  },
  {
    id: 207,
    name: 'Trống máy in HP Pro 4203dn/MFP 4303fdw',
    code: 'SG_52563',
    price: '58.300 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52563-1200x1200-8821.jpg',
    link: 'https://duclan.vn/trong-may-in-hp-pro-4203dn-mfp-4303fdw-8821',
  },
  {
    id: 208,
    name: 'Mực chai HP Premium Plus (140g)',
    code: '',
    price: '28.900 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52197_1200x1200-1-8485.jpg',
    link: 'https://duclan.vn/muc-chai-hp-premium-plus-140g--8485',
  },
  {
    id: 209,
    name: 'Mực chai HP Premium 1320CN (140g)',
    code: 'EH_52351',
    price: '26.000 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52351_1200x1200-2-8614.jpg',
    link: 'https://duclan.vn/muc-nap-hp-1320-cn-premium-new-140g--8614',
  },
  {
    id: 210,
    name: 'Trống máy in HP CP M553/M552 (ES-HPC553)',
    code: 'ES_50822',
    price: '68.900 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/50822-7249.jpg',
    link: 'https://duclan.vn/trong-may-in-hp-cp-m553-7249',
  },
  {
    id: 211,
    name: 'Mực chai HP CP 1025/1518/M252/M452 C (40g)',
    code: 'FK_52241',
    price: '57.000 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52241_1200x1200-8509.jpg',
    link: 'https://duclan.vn/muc-chai-hp-cp-1025-1518-m252-m452-c-40g--8509',
  },
  {
    id: 212,
    name: 'Mực chai HP Premium (140g)',
    code: 'CO_52288',
    price: '29.900 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52288_1200x1200-3-8555.jpg',
    link: 'https://duclan.vn/muc-chai-hp-premium-140g--8555',
  },
]

const vatTuInPhun = [
  {
    id: 301,
    name: 'Mực Art Paper UV Epson Ecotank M (1 liter)',
    code: 'DL_52443',
    price: '875.000 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52443_1200x1200-8697.jpg',
    link: 'https://duclan.vn/muc-in-art-paper-uv-epson-ecotank-m-1000ml-bot--8697',
  },
  {
    id: 302,
    name: 'Mực Dye Epson EcoTank L8050/L18050 (057 LC) (70ml)',
    code: 'DL_52265',
    price: '22.800 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52265_1200x1200-8538.jpg',
    link: 'https://duclan.vn/muc-in-epson-ecotank-l8050-8538',
  },
  {
    id: 303,
    name: 'Mực Dye HP-H8950 LB (1 kg)',
    code: 'Inktec_51616',
    price: '212.000 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/51616-7731.jpg',
    link: 'https://duclan.vn/muc-nuoc-hp-h8950-lb-1-liter-bot--7731',
  },
  {
    id: 304,
    name: 'Mực Dye Epson EcoTank L3110/L3150 (003BK) (70ml)',
    code: 'DL_52267',
    price: '22.800 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52267-1_1200x1200-8540.jpg',
    link: 'https://duclan.vn/muc-in-epson-ecotank-l3110-8540',
  },
  {
    id: 305,
    name: 'Mực pigment Epson E0019-01LB (1 kg)',
    code: 'Inktec_7925',
    price: '260.000 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/7925-8222.jpg',
    link: 'https://duclan.vn/muc-pigment-e0019-01lb-dung-cho-may-in-phun-epson-ecotank-l15160-l15150-l1116-1kg-bot--8222',
  },
  {
    id: 306,
    name: 'Mực Dye Epson EcoTank L8050/L18050 (057/003 M) (70ml)',
    code: 'DL_52263',
    price: '22.800 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52263_1200x1200-8536.jpg',
    link: 'https://duclan.vn/muc-in-epson-ecotank-l8050-8536',
  },
  {
    id: 307,
    name: 'Mực Dye Canon C5051-01LM (1 kg)',
    code: 'Inktec_50519',
    price: '162.000 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/50519-1200x1200-7553.jpg',
    link: 'https://duclan.vn/muc-nuoc-canon-c5051-01lm-1-liter-bot--7553',
  },
  {
    id: 308,
    name: 'Mực Dye Canon C5051-01LB (1 kg)',
    code: 'Inktec_50517',
    price: '162.000 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/50517-1200x1200-7551.jpg',
    link: 'https://duclan.vn/muc-nuoc-canon-c5051-01lb-1-liter-bot-7551',
  },
  {
    id: 309,
    name: 'Mực Art Paper UV Epson Ecotank C (1 liter)',
    code: 'DL_52441',
    price: '875.000 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52441_1200x1200-8695.jpg',
    link: 'https://duclan.vn/muc-in-art-paper-uv-epson-ecotank-c-1000ml-bot--8695',
  },
  {
    id: 310,
    name: 'Mực Dye Epson EcoTank L8050/L18050 (057 LM) (70ml)',
    code: 'DL_52266',
    price: '22.800 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52266_1200x1200-1-8539.jpg',
    link: 'https://duclan.vn/muc-in-epson-ecotank-l8050-8539',
  },
  {
    id: 311,
    name: 'Mực chuyển nhiệt Epson DTI06-01LLM (1 kg)',
    code: 'Inktec_52408',
    price: '623.000 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52408_1200x1200-8662.jpg',
    link: 'https://duclan.vn/muc-in-epson-dti06-01llm-1kg-bot--8662',
  },
  {
    id: 312,
    name: 'Mực Dye Epson EcoTank L3110/L3150 (003M) (70ml)',
    code: 'DL_52269',
    price: '22.800 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/52269-1_1200x1200-8542.jpg',
    link: 'https://duclan.vn/muc-in-epson-ecotank-l3110-8542',
  },
]

const vatTuInKim = [
  {
    id: 401,
    name: 'Mực ruy băng LQ800/300, 12.7*8m, black',
    code: 'LA_9301',
    price: '41.300 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/9301-1200x1200-6253.jpg',
    link: 'https://duclan.vn/hop-muc-in-lq300-6253',
  },
  {
    id: 402,
    name: 'Mực ruy băng Olivetti PR9, 7*15m',
    code: 'LA_50740',
    price: '48.800 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/50740_jpg--7902.jpg',
    link: 'https://duclan.vn/muc-ruy-bang-pr9-7-15m-black-color-box--7902',
  },
  {
    id: 403,
    name: 'Mực ruy băng Epson LQ310,12.7*14m,black',
    code: 'LA_9302',
    price: '48.800 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/9302-1200x1200-6254.jpg',
    link: 'https://duclan.vn/hop-muc-in-lq310-12-7-14m-black-color-box-6254',
  },
  {
    id: 404,
    name: 'Mực ruy băng OKI1190/1120,12.7mm*12m,black',
    code: 'LA_50741',
    price: '51.400 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/50741-7751.jpg',
    link: 'https://duclan.vn/muc-ruy-bang-oki1190-1120-12.7mm-12m-black-color-box--7751',
  },
  {
    id: 405,
    name: 'Mực ruy băng Epson LQ350,12.7*10m,black',
    code: 'LA_8217',
    price: '49.800 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/8217-1200x1200-5766.jpg',
    link: 'https://duclan.vn/hop-muc-in-lq350-12-7-10m-black-5766',
  },
  {
    id: 406,
    name: 'Mực ruy băng Olivetti PR02 , 6.35*14m',
    code: 'LA_50739',
    price: '46.600 đ',
    image: 'https://admin.duclan.vn/uploads/ckfinder/thumbs_250/50739-1200x1200-7502.jpg',
    link: 'https://duclan.vn/muc-ruy-bang-pr02-6-35-14m-black-color-box-7502',
  },
]
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white">
    <Header />

    <main class="flex-grow">
      <!-- Hero Banner -->
      <HeroBanner :banners="banners" />

      <!-- Feature Categories (6 blue buttons) -->
      <FeatureCategories />

      <!-- Find by Machine + Brand Logos (2-column layout) -->
      <BrandLogos />

      <!-- Product Sections -->
      <div style="background: white; padding: 20px 0">
        <div style="max-width: 1200px; margin: 0 auto; padding: 0 16px">
          <ProductCarousel
            title="Máy văn phòng"
            titleLink="https://duclan.vn/may-van-phong-1.cat"
            :products="mayVanPhong"
            :subTabs="[{ name: 'Máy In Laser', link: 'https://duclan.vn/may-in-laser-739.cat' }]"
          />

          <ProductCarousel
            title="Vật tư photocopy"
            titleLink="https://duclan.vn/linh-kien-khac-2.cat"
            :products="vatTuPhotocopy"
            :subTabs="[
              { name: 'Mực', link: 'https://duclan.vn/muc-631.cat' },
              { name: 'Cụm Trống', link: 'https://duclan.vn/cum-drum-275.cat' },
            ]"
          />

          <ProductCarousel
            title="Vật tư in laser"
            titleLink="https://duclan.vn/vat-tu-in-laser-3.cat"
            :products="vatTuInLaser"
            :subTabs="[
              { name: 'Mực Nạp', link: 'https://duclan.vn/muc-nap-734.cat' },
              { name: 'Hộp Mực Máy In', link: 'https://duclan.vn/hop-muc-may-in-123.cat' },
              { name: 'Linh Kiện Hộp Mực', link: 'https://duclan.vn/linh-kien-hop-muc-93.cat' },
            ]"
          />

          <ProductCarousel
            title="Vật tư in phun"
            titleLink="https://duclan.vn/vat-tu-in-phun-4.cat"
            :products="vatTuInPhun"
            :subTabs="[
              { name: 'Mực Nước (Dye)', link: 'https://duclan.vn/muc-nuoc-689.cat' },
              { name: 'Mực Nhiệt (Sublimation)', link: 'https://duclan.vn/muc-nhiet-697.cat' },
              { name: 'Mực Dầu (Pigment)', link: 'https://duclan.vn/muc-dau-pigment-690.cat' },
              { name: 'Mực UV', link: 'https://duclan.vn/muc-uv-590.cat' },
            ]"
          />

          <ProductCarousel
            title="Vật tư in kim"
            titleLink="https://duclan.vn/vat-tu-in-kim-6.cat"
            :products="vatTuInKim"
            :subTabs="[{ name: 'Ruy Băng', link: 'https://duclan.vn/ruy-bang-100.cat' }]"
          />
        </div>
      </div>

      <!-- Blog Section -->
      <BlogSection />
    </main>

    <Footer />
  </div>
</template>

<style scoped></style>
