// @async: 表示函数是异步的

/**
 * Download data from specitic url
 * @async
 * @param {string} url - the url to download data
 * @return {Promise<string>} the data from url
 */
async function downloadData(url) {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(`Data from ${url}`);
    }, 1000);
  });
}

