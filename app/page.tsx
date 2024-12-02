"use client";

import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState<{
    nama: string;
    usia: string;
    emosi: string;
    terakhirMakan: string;
  }>({
    nama: "",
    usia: "",
    emosi: "",
    terakhirMakan: "",
  });

  const [rekomendasi, setRekomendasi] = useState<JSX.Element | null>(null);

  const [submittedData, setSubmittedData] = useState<{
    nama: string;
    usia: string;
    emosi: string;
    terakhirMakan: string;
  } | null>(null);

  const rekomendasiMakanan: Record<string, JSX.Element> = {
    Bahagia: (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Cokelat Bar</h3>
        <p className="mb-4">
        Saat anda mengonsumsi Cokelat yang mengandung senyawa seperti triptofan, teobromin, dan phenylethylalanin yang dapat meningkatkan produksi serotonin dan dopamin, 
        dua hormon tersebut yang berperan dalam perasaan bahagia. Konsumsi cokelat dapat memberikan efek positif pada suasana hati anda.
        </p>

        <h1>Kandungan Gizi pada coklat bar</h1>
        <table className="min-w-full border-collapse table-auto mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2 text-left">komposisi</th>
              <th className="border p-2 text-left">Kandungan/100 gr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Energi</td>
              <td className="border p-2">527 kal</td>
            </tr>
            <tr>
              <td className="border p-2">Protein</td>
              <td className="border p-2">2.0 gr</td>
            </tr>
            <tr>
              <td className="border p-2">Lemak</td>
              <td className="border p-2">29.8 gr</td>
            </tr>
            <tr>
              <td className="border p-2">Karbohidrat</td>
              <td className="border p-2">62.7 gr</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-xl font-semibold">Madu</h3>
        <p className="mb-4">
        Konsumsi madu tentu dapat memberikan efek menenangkan, terutama saat dikonsumsi sebelum tidur, 
        yang membantu mendapatkan tidur yang lebih baik—faktor penting tersebut baik untuk menjaga kesehatan mental.
        </p>
        <h1>Kandungan Gizi Pada Madu</h1>
        <table className="min-w-full border-collapse table-auto mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2 text-left">Komposisi:</th>
              <th className="border p-2 text-left">Kandungan/100 gr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Energi</td>
              <td className="border p-2">294 kal</td>
            </tr>
            <tr>
              <td className="border p-2">Protein</td>
              <td className="border p-2">0.3 gr</td>
            </tr>
            <tr>
              <td className="border p-2">Lemak</td>
              <td className="border p-2">0.0 gr</td>
            </tr>
            <tr>
              <td className="border p-2">Karbohidrat</td>
              <td className="border p-2">79.5 gr</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-xl font-semibold">APEL</h3>
        <p className="mb-4">
        Saat mengonsumsi buah Apel yang mengandung fitonutrien, dapat mendorong produksi neurotransmitter antidepresan, 
        sehingga baik untuk menjaga suasana hati anda tetap stabil.
        </p>

        <h1>Kandungan Gizi Pada Apel</h1>
        <table className="min-w-full border-collapse table-auto mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2 text-left">komposisi</th>
              <th className="border p-2 text-left">Kandungan/100 gr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Energi</td>
              <td className="border p-2">58 kal</td>
            </tr>
            <tr>
              <td className="border p-2">Protein</td>
              <td className="border p-2">0.3 gr</td>
            </tr>
            <tr>
              <td className="border p-2">Lemak</td>
              <td className="border p-2">0.4 gr</td>
            </tr>
            <tr>
              <td className="border p-2">Karbohidrat</td>
              <td className="border p-2">14.9 gr</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-xl font-semibold">Kue Pisang</h3>
        <p className="mb-4">
        Konsumsi Kue yang terbuat dari tepung gandum utuh atau bahan karbohidrat kompleks 
        lainnya membantu menjaga kestabilan kadar gula darah, memberikan energi yang lebih stabil, dan mencegah lonjakan emosi negative.
        </p>

        <h1>Kandungan Gizi pada Kue Pisang</h1>
        <table className="min-w-full border-collapse table-auto mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2 text-left">komposisi</th>
              <th className="border p-2 text-left">Kandungan/100 gr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Energi</td>
              <td className="border p-2">260 kal</td>
            </tr>
            <tr>
              <td className="border p-2">Protein</td>
              <td className="border p-2">2.0 gr</td>
            </tr>
            <tr>
              <td className="border p-2">Lemak</td>
              <td className="border p-2">5 gr</td>
            </tr>
            <tr>
              <td className="border p-2">Karbohidrat</td>
              <td className="border p-2">40 gr</td>
            </tr>
          </tbody>
        </table>

      </div>
    ),
    Sedih: (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Kopi</h3>
        <p className="mb-4">
        Mengonsumsi kopi yang mengandung kafein, Kafein adalah zat psikoaktif yang paling dikenal dalam kopi yang dapat merangsang pelepasan hormon dopamin dan norepinefrin, 
        yang dapat meningkatkan mood dan memberikan perasaan Bahagia.
        </p>
        <h1>Kandungan Gizi Pada Kopi</h1>
        <table className="min-w-full border-collapse table-auto mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2 text-left">Komposisi</th>
              <th className="border p-2 text-left">Kandungan/100 gr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Energi</td>
              <td className="border p-2">129 kal</td>
            </tr>
            <tr>
              <td className="border p-2">Protein</td>
              <td className="border p-2">12.3 gr</td>
            </tr>
            <tr>
              <td className="border p-2">Lemak</td>
              <td className="border p-2">0.5 gr</td>
            </tr>
            <tr>
              <td className="border p-2">Karbohidrat</td>
              <td className="border p-2">35.0 gr</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-xl font-semibold">Es Krim</h3>
        <p className="mb-4">
        Mengonsumsi Es krim yang mengandung asam amino triptofan, yang diubah menjadi serotonin dalam tubuh. Serotonin adalah neurotransmitter yang berperan penting dalam pengaturan suasana hati,
        sehingga dapat membuat seseorang merasa lebih tenang dan Bahagia.
        </p>
        <h1>Kandungan Gizi Es Krim</h1>
        <table className="min-w-full border-collapse table-auto mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2 text-left">Komposisi</th>
              <th className="border p-2 text-left">Kandungan/100 gr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Energi</td>
              <td className="border p-2">210 kal</td>
            </tr>
            <tr>
              <td className="border p-2">Protein</td>
              <td className="border p-2">4.0 gr</td>
            </tr>
            <tr>
              <td className="border p-2">Lemak</td>
              <td className="border p-2">12.5 gr</td>
            </tr>
            <tr>
              <td className="border p-2">Karbohidrat</td>
              <td className="border p-2">20.6 gr</td>
            </tr>
          </tbody>
        </table>
        <h3 className="text-xl font-semibold">Ikan Salmon</h3>
        <p className="mb-4">
        Mengonsumsi Ikan salmon yang kaya akan asam lemak omega-3, khususnya EPA &quot;Eicosapentaenoic Acid&quot; dan DHA &quot;Docosahexaenoic Acid&quot;. Dalam 100 gram ikan salmon, terdapat sekitar 2.150 mg EPA dan DHA. Omega-3 berperan penting dalam 
        kesehatan otak dan dapat membantu mengurangi gejala depresi serta kecemasan.
        </p>
        <h1>Kandungan Gizi Pada Ikan salmon</h1>
        <table className="min-w-full border-collapse table-auto mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2 text-left">Komposisi</th>
              <th className="border p-2 text-left">Kandungan/100 gr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Energi</td>
              <td className="border p-2">232 kal</td>
            </tr>
            <tr>
              <td className="border p-2">Protein</td>
              <td className="border p-2">25 gr</td>
            </tr>
            <tr>
              <td className="border p-2">Lemak</td>
              <td className="border p-2">14.6 gr</td>
            </tr>
            <tr>
              <td className="border p-2">Karbohidrat</td>
              <td className="border p-2">0 gr</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-xl font-semibold">Pisang</h3>
        <p className="mb-4">
        Mengonsumsi Pisang yang mengandung asam amino triptofan, yang merupakan prekursor untuk produksi serotonin, neurotransmitter yang berfungsi mengatur suasana hati. Serotonin dikenal sebagai 
        &quot;hormon bahagia&quot; karena dapat memberikan rasa tenang dan memberikan perasaan Bahagia.
        </p>
        <h1>Kandungan Gizi Pada Pisang</h1>
        <table className="min-w-full border-collapse table-auto mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2 text-left">Komposisi</th>
              <th className="border p-2 text-left">Kandungan/100 gr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Energi</td>
              <td className="border p-2">120 kal</td>
            </tr>
            <tr>
              <td className="border p-2">Protein</td>
              <td className="border p-2">1.2 gr</td>
            </tr>
            <tr>
              <td className="border p-2">Lemak</td>
              <td className="border p-2">0.2 gr</td>
            </tr>
            <tr>
              <td className="border p-2">Karbohidrat</td>
              <td className="border p-2">31.8 gr</td>
            </tr>
          </tbody>
        </table>
        <h3 className="text-xl font-semibold">Kacang Almond</h3>
        <p className="mb-4">
        Mengonsumsi Kacang almond yang mengandung asam lemak tak jenuh ganda dan tunggal, 
        yang dapat membantu menurunkan kadar kolesterol jahat dan meningkatkan kolesterol baik. Ini berpotensi meningkatkan sirkulasi darah ke otak, yang dapat berpengaruh positif pada suasana hati
        </p>
        <h1>Kandungan Gizi Pada Kacang Almond</h1>
        <table className="min-w-full border-collapse table-auto mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2 text-left">Komposisi</th>
              <th className="border p-2 text-left">Kandungan/100 gr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Energi</td>
              <td className="border p-2">579 kal</td>
            </tr>
            <tr>
              <td className="border p-2">Protein</td>
              <td className="border p-2">21 gr</td>
            </tr>
            <tr>
              <td className="border p-2">Lemak</td>
              <td className="border p-2">50 gr</td>
            </tr>
            <tr>
              <td className="border p-2">Karbohidrat</td>
              <td className="border p-2">21 gr</td>
            </tr>
          </tbody>
        </table>

      </div>
    ),
    Marah: (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Teh Chamomile/Green Tea</h3>
        <p className="mb-4">
        Mengonsumsi Teh chamomile dapat meningkatkan produksi melatonin, hormon yang berperan 
        dalam mengatur siklus tidur dan membantu relaksasi, sehingga membantu menenangkan pikiran saat marah.
        </p>
        <h1>Kandungan Gizi Pada Teh Chamomile/Green Tea</h1>
        <table className="min-w-full border-collapse table-auto mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2 text-left">Komposisi</th>
              <th className="border p-2 text-left">Kandungan/100 gr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Energi</td>
              <td className="border p-2">0 kal</td>
            </tr>
            <tr>
              <td className="border p-2">Protein</td>
              <td className="border p-2">0 gr</td>
            </tr>
            <tr>
              <td className="border p-2">Lemak</td>
              <td className="border p-2">0 gr</td>
            </tr>
            <tr>
              <td className="border p-2">Karbohidrat</td>
              <td className="border p-2">0 gr</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-xl font-semibold">Kacang Kenari</h3>
        <p className="mb-4">
        Mengonsumsi Kacang kenari yang kaya akan asam lemak omega-3, khususnya asam 
        alfa-linolenat &quot;ALA&quot;. Omega-3 telah terbukti memiliki efek positif pada kesehatan mental, termasuk mengurangi gejala depresi dan kecemasan, yang dapat berkontribusi pada pengelolaan kemarahan
        </p>
        <h1>Kandungan Gizi Pada Kacang Kenari</h1>
        <table className="min-w-full border-collapse table-auto mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2 text-left">Kompoisi</th>
              <th className="border p-2 text-left">Kandungan/100 gr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Energi</td>
              <td className="border p-2">657 kal</td>
            </tr>
            <tr>
              <td className="border p-2">Protein</td>
              <td className="border p-2">15.0 gr</td>
            </tr>
            <tr>
              <td className="border p-2">Lemak</td>
              <td className="border p-2">66.0 gr</td>
            </tr>
            <tr>
              <td className="border p-2">Karbohidrat</td>
              <td className="border p-2">13.0 gr</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-xl font-semibold">Soup</h3>
        <p className="mb-4">
        Saat mengonsumsi soup, Kaldu hangat dari sup dapat memberikan rasa nyaman dan 
        menenangkan, serta membantu menjaga hidrasi tubuh, yang penting untuk kesehatan mental
        </p>
        <h1>Kandungan Gizi Pada Soup</h1>
        <table className="min-w-full border-collapse table-auto mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2 text-left">Kompoisi</th>
              <th className="border p-2 text-left">Kandungan/100 gr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Energi</td>
              <td className="border p-2">92.7 kal</td>
            </tr>
            <tr>
              <td className="border p-2">Protein</td>
              <td className="border p-2">1.3 gr</td>
            </tr>
            <tr>
              <td className="border p-2">Lemak</td>
              <td className="border p-2">2.0 gr</td>
            </tr>
            <tr>
              <td className="border p-2">Karbohidrat</td>
              <td className="border p-2">1.0 gr</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    Takut: (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Jeruk</h3>
        <p className="mb-4">
        Mengonsumsi Jeruk yang mengandung folat, dapat berperan dalam produksi serotonin, neurotransmitter 
        yang berhubungan dengan perasaan bahagia. Kadar serotonin yang seimbang dapat membantu mengatur suasana hati dan mengurangi perasaan takut.
        </p>
        <table className="min-w-full border-collapse table-auto mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2 text-left">Komposisi</th>
              <th className="border p-2 text-left">Kandungan/100 gr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Energi</td>
              <td className="border p-2">87.2 kal</td>
            </tr>
            <tr>
              <td className="border p-2">Protein</td>
              <td className="border p-2">0.9 gr</td>
            </tr>
            <tr>
              <td className="border p-2">Lemak</td>
              <td className="border p-2">0.2 gr</td>
            </tr>
            <tr>
              <td className="border p-2">Karbohidrat</td>
              <td className="border p-2">11.2 gr</td>
            </tr>
          </tbody>
        </table>
        <h3 className="text-xl font-semibold">Yogurt</h3>
        <p className="mb-4">
        Mengonsumsi Yogurt yang mengandung bakteri baik seperti Lactobacillus dan Bifidobacteria.
        Penelitian menunjukkan bahwa probiotik ini dapat mempengaruhi suasana hati dan membantu mengurangi kecemasan. Probiotik dapat mengubah kimia di otak dan mengurangi hormon stres seperti kortisol,
        </p>
        <table className="min-w-full border-collapse table-auto mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2 text-left">Komposisi</th>
              <th className="border p-2 text-left">Kandungan/100 gr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Energi</td>
              <td className="border p-2">52 kal</td>
            </tr>
            <tr>
              <td className="border p-2">Protein</td>
              <td className="border p-2">3.3 gr</td>
            </tr>
            <tr>
              <td className="border p-2">Lemak</td>
              <td className="border p-2">2.5 gr</td>
            </tr>
            <tr>
              <td className="border p-2">Karbohidrat</td>
              <td className="border p-2">4.0 gr</td>
            </tr>
          </tbody>
        </table>
        <h3 className="text-xl font-semibold">Alpukat</h3>
        <p className="mb-4">
        Salah satu kandungan alupkat yaitu Kalium dalam alpukat dapat berfungsi untuk mengontrol tekanan darah. 
        Tekanan darah yang stabil dapat membantu mengurangi gejala fisik dari kecemasan dan ketakutan
        </p>
        <table className="min-w-full border-collapse table-auto mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2 text-left">Komposisi</th>
              <th className="border p-2 text-left">Kandungan/100 gr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Energi</td>
              <td className="border p-2">85 kal</td>
            </tr>
            <tr>
              <td className="border p-2">Protein</td>
              <td className="border p-2">0.9 gr</td>
            </tr>
            <tr>
              <td className="border p-2">Lemak</td>
              <td className="border p-2">6.5 gr</td>
            </tr>
            <tr>
              <td className="border p-2">Karbohidrat</td>
              <td className="border p-2">7.7 grp</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.emosi) {
      setRekomendasi(rekomendasiMakanan[formData.emosi]);
      setSubmittedData(formData);
    }
  };  

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold font-mono mb-4 text-center">Web Rekomendasi Makanan Berdasarkan Emosi</h1>
      <img
          src="/image/bergizi.png" // Ganti dengan path gambar PNG Anda
          alt="Biodata Icon"
          className="w-full max-w-[220px] h-auto object-contain rounded-t-lg mb-4 mx-auto"
        />
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">Nama</label>
          <input
            type="text"
            name="nama"
            placeholder="Masukan Nama"
            value={formData.nama}
            onChange={handleChange}
            autoComplete="off"
            className="w-full p-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            required
          />
        </div>
  
        <div className="mb-4">
          <label className="block text-gray-700">Umur</label>
          <input
            type="number"
            name="usia"
            placeholder="Input Umur"
            value={formData.usia}
            onChange={handleChange}
            autoComplete="off"
            className="w-full p-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            required
          />
        </div>
  
        <div className="mb-4">
          <label className="block text-gray-700">Makanan Terakhir yang Dimakan</label>
          <input
            type="text"
            name="terakhirMakan"
            placeholder="Makanan yang terakhir Anda konsumsi"
            value={formData.terakhirMakan}
            onChange={handleChange}
            autoComplete="off"
            className="w-full p-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            required
          />
        </div>
  
        <div className="mb-4">
          <label className="block text-gray-700">Pilih Emosi:</label>
          <select
            name="emosi"
            value={formData.emosi}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          >
            <option className="text-black" value="">Pilih Emosi</option>
            <option className="text-black" value="Bahagia">Bahagia</option>
            <option className="text-black" value="Sedih">Sedih</option>
            <option className="text-black" value="Marah">Marah</option>
            <option className="text-black" value="Takut">Takut</option>
          </select>
        </div>
  
        <div className="text-center">
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
      <br />  
  
      {/* Display submitted data */}
      {submittedData && (
        <div className="mt-6 p-6 bg-green-50 border-l-4 border-green-500 rounded-lg shadow-md transition-all duration-300 hover:shadow-2xl max-w-lg mx-auto">
        {/* Gambar PNG yang diletakkan di atas biodata */}
        
        <img
          src="/image/TestAccount.png" // Ganti dengan path gambar PNG Anda
          alt="Biodata Icon"
          className="w-[100px] h-[100px] object-cover rounded-t-lg mb-4 mx-auto"
        />
          <h1 className="text-gray-800 text-xl font-semibold text-left text-center">Biodata</h1>
          <br/>
          <div className="text-gray-700 text-lg mt-2 text-left">
            <span className="font-semibold">Nama: </span>{submittedData.nama}
          </div>
          <div className="text-gray-700 text-lg mt-2 text-left">
            <span className="font-semibold">Umur: </span>{submittedData.usia}
          </div>
          <div className="text-gray-700 text-lg mt-2 text-left">
            <span className="font-semibold">Makanan terakhir: </span>{submittedData.terakhirMakan}
          </div>
        </div>
      )}
  
  <br />
      {rekomendasi && (
        <div className="mt-6 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-lg shadow-md transition-all duration-300 hover:shadow-2xl max-w-lg mx-auto">
          <img
          src="/image/Calories.png" // Ganti dengan path gambar PNG Anda
          alt="Biodata Icon"
          className="w-[100px] h-[100px] object-cover rounded-t-lg mb-4 mx-auto"
          />
          <br />
          <h1 className="text-gray-800 text-xl font-semibold">Rekomendasi untuk Emosi {formData.emosi}:</h1>
          <div className="text-gray-700 text-lg mt-2">
            <span className="font-semibold">Rekomendasi: </span>{rekomendasi}
          </div>
        </div>
      )}
    </div>
  );  
}  
