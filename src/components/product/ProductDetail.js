import React from "react";

const ProductDetail = () => {
  return (
    <div className="gap-16 items-center py-8 px-6 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6">
      <div className="font-light  sm:text-lg text-gray-400 ">
        <h2 className=" text-3xl tracking-tight font-extrabold text-gray-900 ">
          Tabungan Sejahtera
        </h2>
        <p className=" mb-4 text-gray-800 mt-4 leading-relaxed text-justify lg:text-left italic">
          Solusi Menabung yang Menguntungkan dan Aman
        </p>
        <p className=" mb-4 text-gray-600 mt-4 leading-relaxed text-justify lg:text-left">
          Tabungan Sejahtera adalah produk tabungan yang dirancang khusus untuk
          memberikan keamanan dan keuntungan optimal bagi setiap nasabah. Dengan
          bunga kompetitif dan biaya administrasi ringan, produk ini memastikan
          pertumbuhan simpanan yang stabil dan terpercaya.
        </p>
        <p className=" text-gray-600 mt-4 leading-relaxed text-justify lg:text-left">
          Dengan produk Tabungan Sejahtera, bank Anda memberikan solusi tabungan
          yang nyaman, fleksibel, dan terpercaya bagi masyarakat untuk mencapai
          tujuan keuangan mereka.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
          <div class="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md border border-gray-200">
            <h2 class="text-2xl font-bold mb-4 text-gray-800">
              Keunggulan Produk
            </h2>
            <ul class="space-y-4">
              <li class="flex items-start">
                <div class="flex-shrink-0 text-gray-800 mr-3 font-bold">1.</div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-800">
                    Bunga Kompetitif
                  </h3>
                  <p class="text-gray-600">
                    Nikmati suku bunga menarik untuk setiap saldo harian,
                    sehingga dana Anda berkembang lebih cepat.
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 text-gray-800 mr-3 font-bold">2.</div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-800">
                    Bebas Biaya Administrasi Bulanan
                  </h3>
                  <p class="text-gray-600">
                    Menyimpan uang jadi lebih ringan tanpa adanya potongan
                    bulanan.
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 text-gray-800 mr-3 font-bold">3.</div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-800">
                    Akses Mudah
                  </h3>
                  <p class="text-gray-600">
                    Pantau dan akses saldo Anda kapan saja dan di mana saja
                    melalui aplikasi mobile banking kami yang user-friendly.
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 text-gray-800 mr-3 font-bold">4.</div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-800">
                    Bonus Menarik
                  </h3>
                  <p class="text-gray-600">
                    Dapatkan bonus tambahan di akhir tahun sebagai apresiasi
                    untuk nasabah setia.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div class="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md border border-gray-200">
            <h2 class="text-2xl font-bold mb-4 text-gray-800">
              Syarat dan Ketentuan
            </h2>
            <ul class="space-y-4">
              <li class="flex items-start">
                <div class="flex-shrink-0 text-gray-800 mr-3 font-bold">1.</div>
                <div>
                  <h3 class=" text-gray-600">
                    Setoran awal minimum Rp100.000.
                  </h3>
                </div>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 text-gray-800 mr-3 font-bold">2.</div>
                <div>
                  <h3 class=" text-gray-600">
                    Gratis biaya administrasi untuk saldo di atas Rp1.000.000.
                  </h3>
                </div>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 text-gray-800 mr-3 font-bold">3.</div>
                <div>
                  <h3 class=" text-gray-600">
                    Nasabah wajib mengisi formulir dan melampirkan KTP/SIM
                    sebagai identitas.
                  </h3>
                </div>
              </li>
            </ul>
          </div>
          <div class="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md border border-gray-200">
            <h2 class="text-2xl font-bold mb-4 text-gray-800">
              Cara Membuka Rekening
            </h2>
            <ul class="space-y-4">
              <li class="flex items-start">
                <div class="flex-shrink-0 text-gray-800 mr-3 font-bold">1.</div>
                <div>
                  <h3 class=" text-gray-600">
                    Kunjungi cabang terdekat atau buka rekening secara online
                    melalui website.
                  </h3>
                </div>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 text-gray-800 mr-3 font-bold">2.</div>
                <div>
                  <h3 class=" text-gray-600">
                    Bebas Biaya Administrasi Bulanan
                  </h3>
                </div>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 text-gray-800 mr-3 font-bold">3.</div>
                <div>
                  <h3 class=" text-gray-600">
                    Isi formulir dan verifikasi identitas.
                  </h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
