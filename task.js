/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
const showDownload = (result) => {
    console.log("Download selesai");
    console.log(`Hasil Download: ${result}`);
  };
  
            /**
             * Fungsi untuk download file menggunakan Promise
             * @returns {Promise<string>}
             */
            const download = () => {
                return new Promise((resolve) => {
                setTimeout(() => {
                    const result = "windows-10.exe";
                    resolve(result);
                }, 3000);
                });
            };
  
  /**
   * Fungsi utama untuk mengeksekusi download menggunakan async-await
   */
  const main = async () => {
    const result = await download();
    showDownload(result); 
  };
  
  // Eksekusi fungsi utama
  main();
  